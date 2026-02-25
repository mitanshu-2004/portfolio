import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                // All standard crawlers
                userAgent: '*',
                allow: '/',
            },
            {
                // GEO: explicitly allow AI crawlers — increases probability of AI citation
                userAgent: 'GPTBot',
                allow: '/',
            },
            {
                userAgent: 'ClaudeBot',
                allow: '/',
            },
            {
                userAgent: 'PerplexityBot',
                allow: '/',
            },
            {
                userAgent: 'Google-Extended',
                allow: '/',
            },
            {
                userAgent: 'Amazonbot',
                allow: '/',
            },
        ],
        sitemap: 'https://mitanshu.me/sitemap.xml',
        host: 'https://mitanshu.me',
    }
}
