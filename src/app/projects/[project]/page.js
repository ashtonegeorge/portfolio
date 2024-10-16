import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { PROJECT_QUERY } from "@/sanity/lib/queries";
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import gh from '../../../public/gh.png';

export default async function Project({ params }) {
    const slug = params.project;
    const project = await client.fetch(PROJECT_QUERY, { slug });

    return (
        <div className='w-full flex justify-center playfair-display-400 py-24 text-xl '>
            <div className='md:w-1/3 p-6 backdrop-blur-3xl rounded-lg md:shadow-lg md:shadow-black'>
                <h1 className='text-center playfair-display-600 text-3xl'>{project.title}</h1>
                <p className='text-center pb-2'>{project.publishedAt.split('T')[0]}</p>
                <Image src={project.imageUrl} alt={project.title} width={1920} height={1080} className='rounded-xl' />
                <a href={project.repoUrl} target='_blank' rel='noopener noreferrer' className='flex w-full justify-center items-center'>
                    <Image 
                        src={gh} 
                        alt='Github Logo' 
                        width={40} 
                        height={40} 
                        className='p-2'
                    />
                    <p className='decoration-blue-500 underline'>View the repo</p>
                </a>
                <div className='flex flex-col pt-12'>
                    <h2 className='text-center playfair-display-600 decoration-blue-500 underline text-2xl'>Description</h2>
                    <PortableText value={project.description} />
                    <h2 className='text-center playfair-display-600 decoration-blue-500 underline pt-12 text-2xl'>Tech Stack</h2>
                    <PortableText value={project.techStack} />
                    <h2 className='text-center playfair-display-600 decoration-blue-500 underline pt-12 text-2xl'>Product</h2>
                    <PortableText value={project.product} />
                    <h2 className='text-center playfair-display-600 decoration-blue-500 underline pt-12 text-2xl'>Outcome</h2>
                    <PortableText value={project.outcome} />
                </div>
            </div>
        </div>
    )
}