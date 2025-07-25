import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { PROJECT_QUERY, PROJECTS_QUERY } from "@/sanity/lib/queries";
import { PortableText } from '@portabletext/react';
import gh from '../../../../../public/gh.png';
import { Fragment } from 'react';

export async function generateMetadata({ params, searchParams }, parent) {
    const paramsRes = await params;
    const { project: slug } = paramsRes;
    const project = await client.fetch(PROJECT_QUERY, { slug });
 
    return {
        title: "Ashton George - " + project['title'],
        description: project['description'],
        images: [project['imageUrl']]
    }
}

export default async function Project({ params }) {
    const paramsRes = await params;
    const { project: slug } = paramsRes;
    const project = await client.fetch(PROJECT_QUERY, { slug });
    const timestamp = new Date().getTime();
    const allProjects = await client.fetch(PROJECTS_QUERY, { t: timestamp });
    const otherProjects = allProjects.filter((p) => p.slug.current !== slug);
    
    const components = {
        block: {
            h1: ({children}) => <h2 className="pt-12 pl-2 text-2xl md:text-4xl font-bold md:leading-16">{children}</h2>,
            normal: ({children}) => <p className="leading-6 md:leading-8 xl:leading-9 px-4 py-2 text-sm md:text-base xl:text-xl">{children}</p>,
        },
        list: {
            bullet: ({ children }) => (
                <ul className="list-disc leading-6 md:leading-8 xl:leading-9 pl-8 text-sm md:text-md xl:text-xl">{children}</ul>
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
                <Link
                    href={value.href}
                    target={value.blank ? "_blank" : undefined}
                    rel={value.blank ? "noopener noreferrer" : undefined}
                    className="text-blue-500 hover:underline inline-flex items-center gap-1"
                >
                    {children}
                </Link>
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
        <div className='md:px-0 overflow-x-hidden flex flex-col 2xl:flex-row gap-12 py-12 md:py-24 2xl:mx-24'>
            <section className='md:w-2/3 2xl:w-1/2 mx-auto 2xl:mx-0 2xl:ml-auto flex flex-col items-center relative justify-center'>
                <div className='relative md:p-4 max-w-screen'>
                    <div className='absolute hidden xl:block py-6 md:p-8 bg-gradient-to-tr from-teal-800 via-sky-900 to-green-800 md:rounded-3xl -inset-1 z-1 blur-md' />
                    <div className='relative py-6 md:p-6 bg-stone-800 md:bg-stone-900 rounded-b-3xl md:rounded-3xl md:shadow-lg md:shadow-black z-10'>
                        <h1 className='text-center playfair-display-600 text-2xl md:text-3xl lg:text-5xl'>{project['title']}</h1>
                        <div className='flex-inline flex justify-center items-center pb-2'>
                            <h3 className='text-xl text-center'>Ashton's Projects</h3>
                            <span className='px-2'> • </span>
                            <p className='text-center text-xl'>{project.publishedAt.split('T')[0]}</p>
                        </div>
                        <div className='p-4'>
                            <Image src={project['imageUrl']} alt={project['title']} width={1920} height={1080} className='rounded-xl' />
                        </div>
                        <Link href={project['repoUrl']} target='_blank' rel='noopener noreferrer' className='flex w-full justify-center items-center'>
                            <Image 
                                src={gh} 
                                alt='Github Logo' 
                                width={40} 
                                height={40} 
                                className='p-2'
                            />
                            <p className='decoration-blue-500 underline'>View the repo</p>
                        </Link>
                        <div className='flex justify-center'>
                            <div className='flex flex-col py-12 blockContent xl:w-2/3 gap-2'>
                                <h2 className="md:pt-12 pl-3 text-2xl md:text-4xl font-bold md:leading-16">Description</h2>
                                <PortableText value={project['description']} components={components} />
                                <h2 className="md:pt-12 pl-3 text-2xl md:text-4xl font-bold md:leading-16">Tech Stack</h2>
                                <PortableText value={project['techStack']} components={components} />
                                <h2 className="md:pt-12 pl-3 text-2xl md:text-4xl font-bold md:leading-16">Product</h2>
                                <PortableText value={project['product']} components={components} />
                                <h2 className="md:pt-12 pl-3 text-2xl md:text-4xl font-bold md:leading-16">Outcome</h2>
                                <PortableText value={project['outcome']} components={components} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {otherProjects.length > 0 &&
                <section className='w-full 2xl:max-w-1/4'>
                    <div className='md:p-8'>
                        <h2 className="text-3xl md:text-4xl font-semibold playfair-display-600 pb-8 text-center md:text-left">My other projects</h2>
                        <div className="flex flex-col md:flex-row 2xl:flex-col md:gap-6 h-full">
                        {[...otherProjects.slice(-3)].map((p) => 
                            <Link key={p._id} className="relative md:w-1/3 2xl:w-full p-4 md:p-0 hover:text-sky-200 transition-colors" href={`/projects/${p.slug.current}`}>
                                <div className='relative'>
                                    <Image
                                        src={p.imageUrl} 
                                        alt={p.title ? p.title : 'Project Image'}
                                        width={1920}
                                        height={1080}
                                        className='relative rounded-xl my-auto aspect-video w-full min-h-24 xl:min-h-48 2xl:min-h-[12vw] hover:brightness-110 transition-all duration-300'
                                    />
                                    <div class="absolute hidden md:block bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden rounded-xl bg-blue-400 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30" />
                                </div>
                                <div className='pl-3 pt-2'>
                                    <h3 className='text-xl text-left'><strong>{p.title}</strong></h3>
                                    <p className='text-md text-left'>{p.publishedAt.split('T')[0]}</p>
                                </div>
                            </Link>
                        )}
                        </div>
                    </div>
                </section>
            }
        </div>
    )
}