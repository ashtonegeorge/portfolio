import Image from "next/image";
import Link from 'next/link';
import { client } from "@/sanity/lib/client";
import { POST_QUERY, POSTS_QUERY } from "@/sanity/lib/queries";
import { PortableText } from '@portabletext/react';
import { urlFor } from "@/sanity/lib/imageUrl";

export default async function PostPage({ params }) {
    const { post: slug } = (await params);
    const post = await client.fetch(POST_QUERY, { slug });
    const otherPosts = (await client.fetch(POSTS_QUERY)).filter((p) => p.slug.current !== slug)

    const components = {
        block: {
            h1: ({children}) => <h2 className="pt-12 pl-2 text-2xl md:text-4xl font-bold md:leading-16">{children}</h2>,
            normal: ({children}) => <div className="leading-6 md:leading-8 xl:leading-9 px-4 py-2 text-sm md:text-base xl:text-xl">{children}</div>,
        },
        list: {
            bullet: ({ children }) => (
                <ul className="list-disc leading-6 md:leading-8 xl:leading-9 pl-8 my-4 text-sm md:text-md xl:text-xl">{children}</ul>
            ),
            number: ({ children }) => (
                <ol className="list-decimal leading-6 md:leading-8 xl:leading-9 pl-8 my-4 text-sm md:text-md xl:text-xl">{children}</ol>
            ),
        },
        listItem: {
            bullet: ({ children }) => (
                <li className="leading-6 md:leading-8 xl:leading-9 mb-2 text-sm md:text-md xl:text-xl">{children}</li>
            ),
            number: ({ children }) => (
                <li className="leading-6 md:leading-8 xl:leading-9 mb-2 text-sm md:text-md xl:text-xl">{children}</li>
            ),
        },
        marks: {
            link: ({ children, value }) => (
                <div className="flex">
                    <Link
                        href={value.href}
                        target={value.blank ? "_blank" : undefined}
                        rel={value.blank ? "noopener noreferrer" : undefined}
                        className="text-blue-500 flex gap-2 items-center"
                    >
                        <svg width="24" height="24" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                            <path d='m3.845 10.224 5.739-5.53c5.429-5.237 14.246 2.843 8.596 8.294l-7.112 6.862c-3.684 3.554-9.667-1.929-5.833-5.628l7.01-6.763c1.939-1.87 5.087 1.015 3.07 2.962L9.492 16'/>
                        </svg>
                        <div className="hover:underline">
                            {children}
                        </div>
                    </Link>
                </div>
            ),
        },
        types: {
            image: ({ value }) => (
                <Image
                    src={urlFor(value.asset).url()}
                    alt={value.alt || ""}
                    width={800}
                    height={400}
                    className="rounded-xl my-4 p-1"
                />
            ),
        },
    }

    return (
        <div className='md:px-0 overflow-x-hidden flex flex-col gap-12 pt-12 md:py-24'>
            <section className='w-full flex relative justify-center text-xl'>
                <div className='relative md:p-4 md:w-2/3 xl:w-1/2 max-w-screen'>
                    <div className='absolute py-6 md:p-8 bg-gradient-to-tr from-teal-800 via-sky-900 to-green-800 md:rounded-3xl -inset-1 z-1 blur-md' />
                    <div className='relative py-6 md:p-6 bg-stone-800 md:bg-stone-900 rounded-b-3xl md:rounded-3xl md:shadow-lg md:shadow-black z-10'>
                        <div className="px-3 pb-2 md:text-center flex flex-col gap-1">
                            <h1 className='playfair-display-600 text-2xl md:text-3xl lg:text-5xl'>{post['title']}</h1>
                            <div className='flex-inline flex justify-center items-center pb-2'>
                                <h3 className='text-xl text-center'>Ashton's Blog</h3>
                                <span className='px-2'> • </span>
                                <p className='text-center text-xl'>{post.publishedAt.split('T')[0]}</p>
                            </div>
                        </div>
                        {
                            post['imageUrl'] && 
                                <div className='p-4 max-w-2/3 mx-auto relative'>
                                    <div className="relative">
                                        <div className='absolute md:hidden bg-gradient-to-tr from-teal-800 via-sky-900 to-green-800 md:rounded-3xl -inset-1 z-1 blur-md' />
                                        <Image className="border-stone-500 md:border rounded-xl relative z-2" src={post['imageUrl']} alt={post['title']} width={1920} height={1080} />
                                    </div>
                                </div>
                        }
                        <div className='w-full flex justify-center blockContent'>
                            <div className='flex flex-col lg:w-2/3 px-2 md:py-12 blockContent'>
                                <PortableText value={post['body']} components={components} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {otherPosts.length > 0 && 
                <section className='w-4/5 mx-auto'>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold playfair-display-600 pb-8 text-center md:text-left">My other projects</h2>
                    {otherPosts.map((post) => (
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
            }
        </div>
    )
}