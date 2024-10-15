import { client } from '@/sanity/lib/client';
import {PROJECTS_QUERY} from '@/sanity/lib/queries';
import Image from 'next/image';
import Link from 'next/link';

export default async function Projects() {
    // query all projects from sanity
    const projects = await client.fetch(PROJECTS_QUERY);

    return(
        <div className="flex justify-center w-full playfair-display-600">
            <div className="w-1/2 p-12 grid grid-cols-2">
                {projects.map((project) => (
                    <Link key={project._id} className="flex flex-col" href={`/projects/${project.slug.current}`}>
                        <Image
                            src={project.imageUrl} 
                            alt={project.title} 
                            width={1920}
                            height={1080}
                            className='rounded-xl'
                        />
                        <h1 className='text-2xl text-center'>{project.title}</h1>
                    </Link>
                ))}
            </div>
        </div>
    )
}