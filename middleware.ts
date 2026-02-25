import { NextRequest, NextResponse } from 'next/server'

/**
 * Main middleware function
 * Handles HTTPS enforcement and CORS for the /api/chat endpoint
 */
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // 1. HTTPS Enforcement (for all routes in production)
  if (!enforceHttps(request)) {
    return NextResponse.redirect(
      `https://${request.nextUrl.host}${request.nextUrl.pathname}${request.nextUrl.search}`,
      { status: 301 }
    )
  }

  // Only apply CORS middleware to API routes
  if (!pathname.startsWith('/api/')) {
    return NextResponse.next()
  }

  // 2. CORS Check (only for /api/chat endpoint)
  if (pathname === '/api/chat') {
    const origin = request.headers.get('origin')
    const allowedOrigins = [
      'https://mitanshu.me',
      'https://www.mitanshu.me',
      'http://localhost:3000',
      'http://localhost:3001',
    ]

    // Preflight request
    if (request.method === 'OPTIONS') {
      if (origin && allowedOrigins.includes(origin)) {
        return new NextResponse(null, {
          status: 200,
          headers: {
            'Access-Control-Allow-Origin': origin,
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '86400',
          },
        })
      } else {
        // CORS not allowed
        return new NextResponse(null, { status: 403 })
      }
    }

    // Main request - check origin
    if (!origin || !allowedOrigins.includes(origin)) {
      return new NextResponse(JSON.stringify({ error: 'CORS policy violation' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      })
    }
  }

  return NextResponse.next()
}

/**
 * Helper to enforce HTTPS
 */
function enforceHttps(request: NextRequest): boolean {
  const proto = request.headers.get('x-forwarded-proto')

  // Allow HTTP in development
  if (process.env.NODE_ENV === 'development') {
    return true
  }

  // In production, ensure HTTPS
  if (proto !== 'https') {
    return false
  }

  return true
}

/**
 * Configure which routes this middleware applies to
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
}
