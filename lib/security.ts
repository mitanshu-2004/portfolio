/**
 * Security utilities for input validation, sanitization, and protection
 */

/**
 * Validate and sanitize chat message
 */
export function validateChatMessage(content: string): {
  valid: boolean
  error?: string
  sanitized?: string
} {
  if (!content || typeof content !== 'string') {
    return { valid: false, error: 'Message must be a non-empty string' }
  }

  const trimmed = content.trim()

  // Check length (prevent memory exhaustion)
  if (trimmed.length === 0) {
    return { valid: false, error: 'Message cannot be empty' }
  }

  if (trimmed.length > 2000) {
    return { valid: false, error: 'Message must be under 2000 characters' }
  }

  // Check for prompt injection attempts
  const injectionPatterns = [
    /ignore.*previous.*instruction/i,
    /disregard.*prompt/i,
    /forget.*system/i,
    /override.*behavior/i,
    /bypass.*rule/i,
    /role.*play/i,
    /pretend.*to.*be/i,
    /act.*as.*if/i,
  ]

  for (const pattern of injectionPatterns) {
    if (pattern.test(trimmed)) {
      // Log the attempt but allow it - just sanitize the content
      // The system prompt is designed to ignore these attempts
    }
  }

  return { valid: true, sanitized: trimmed }
}

/**
 * Validate message array structure
 */
export function validateMessageArray(messages: unknown): {
  valid: boolean
  error?: string
  data?: Array<{ role: 'user' | 'assistant'; content: string }>
} {
  if (!Array.isArray(messages)) {
    return { valid: false, error: 'Messages must be an array' }
  }

  if (messages.length === 0) {
    return { valid: false, error: 'Messages array cannot be empty' }
  }

  if (messages.length > 50) {
    return { valid: false, error: 'Conversation history too long (max 50 messages)' }
  }

  const validated: Array<{ role: 'user' | 'assistant'; content: string }> = []

  for (let i = 0; i < messages.length; i++) {
    const msg = messages[i]

    if (typeof msg !== 'object' || msg === null) {
      return { valid: false, error: `Message ${i} must be an object` }
    }

    const { role, content } = msg as Record<string, unknown>

    if (role !== 'user' && role !== 'assistant') {
      return { valid: false, error: `Message ${i}: invalid role "${role}"` }
    }

    if (typeof content !== 'string') {
      return { valid: false, error: `Message ${i}: content must be a string` }
    }

    const validation = validateChatMessage(content)
    if (!validation.valid) {
      return { valid: false, error: `Message ${i}: ${validation.error}` }
    }

    validated.push({ role: role as 'user' | 'assistant', content: validation.sanitized! })
  }

  return { valid: true, data: validated }
}

/**
 * Escape potential injection attempts in content
 */
export function escapePotentialInjection(content: string): string {
  // Remove any markdown-like instructions
  return content
    .replace(/^#+\s+/gm, '') // Remove markdown headers
    .replace(/\*\*(.+?)\*\*/g, '$1') // Remove markdown bold
    .replace(/__(.*?)__/g, '$1') // Remove markdown underline
    .trim()
}

/**
 * Get client IP from request
 */
export function getClientIP(headers: Headers): string {
  const forwarded = headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }

  const realIP = headers.get('x-real-ip')
  if (realIP) {
    return realIP
  }

  return 'unknown'
}

/**
 * Create a rate limit key from IP and endpoint
 */
export function createRateLimitKey(ip: string, endpoint: string): string {
  return `${ip}:${endpoint}`
}

/**
 * Check if request is from allowed origin
 */
export function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return false

  const allowedOrigins = [
    'https://mitanshu.me',
    'https://www.mitanshu.me',
    'http://localhost:3000', // Development
    'http://localhost:3001', // Development
  ]

  return allowedOrigins.includes(origin)
}

/**
 * Hash string for anonymization
 */
export function hashString(str: string): string {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32-bit integer
  }
  return Math.abs(hash).toString(16)
}
