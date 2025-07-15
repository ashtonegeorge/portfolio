import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { PROJECT_QUERY } from "@/sanity/lib/queries";
import { PortableText } from '@portabletext/react';
import gh from '../../../public/gh.png';

export default async function Project({ params }) {
    const paramsRes = await params;
    const { project: slug } = paramsRes;
    const project = await client.fetch(PROJECT_QUERY, { slug });

    const components = {
        block: {
            normal: ({children}) => <p className="leading-9 px-4 py-2 text-base md:text-xl">{children}</p>,
        },
    }

    return (
        <section className='mx-2 md:px-0 overflow-x-hidden'>
            <div className='w-full flex relative justify-center playfair-display-400 py-24 text-xl'>
                <div className='relative md:w-1/2 max-w-[100vw]'>
                    <div className='absolute py-6 md:p-6 bg-gradient-to-tr from-teal-800 via-sky-900 to-green-800 rounded-3xl md:-inset-1 z-1 blur-md' />
                    <div className='relative py-6 md:p-6 bg-stone-900 rounded-3xl md:shadow-lg md:shadow-black z-10'>
                        <h1 className='text-center playfair-display-600 text-2xl md:text-3xl'>{project['title']}</h1>
                        <p className='text-center pb-2'>{project.publishedAt.split('T')[0]}</p>
                        <div className='p-4'>
                            <Image src={project['imageUrl']} alt={project['title']} width={1920} height={1080} className='rounded-xl' />
                        </div>
                        <a href={project['repoUrl']} target='_blank' rel='noopener noreferrer' className='flex w-full justify-center items-center'>
                            <Image 
                                src={gh} 
                                alt='Github Logo' 
                                width={40} 
                                height={40} 
                                className='p-2'
                            />
                            <p className='decoration-blue-500 underline'>View the repo</p>
                        </a>
                        <div className='flex flex-col pt-12 blockContent'>
                            <h2 className='text-center playfair-display-600 decoration-blue-500 underline text-2xl'>Description</h2>
                            <PortableText value={project['description']} components={components} />
                            <h2 className='text-center playfair-display-600 decoration-blue-500 underline pt-12 text-2xl'>Tech Stack</h2>
                            <PortableText value={project['techStack']} components={components} />
                            <h2 className='text-center playfair-display-600 decoration-blue-500 underline pt-12 text-2xl'>Product</h2>
                            <PortableText value={project['product']} components={components} />
                            <h2 className='text-center playfair-display-600 decoration-blue-500 underline pt-12 text-2xl'>Outcome</h2>
                            <PortableText value={project['outcome']} components={components} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}