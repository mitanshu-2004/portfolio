/**
 * Multi-API Groq Client Manager
 * Supports multiple API keys with automatic failover
 * If one API fails, automatically tries the next one
 * Includes fallback response system if all APIs fail
 */

import Groq from 'groq-sdk'
import { logError } from './logger'

/**
 * Configuration for a single Groq API instance
 */
interface ApiConfig {
  key: string
  name: string
  enabled: boolean
  failureCount: number
  consecutiveFailures: number
  // Wall-clock timestamp (ms) before which this key should not be retried.
  // Used for rate-limit cooldowns parsed from the Groq 429 retry-after hint.
  // 0 = available right now.
  cooldownUntil: number
}

/**
 * Response from completion attempt
 */
interface CompletionResult {
  success: boolean
  answer?: string
  apiUsed?: string
  tokenCount?: number
  error?: string
  isFromFallback?: boolean
}

/**
 * Groq Multi-API Client Manager
 */
class GroqClientManager {
  private apis: ApiConfig[] = []
  private clients: Map<string, Groq> = new Map()
  private currentIndex: number = 0
  private readonly maxConsecutiveFailures = 3

  constructor() {
    this.initializeApis()
  }

  /**
   * Initialize all API keys from environment
   */
  private initializeApis(): void {
    const apiKeysEnv = process.env.GROQ_API_KEYS
    const singleKeyEnv = process.env.GROQ_API_KEY

    const keys: string[] = []

    if (apiKeysEnv) {
      keys.push(
        ...apiKeysEnv
          .split(',')
          .map((k) => k.trim())
          .filter((k) => k.length > 0)
      )
    } else if (singleKeyEnv) {
      keys.push(singleKeyEnv.trim())
    }

    if (keys.length === 0) {
      throw new Error('No Groq API keys found in environment')
    }

    this.apis = keys.map((key, index) => ({
      key,
      name: `groq-api-${index + 1}`,
      enabled: true,
      failureCount: 0,
      consecutiveFailures: 0,
      cooldownUntil: 0,
    }))

    for (const api of this.apis) {
      this.clients.set(api.name, new Groq({ apiKey: api.key }))
    }

    console.log(`Initialized ${this.apis.length} Groq API key(s)`)
  }

  /**
   * Pick the next usable key. Skips keys that are disabled or in cooldown.
   * Returns null only if every key is unavailable right now.
   */
  private getNextAvailableApi(): ApiConfig | null {
    const now = Date.now()
    let attempts = 0

    while (attempts < this.apis.length) {
      const index = (this.currentIndex + attempts) % this.apis.length
      const api = this.apis[index]

      const cooled = api.cooldownUntil <= now
      const underFailureCap = api.consecutiveFailures < this.maxConsecutiveFailures

      if (api.enabled && cooled && underFailureCap) {
        this.currentIndex = (index + 1) % this.apis.length
        return api
      }

      attempts++
    }

    return null
  }

  /**
   * If every key is cooled but waiting on a 429, return the earliest moment
   * one of them is expected to be available again. Used to decide whether to
   * sleep briefly (server-side) instead of falling back immediately.
   */
  private earliestCooldownEnd(): number {
    const now = Date.now()
    let earliest = Infinity
    for (const api of this.apis) {
      if (!api.enabled) continue
      if (api.consecutiveFailures >= this.maxConsecutiveFailures) continue
      if (api.cooldownUntil <= now) return now
      if (api.cooldownUntil < earliest) earliest = api.cooldownUntil
    }
    return earliest === Infinity ? -1 : earliest
  }

  /**
   * Parse "...try again in 4.5s..." or "...try again in 1m23s..." from
   * Groq's 429 error message. Returns the wait in milliseconds, capped
   * to a sane range. Returns null if the message has no hint.
   */
  private parseRetryAfter(message: string): number | null {
    if (!message) return null
    // "1m23s" or "23.4s"
    const minSec = message.match(/try again in\s+(\d+)m(\d+(?:\.\d+)?)s/i)
    if (minSec) {
      const ms = parseInt(minSec[1], 10) * 60_000 + parseFloat(minSec[2]) * 1000
      return Math.min(Math.max(ms, 1000), 120_000)
    }
    const secOnly = message.match(/try again in\s+(\d+(?:\.\d+)?)s/i)
    if (secOnly) {
      const ms = parseFloat(secOnly[1]) * 1000
      return Math.min(Math.max(ms, 1000), 120_000)
    }
    return null
  }

  /**
   * Detect whether an SDK error is a 429 rate-limit (vs. timeout / 500 / etc.)
   */
  private isRateLimitError(error: unknown): boolean {
    if (!error || typeof error !== 'object') return false
    const e = error as { status?: number; statusCode?: number; message?: string }
    if (e.status === 429 || e.statusCode === 429) return true
    const msg = (e.message || '').toLowerCase()
    return msg.includes('rate limit') || msg.includes('429') || msg.includes('too many requests')
  }

  /**
   * Successful call → clear failure state.
   */
  private resetApiFailures(api: ApiConfig): void {
    api.consecutiveFailures = 0
    api.cooldownUntil = 0
  }

  /**
   * 429 is not a "failure" of the key — the key is fine, we just hit our
   * per-minute quota. Park it on cooldown for the duration Groq tells us,
   * and let other keys handle the load in the meantime.
   */
  private recordRateLimit(api: ApiConfig, cooldownMs: number): void {
    api.cooldownUntil = Date.now() + cooldownMs
    console.warn(
      `API ${api.name} hit 429; cooling down ${(cooldownMs / 1000).toFixed(1)}s`
    )
  }

  /**
   * Any other failure (timeout, 5xx, auth, network) counts toward the
   * disable threshold. Three in a row and we stop using the key for the
   * lifetime of the process (until resetAllApis()).
   */
  private recordApiFailure(api: ApiConfig): void {
    api.failureCount++
    api.consecutiveFailures++

    if (api.consecutiveFailures >= this.maxConsecutiveFailures) {
      api.enabled = false
      console.warn(
        `API ${api.name} disabled after ${this.maxConsecutiveFailures} consecutive failures`
      )
    }
  }

  /**
   * Get status of all APIs
   */
  getStatus(): {
    totalApis: number
    enabledApis: number
    apis: Array<{
      name: string
      enabled: boolean
      failureCount: number
      consecutiveFailures: number
      cooldownMsRemaining: number
    }>
  } {
    const now = Date.now()
    return {
      totalApis: this.apis.length,
      enabledApis: this.apis.filter((a) => a.enabled).length,
      apis: this.apis.map((a) => ({
        name: a.name,
        enabled: a.enabled,
        failureCount: a.failureCount,
        consecutiveFailures: a.consecutiveFailures,
        cooldownMsRemaining: Math.max(0, a.cooldownUntil - now),
      })),
    }
  }

  /**
   * Create chat completion with automatic failover
   */
  async createCompletion(params: {
    messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>
    maxTokens?: number
    temperature?: number
    timeout?: number
  }): Promise<CompletionResult> {
    const startTime = Date.now()
    const errors: Array<{ apiName: string; error: string }> = []

    // Cap the total wall time we'll spend cycling through keys. Without this,
    // a chain of 429s could keep the request pending for tens of seconds.
    const overallDeadline = startTime + (params.timeout || 8000) + 4000

    while (Date.now() < overallDeadline) {
      let api = this.getNextAvailableApi()

      if (!api) {
        // Every key is in cooldown right now. If the earliest one comes back
        // soon enough to fit our deadline, wait for it. Otherwise fall back.
        const next = this.earliestCooldownEnd()
        const wait = next > 0 ? next - Date.now() : -1
        if (wait > 0 && Date.now() + wait < overallDeadline) {
          await new Promise((r) => setTimeout(r, wait + 50))
          api = this.getNextAvailableApi()
          if (!api) {
            console.error('All Groq keys still unavailable after wait. Falling back.')
            return this.getFallbackResponse()
          }
        } else {
          console.error('All Groq keys unavailable; deadline exceeded. Falling back.')
          return this.getFallbackResponse()
        }
      }

      try {
        const client = this.clients.get(api.name)
        if (!client) throw new Error(`Client not found for ${api.name}`)

        const controller = new AbortController()
        const timeout = setTimeout(
          () => controller.abort(),
          params.timeout || 8000
        )

        try {
          const completion = await client.chat.completions.create(
            {
              model: 'llama-3.3-70b-versatile',
              max_tokens: params.maxTokens || 512,
              temperature: params.temperature ?? 0.3,
              messages: params.messages,
            },
            { signal: controller.signal as any }
          )

          clearTimeout(timeout)
          this.resetApiFailures(api)

          const answer = completion.choices[0]?.message?.content ?? ''
          const duration = Date.now() - startTime
          console.log(`Groq API request successful using ${api.name} (${duration}ms)`)

          return {
            success: true,
            answer,
            apiUsed: api.name,
            tokenCount: completion.usage?.total_tokens,
          }
        } finally {
          clearTimeout(timeout)
        }
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : String(error)
        errors.push({ apiName: api.name, error: errorMsg })

        if (this.isRateLimitError(error)) {
          // Park this key for the duration Groq suggested, retry on next key.
          const hint = this.parseRetryAfter(errorMsg) ?? 30_000
          this.recordRateLimit(api, hint)
        } else {
          this.recordApiFailure(api)
          console.warn(
            `Groq API ${api.name} failed (attempt ${api.failureCount}): ${errorMsg}`
          )
        }
        continue
      }
    }

    console.error('Groq failover deadline exceeded after errors:', errors)
    return this.getFallbackResponse()
  }

  /**
   * Fallback response when all APIs are exhausted
   */
  private getFallbackResponse(): CompletionResult {
    const fallbackMessages = [
      "I'm temporarily experiencing issues with our AI service. However, you can still reach Mitanshu directly at mitanshug2004@gmail.com for any questions about his experience, projects, or availability.",
      "Our AI assistant is currently unavailable, but Mitanshu is actively looking for opportunities. Contact him directly at mitanshug2004@gmail.com to discuss your requirements.",
      "Thanks for your interest in Mitanshu's background! Our chatbot is down for maintenance. Please email mitanshug2004@gmail.com directly - he typically responds within 24 hours.",
    ]

    const randomMessage = fallbackMessages[
      Math.floor(Math.random() * fallbackMessages.length)
    ]

    return {
      success: true,
      answer: randomMessage,
      apiUsed: 'fallback',
      isFromFallback: true,
    }
  }

  /**
   * Get total API count
   */
  getTotalApis(): number {
    return this.apis.length
  }

  /**
   * Re-enable all APIs
   */
  resetAllApis(): void {
    for (const api of this.apis) {
      api.enabled = true
      api.consecutiveFailures = 0
      api.cooldownUntil = 0
    }
    console.log('All APIs re-enabled')
  }
}

let instance: GroqClientManager | null = null

/**
 * Get or create the Groq client manager
 */
export function getGroqManager(): GroqClientManager {
  if (!instance) {
    instance = new GroqClientManager()
  }
  return instance
}

/**
 * Create a completion with automatic failover
 */
export async function createCompletionWithFailover(params: {
  messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>
  maxTokens?: number
  temperature?: number
  timeout?: number
}): Promise<CompletionResult> {
  const manager = getGroqManager()
  return manager.createCompletion(params)
}

/**
 * Get API status for monitoring
 */
export function getApiStatus() {
  const manager = getGroqManager()
  return manager.getStatus()
}
