import { client } from "@/sanity/lib/client"
import { PROJECTS_QUERY } from "@/sanity/lib/queries"

export default async function sitemap() {
    const projects = await client.fetch(PROJECTS_QUERY)
    return [
        {
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
            url: 'https://www.ashtonegeorge.com',
        },
        {
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
            url: 'https://www.ashtonegeorge.com/projects',
        },
        ...projects.map(p => ({
            url: `https://www.ashtonegeorge.com/projects/${p.slug.current}`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7,
        })),
        {
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
            url: 'https://www.ashtonegeorge.com/digitaltwin',
        },
    ]
}