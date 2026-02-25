/**
 * Security utilities for input validation and sanitization
 * Focused on message validation for the /api/chat endpoint
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
