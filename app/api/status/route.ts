import { NextRequest, NextResponse } from 'next/server'
import { getApiStatus } from '@/lib/groq-client'

export const runtime = 'nodejs'

/**
 * API Status Endpoint
 * Returns detailed status of all configured Groq APIs
 * Usage: GET /api/status
 *
 * Response:
 * {
 *   "status": "healthy",
 *   "timestamp": "2025-02-25T10:30:00Z",
 *   "apis": {
 *     "totalApis": 3,
 *     "enabledApis": 2,
 *     "details": [...]
 *   }
 * }
 */
export async function GET(req: NextRequest) {
  try {
    const apiStatus = getApiStatus()

    const status = {
      status: apiStatus.enabledApis > 0 ? 'healthy' : 'unhealthy',
      timestamp: new Date().toISOString(),
      apis: {
        totalApis: apiStatus.totalApis,
        enabledApis: apiStatus.enabledApis,
        details: apiStatus.apis,
      },
    }

    const statusCode = apiStatus.enabledApis > 0 ? 200 : 503

    return NextResponse.json(status, { status: statusCode })
  } catch (error) {
    return NextResponse.json(
      {
        status: 'error',
        timestamp: new Date().toISOString(),
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
