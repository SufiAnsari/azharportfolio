import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://azhar-hakim-portfolio.netlify.app';

    return [
        {
            url: baseUrl,
            lastModified: new Date('2026-07-22'),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];
}
