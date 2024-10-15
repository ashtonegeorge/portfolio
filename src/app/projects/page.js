import { client } from '@/sanity/lib/client';
import {PROJECTS_QUERY} from '@/sanity/lib/queries';
import Image from 'next/image';
import Link from 'next/link';

export default async function Projects() {
    const projects = await client.fetch(PROJECTS_QUERY);

    return(
        <div className="flex justify-center w-full playfair-display-600 min-h-[100vh] pt-24 md:pt-0">
            <div className="md:w-1/2 md:h-1/2 p-12 grid lg:grid-cols-2 gap-4">
                {projects.map((project) => (
                    <Link key={project._id} className="flex flex-col size-fit" href={`/projects/${project.slug.current}`}>
                        <Image
                            src={project.imageUrl} 
                            alt={project.title ? project.title : 'Project Image'}
                            width={1920}
                            height={1080}
                            className='rounded-xl my-auto object-cover w-full h-full'
                        />
                        <h1 className='text-2xl text-center'>{project.title}</h1>
                    </Link>
                ))}
            </div>
        </div>
    )
}