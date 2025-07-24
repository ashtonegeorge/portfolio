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

export const EXPERIENCE_QUERY = defineQuery(`*[_type == "experience"] | order(date desc) {
    _id,
    title,
    "imageUrl": mainImage.asset->url,
    date,
    companyName,
    description,
    location,
    tags,
    companyWebsite,
}`)

export const POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)] {
    _id,
    title,
    slug,
    publishedAt,
    "imageUrl": image.asset->url,
}`)

export const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        publishedAt,
        "imageUrl": image.asset->url,
        body,
    }`,
    { $slug: 'string' }
)