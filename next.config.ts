import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // MIME Type Protection
          { key: 'X-Content-Type-Options', value: 'nosniff' },

          // Clickjacking Protection
          { key: 'X-Frame-Options', value: 'DENY' },

          // XSS Protection (legacy, but still recommended)
          { key: 'X-XSS-Protection', value: '1; mode=block' },

          // Referrer Policy
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },

          // Feature/Permissions Policy
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },

          // Content Security Policy - Strict XSS prevention
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://fonts.googleapis.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com",
              "img-src 'self' data: https:",
              "connect-src 'self' https://api.groq.com https://*.sentry.io",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },

          // HSTS - Enforce HTTPS for 1 year
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
    ]
  },

  // Enable compression
  compress: true,

  // Disable x-powered-by header (security by obscurity, but still helpful)
  poweredByHeader: false,
}

export default nextConfig

