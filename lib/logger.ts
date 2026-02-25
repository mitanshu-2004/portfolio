/**
 * Logging utilities with optional Sentry integration
 * This module provides structured logging for security, monitoring, and debugging
 * Sentry is optional - if SENTRY_DSN is not set, logging is disabled gracefully
 */

// Optional Sentry import - will be undefined if not installed
let Sentry: any = null
try {
  Sentry = require('@sentry/nextjs')
} catch (e) {
  // Sentry not installed - logging will use console fallback
  console.log('Sentry not installed - using console logging only')
}

/**
 * Initialize Sentry logging (call once on app startup)
 * Only initializes if Sentry is installed AND SENTRY_DSN is set
 */
export function initializeLogging(): void {
  if (!Sentry || !process.env.SENTRY_DSN) {
    return // Sentry not available or not configured
  }

  if (typeof window === 'undefined') {
    // Server-side initialization
    Sentry.init({
      // DSN will be loaded from SENTRY_DSN environment variable automatically
      dsn: process.env.SENTRY_DSN,
      environment: process.env.NODE_ENV || 'production',
      tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
      debug: process.env.NODE_ENV !== 'production',
      ignoreErrors: [
        // Browser extensions
        'top.GLOBALS',
        'chrome-extension://',
        'moz-extension://',
      ],
    })
  }
}

/**
 * Log a chat API request
 */
export function logChatRequest(data: {
  ip: string
  userAgent?: string
  messagesCount: number
  payloadSize: number
  timestamp: string
}): void {
  const message = `Chat API Request from ${data.ip} (${data.messagesCount} messages, ${data.payloadSize} bytes)`

  if (Sentry) {
    Sentry.captureMessage(message, {
      level: 'info',
      tags: {
        endpoint: '/api/chat',
        type: 'api_request',
      },
      contexts: {
        request: {
          ip_address: data.ip,
          user_agent: data.userAgent || 'unknown',
        },
        chat: {
          messages_count: data.messagesCount.toString(),
          payload_size: `${data.payloadSize} bytes`,
        },
      },
    })
  } else {
    console.log(`[CHAT_REQUEST] ${message}`)
  }
}

/**
 * Log a chat API response
 */
export function logChatResponse(data: {
  statusCode: number
  responseTime: number
  answerPreview?: string
  tokenCount?: number
  error?: string
}): void {
  const message = `Chat API Response (${data.statusCode}) in ${data.responseTime}ms`

  if (Sentry) {
    Sentry.captureMessage(message, {
      level: data.statusCode >= 500 ? 'error' : data.statusCode >= 400 ? 'warning' : 'info',
      tags: {
        endpoint: '/api/chat',
        type: 'api_response',
        status_code: data.statusCode.toString(),
      },
      contexts: {
        response: {
          status: data.statusCode.toString(),
          response_time: `${data.responseTime}ms`,
          token_count: data.tokenCount?.toString() || 'unknown',
        },
        ...(data.error && { error: { message: data.error } }),
      },
    })
  } else {
    console.log(`[CHAT_RESPONSE] ${message}${data.error ? ` - ERROR: ${data.error}` : ''}`)
  }
}

/**
 * Log a specific chat interaction (question + answer)
 */
export function logChatInteraction(data: {
  question: string
  answerPreview: string
  recruiterHashedId: string
  duration: number
}): void {
  const message = `Chat Interaction from ${data.recruiterHashedId}`

  if (Sentry) {
    Sentry.captureMessage(message, {
      level: 'info',
      tags: {
        type: 'chat_interaction',
        recruiter_id: data.recruiterHashedId,
      },
      contexts: {
        interaction: {
          question: data.question.substring(0, 200),
          answer_preview: data.answerPreview.substring(0, 500),
          duration: `${data.duration}ms`,
        },
      },
    })
  } else {
    console.log(
      `[CHAT_INTERACTION] Q: ${data.question.substring(0, 100)}... (${data.duration}ms)`
    )
  }
}

/**
 * Log a portfolio page visit
 */
export function logPortfolioVisit(data: {
  referrer?: string
  userAgent?: string
  ip: string
  path: string
}): void {
  const message = `Portfolio visit to ${data.path}`

  if (Sentry) {
    Sentry.captureMessage(message, {
      level: 'info',
      tags: {
        type: 'page_visit',
        path: data.path,
      },
      contexts: {
        page: {
          referrer: data.referrer || 'direct',
          user_agent: data.userAgent || 'unknown',
        },
      },
    })
  } else {
    console.log(`[PAGE_VISIT] ${data.path}`)
  }
}

/**
 * Log an error with context
 */
export function logError(error: unknown, context?: Record<string, unknown>): void {
  if (Sentry) {
    if (error instanceof Error) {
      Sentry.captureException(error, {
        contexts: context ? { error_context: context } : undefined,
      })
    } else {
      Sentry.captureMessage(String(error), {
        level: 'error',
        contexts: context ? { error_context: context } : undefined,
      })
    }
  } else {
    console.error('[ERROR]', error, context)
  }
}

/**
 * Log a rate limit violation
 */
export function logRateLimitViolation(data: {
  ip: string
  endpoint: string
  limit: number
  window: string
}): void {
  const message = `Rate limit exceeded on ${data.endpoint} from ${data.ip}`

  if (Sentry) {
    Sentry.captureMessage(message, {
      level: 'warning',
      tags: {
        type: 'rate_limit_violation',
        endpoint: data.endpoint,
        ip_address: data.ip,
      },
      contexts: {
        rate_limit: {
          limit: `${data.limit}/${data.window}`,
        },
      },
    })
  } else {
    console.warn(`[RATE_LIMIT] ${message}`)
  }
}

/**
 * Log input validation failure
 */
export function logValidationError(data: {
  endpoint: string
  reason: string
  ip: string
}): void {
  const message = `Validation error on ${data.endpoint}: ${data.reason}`

  if (Sentry) {
    Sentry.captureMessage(message, {
      level: 'warning',
      tags: {
        type: 'validation_error',
        endpoint: data.endpoint,
      },
      contexts: {
        validation: {
          reason: data.reason,
        },
      },
    })
  } else {
    console.warn(`[VALIDATION_ERROR] ${message}`)
  }
}

/**
 * Log health check
 */
export function logHealthCheck(data: { status: 'healthy' | 'unhealthy'; message?: string }): void {
  const message = `Health check: ${data.status}`

  if (Sentry) {
    Sentry.captureMessage(message, {
      level: data.status === 'healthy' ? 'info' : 'error',
      tags: {
        type: 'health_check',
      },
    })
  } else {
    console.log(`[HEALTH_CHECK] ${message}`)
  }
}
