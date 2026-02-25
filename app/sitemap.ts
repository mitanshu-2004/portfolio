import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://mitanshu.me',
            lastModified: new Date('2025-08-01'),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ]
}
