import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { PROJECT_QUERY } from "@/sanity/lib/queries";
import { PortableText } from '@portabletext/react';

export default async function Project({ params }) {
    const slug = params.project;
    const project = await client.fetch(PROJECT_QUERY, { slug });

    return (
        <div className='w-full flex justify-center playfair-display-400 py-24 text-xl '>
            <div className='w-1/3 p-6 bg-stone-700 rounded-lg shadow-lg shadow-black'>
                <h1 className='text-center playfair-display-600 text-3xl'>{project.title}</h1>
                <p className='text-center pb-2'>{project.publishedAt.split('T')[0]}</p>
                <Image src={project.imageUrl} alt={project.title} width={1920} height={1080} className='rounded-xl' />
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