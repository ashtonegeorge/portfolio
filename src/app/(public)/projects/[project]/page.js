import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { PROJECT_QUERY, PROJECTS_QUERY } from "@/sanity/lib/queries";
import { PortableText } from '@portabletext/react';
import gh from '../../../../../public/gh.png';

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
            h1: ({children}) => <h2 className="pt-12 text-4xl font-bold leading-16">{children}</h2>,
            normal: ({children}) => <div className="leading-9 px-4 py-2 text-base md:text-xl">{children}</div>,
        },
        list: {
            bullet: ({ children }) => (
                <ul className="list-disc pl-8 my-4">{children}</ul>
            ),
            number: ({ children }) => (
                <ol className="list-decimal pl-8 my-4">{children}</ol>
            ),
        },
        listItem: {
            bullet: ({ children }) => (
                <li className="mb-2 flex gap-2">• {children}</li>
            ),
            number: ({ children }) => (
                <li className="mb-2 mx-4">{children}</li>
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
        }
    }

    return (
        <div className='relative z-49 mx-2 md:px-0 overflow-x-hidden flex flex-col gap-12 py-24 scroll-m-40'>
            <section className='w-full flex relative justify-center text-xl'>
                <div className='relative md:p-4 lg:w-1/2 max-w-screen'>
                    <div className='absolute py-6 md:p-8 bg-gradient-to-tr from-teal-800 via-sky-900 to-green-800 rounded-3xl md:-inset-1 z-1 blur-md' />
                    <div className='relative py-6 md:p-6 bg-stone-900 rounded-3xl md:shadow-lg md:shadow-black z-10'>
                        <h1 className='text-center playfair-display-600 text-2xl md:text-3xl lg:text-5xl'>{project['title']}</h1>
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
                        <div className='flex justify-center'>
                            <div className='flex flex-col py-12 blockContent w-2/3 gap-4'>
                                <h2 className="text-4xl font-bold leading-16">Description</h2>
                                <PortableText value={project['description']} components={components} />
                                <h2 className="text-4xl font-bold leading-16">Tech Stack</h2>
                                <PortableText value={project['techStack']} components={components} />
                                <h2 className="text-4xl font-bold leading-16">Product</h2>
                                <PortableText value={project['product']} components={components} />
                                <h2 className="text-4xl font-bold leading-16">Outcome</h2>
                                <PortableText value={project['outcome']} components={components} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {otherProjects.length > 0 &&
              <section className='w-4/5 mx-auto'>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold playfair-display-600 pb-8 text-center md:text-left">My other projects</h2>
                <div className="flex flex-col md:flex-row justify-between gap-6 h-full">
                  {[...otherProjects.slice(-3)].map((p) => 
                      <Link key={p._id} className="md:max-w-1/3" href={`/projects/${p.slug.current}`}>
                          <Image
                              src={p.imageUrl} 
                              alt={p.title ? p.title : 'Project Image'}
                              width={1920}
                              height={1080}
                              className='rounded-xl my-auto object-cover w-full h-full'
                          />
                          <h3 className='text-2xl text-center playfair-display-400'>{p.title}</h3>
                      </Link>
                  )}
                </div>
              </section>
            }
        </div>
    )
}