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
    }))

    for (const api of this.apis) {
      this.clients.set(api.name, new Groq({ apiKey: api.key }))
    }

    console.log(`Initialized ${this.apis.length} Groq API key(s)`)
  }

  /**
   * Get next available API client
   */
  private getNextAvailableApi(): ApiConfig | null {
    const startIndex = this.currentIndex
    let attempts = 0

    while (attempts < this.apis.length) {
      const index = (this.currentIndex + attempts) % this.apis.length
      const api = this.apis[index]

      if (api.enabled && api.consecutiveFailures < this.maxConsecutiveFailures) {
        this.currentIndex = (index + 1) % this.apis.length
        return api
      }

      attempts++
    }

    return null
  }

  /**
   * Reset failure counts for an API
   */
  private resetApiFailures(api: ApiConfig): void {
    api.consecutiveFailures = 0
  }

  /**
   * Record a failure for an API
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
    }>
  } {
    return {
      totalApis: this.apis.length,
      enabledApis: this.apis.filter((a) => a.enabled).length,
      apis: this.apis.map((a) => ({
        name: a.name,
        enabled: a.enabled,
        failureCount: a.failureCount,
        consecutiveFailures: a.consecutiveFailures,
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

    while (true) {
      const api = this.getNextAvailableApi()

      if (!api) {
        console.error('All Groq APIs failed. Using fallback response.')
        return this.getFallbackResponse()
      }

      try {
        const client = this.clients.get(api.name)
        if (!client) {
          throw new Error(`Client not found for ${api.name}`)
        }

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
        this.recordApiFailure(api)

        const errorMsg = error instanceof Error ? error.message : String(error)
        errors.push({ apiName: api.name, error: errorMsg })

        console.warn(
          `Groq API ${api.name} failed (attempt ${api.failureCount}): ${errorMsg}`
        )

        continue
      }
    }
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
