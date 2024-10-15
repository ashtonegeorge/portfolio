import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(`*[_type == "project" && defined(slug.current)] {
    _id,
    title,
    slug,
    "imageUrl": mainImage.asset->url,
}`)

export const PROJECT_QUERY = defineQuery(`*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    repoUrl,
    "imageUrl": mainImage.asset->url,
    publishedAt,
    description,
    techStack,
    product,
    outcome,
    }`, 
    { $slug: 'string' }
)