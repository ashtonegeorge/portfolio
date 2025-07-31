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
    const posts = (await client.fetch(POSTS_QUERY, {}, { cache: 'no-store' })).reverse();

    return (
        <div className="w-full flex flex-col align-middle items-center min-screen my-12 md:pt-0 px-6">
            <section className='flex flex-col pb-8 w-full md:w-2/3 text-left gap-4 pt-12'>
                <h1 className="text-2xl md:text-4xl xl:text-6xl font-semibold playfair-display-600">My Posts</h1>
                <h2 className="text-lg md:text-2xl xl:text-3xl text-stone-300">Browse my written works and learn more about what piques your interest.</h2>
            </section>
            <section className="max-w-[400px] md:max-w-max mx-auto md:w-2/3 md:h-1/2 md:p-12 grid md:grid-cols-2 xl:grid-cols-3 gap-12 playfair-display-600">
                {posts.map((post) => (
                    <div className="relative" key={post._id}>
                        <Link className="relative flex flex-col p-4 md:p-0 hover:text-sky-200 transition-colors" href={`/blog/${post.slug.current}`}>
                            <div className="relative">
                                <div className='absolute bg-gradient-to-tr from-teal-800 via-sky-900 to-green-800 rounded-3xl md:-inset-1 z-0 blur-sm' />
                                <Image
                                    src={post.imageUrl} 
                                    alt={post.altText}
                                    width={1920}
                                    height={1080}
                                    className='rounded-xl relative my-auto object-cover w-full h-full border border-stone-800'
                                />
                                <div className="absolute hidden md:block bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden rounded-xl bg-blue-400 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30" />
                            </div>
                            <div className="text-left p-2">
                                <h3 className='text-xl text-left'><strong>{post.title}</strong></h3>
                                <p className='text-md font-sans'>{post.publishedAt.split('T')[0]}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </section>
        </div>
    )
}