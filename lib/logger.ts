/**
 * Minimal logging utilities
 * Uses native console.log, console.warn, console.error
 * No external dependencies
 */

/**
 * Log an error message
 */
export function logError(message: string, data?: Record<string, unknown>): void {
  if (data) {
    console.error(`[ERROR] ${message}`, data)
  } else {
    console.error(`[ERROR] ${message}`)
  }
}

/**
 * Log a warning message
 */
export function logWarning(message: string, data?: Record<string, unknown>): void {
  if (data) {
    console.warn(`[WARNING] ${message}`, data)
  } else {
    console.warn(`[WARNING] ${message}`)
  }
}

/**
 * Log an info message
 */
export function logInfo(message: string, data?: Record<string, unknown>): void {
  if (data) {
    console.log(`[INFO] ${message}`, data)
  } else {
    console.log(`[INFO] ${message}`)
  }
}
