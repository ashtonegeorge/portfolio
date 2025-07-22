import { client } from '@/sanity/lib/client';
import {PROJECTS_QUERY} from '@/sanity/lib/queries';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Ashton George - My Projects",
  description: "Projects of Ashton George - Full Stack Developer and Creator.",
  images: ["https://www.ashtonegeorge.com/og-image.png"]
};

export default async function Projects() {
    const timestamp = new Date().getTime();
    const projects = await client.fetch(PROJECTS_QUERY, { t: timestamp });

    return(
        <div className="w-full flex flex-col align-middle items-center  min-screen mt-12 md:pt-0">
            <section className='flex flex-col pb-8 w-full md:w-2/3 text-left gap-4 pt-12'>
                <h1 className="text-2xl md:text-4xl xl:text-6xl font-semibold playfair-display-600">My Projects</h1>
                <h2 className="text-xl md:text-2xl xl:text-3xl text-stone-300">Browse my previous works and learn more about what piques your interest.</h2>
            </section>
            <section className="md:w-2/3 md:h-1/2 p-12 grid lg:grid-cols-2 gap-4 playfair-display-600">
                {projects.map((project) => (
                    <Link key={project._id} className="flex flex-col size-fit" href={`/projects/${project.slug.current}`}>
                        <Image
                            src={project.imageUrl} 
                            alt={project.title ? project.title : 'Project Image'}
                            width={1920}
                            height={1080}
                            className='rounded-xl my-auto object-cover w-full h-full'
                        />
                        <h2 className='text-2xl text-center'>{project.title}</h2>
                    </Link>
                ))}
            </section>
        </div>
    )
}