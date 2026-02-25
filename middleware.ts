import { NextRequest, NextResponse } from 'next/server'
import { getClientIP, isAllowedOrigin, createRateLimitKey } from '@/lib/security'

/**
 * In-memory rate limit store
 * In production on Vercel, each function instance has its own memory
 * This is sufficient for a portfolio site with moderate traffic
 */
const rateLimitStore = new Map<
  string,
  {
    count: number
    resetTime: number
  }
>()

const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute in milliseconds
const RATE_LIMIT_MAX_REQUESTS = 10 // 10 requests per minute

/**
 * Check rate limit for an IP on an endpoint
 */
function checkRateLimit(ip: string, endpoint: string): { allowed: boolean; retryAfter?: number } {
  const key = createRateLimitKey(ip, endpoint)
  const now = Date.now()

  const record = rateLimitStore.get(key)

  // No record or window expired
  if (!record || now >= record.resetTime) {
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    })
    return { allowed: true }
  }

  // Increment counter
  if (record.count < RATE_LIMIT_MAX_REQUESTS) {
    record.count++
    return { allowed: true }
  }

  // Rate limit exceeded
  const retryAfter = Math.ceil((record.resetTime - now) / 1000)
  return { allowed: false, retryAfter }
}

/**
 * Main middleware function
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

  // Only apply security middleware to API routes
  if (!pathname.startsWith('/api/')) {
    return NextResponse.next()
  }

  // 2. CORS Check (only for /api/chat endpoint)
  if (pathname === '/api/chat') {
    const origin = request.headers.get('origin')

    // Preflight request
    if (request.method === 'OPTIONS') {
      if (origin && isAllowedOrigin(origin)) {
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
    if (!origin || !isAllowedOrigin(origin)) {
      return new NextResponse(JSON.stringify({ error: 'CORS policy violation' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      })
    }
  }

  // 3. Rate Limiting (for /api/chat endpoint)
  if (pathname === '/api/chat' && request.method === 'POST') {
    const ip = getClientIP(request.headers)
    const rateLimitCheck = checkRateLimit(ip, '/api/chat')

    if (!rateLimitCheck.allowed) {
      console.warn(`[RATE_LIMIT] Rate limit exceeded for IP ${ip} on /api/chat`)

      return new NextResponse(JSON.stringify({ error: 'Rate limit exceeded' }), {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': String(rateLimitCheck.retryAfter),
          'X-RateLimit-Limit': String(RATE_LIMIT_MAX_REQUESTS),
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': String(Date.now() + (rateLimitCheck.retryAfter || 60) * 1000),
        },
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
