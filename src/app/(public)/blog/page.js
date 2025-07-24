import { client } from "@/sanity/lib/client"
import { POSTS_QUERY } from "@/sanity/lib/queries"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Ashton George - My Blog",
  description: "Blog Posts of Ashton George - Full Stack Developer and Creator.",
  images: ["https://www.ashtonegeorge.com/og-image.png"]
};

export default async function BlogPage() {
    const posts = (await client.fetch(POSTS_QUERY)).reverse();

    return (
        <div className="w-full flex flex-col align-middle items-center min-screen mt-12 md:pt-0">
            <section className='flex flex-col pb-8 w-full md:w-2/3 text-left gap-4 pt-12'>
                <h1 className="text-2xl md:text-4xl xl:text-6xl font-semibold playfair-display-600">My Posts</h1>
            </section>
            <section className="md:w-2/3 md:h-1/2 p-12 grid lg:grid-cols-3 gap-12 playfair-display-600">
                {posts.map((post) => (
                    <div className="relative" key={post._id}>
                        <Link className="flex flex-col size-fit" href={`/blog/${post.slug.current}`}>
                            <div className="relative">
                                <div className='absolute bg-gradient-to-tr from-teal-800 via-sky-900 to-green-800 rounded-3xl md:-inset-1 z-0 blur-sm' />
                                <Image
                                    src={post.imageUrl} 
                                    alt={post.title ? post.title : 'post Image'}
                                    width={1920}
                                    height={1080}
                                    className='rounded-xl relative my-auto object-cover w-full h-full border border-stone-800'
                                />
                            </div>
                            <div className="text-left font-sans p-2">
                                <h2 className='text-2xl text-left'>{post.title}</h2>
                                <p className='text-md'>{post.publishedAt.split('T')[0]}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </section>
        </div>
    )
}