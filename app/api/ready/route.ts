import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

/**
 * Readiness probe endpoint
 * Returns 200 if the service is ready to accept traffic
 * This is similar to health, but can be used to implement traffic draining
 */
export async function GET(req: NextRequest) {
  try {
    // Verify all required configuration
    const requiredEnvVars = ['GROQ_API_KEY']
    const missing = requiredEnvVars.filter((envVar) => !process.env[envVar])

    if (missing.length > 0) {
      return NextResponse.json(
        {
          ready: false,
          timestamp: new Date().toISOString(),
          missing_config: missing,
        },
        { status: 503 }
      )
    }

    return NextResponse.json(
      {
        ready: true,
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        ready: false,
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
