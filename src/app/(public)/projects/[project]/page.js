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
        <div className='md:px-0 overflow-x-hidden flex flex-col gap-12 py-12 md:py-24'>
            <section className='w-full flex flex-col items-center relative justify-center'>
                <div className='relative md:p-4 md:w-2/3 xl:w-1/2 max-w-screen'>
                    <div className='absolute py-6 md:p-8 bg-gradient-to-tr from-teal-800 via-sky-900 to-green-800 md:rounded-3xl -inset-1 z-1 blur-md' />
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