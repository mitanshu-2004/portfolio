import type { MetadataRoute } from 'next'

const DOMAINS = ['robotics', 'ai', 'ds', 'web'] as const

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date()
    return [
        {
            url: 'https://mitanshu.me',
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 1,
        },
        ...DOMAINS.map((domain) => ({
            url: `https://mitanshu.me/cv?domain=${domain}`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        })),
    ]
}
