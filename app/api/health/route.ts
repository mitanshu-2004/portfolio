import { NextRequest, NextResponse } from 'next/server'
import { logHealthCheck } from '@/lib/logger'

export const runtime = 'edge'

/**
 * Health check endpoint
 * Returns 200 if the service is running
 * Used for monitoring and uptime checks
 */
export async function GET(req: NextRequest) {
  try {
    // Check that required environment variables are set
    if (!process.env.GROQ_API_KEY) {
      logHealthCheck({ status: 'unhealthy', message: 'Missing GROQ_API_KEY' })
      return NextResponse.json(
        {
          status: 'unhealthy',
          timestamp: new Date().toISOString(),
          reason: 'Missing configuration',
        },
        { status: 503 }
      )
    }

    logHealthCheck({ status: 'healthy' })

    return NextResponse.json(
      {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        version: '1.0.0',
        environment: process.env.NODE_ENV || 'production',
      },
      { status: 200 }
    )
  } catch (error) {
    logHealthCheck({
      status: 'unhealthy',
      message: error instanceof Error ? error.message : 'Unknown error',
    })

    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        reason: 'Internal error',
      },
      { status: 500 }
    )
  }
}
