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
        <div className="w-full flex flex-col align-middle items-center min-screen my-12 md:pt-0 px-6">
            <section className='flex flex-col pb-8 w-full md:w-2/3 text-left gap-4 pt-12'>
                <h1 className="text-2xl md:text-4xl xl:text-6xl font-semibold playfair-display-600">My Projects</h1>
                <h2 className="text-lg md:text-2xl xl:text-3xl text-stone-300">Browse my previous works and learn more about what piques your interest.</h2>
            </section>
            <section className="md:w-2/3 md:h-1/2 md:p-12 grid lg:grid-cols-2 gap-4 playfair-display-600">
                {projects.map((project) => (
                    <Link key={project._id} className="relative flex flex-col p-4 md:p-0 hover:text-sky-200 transition-colors" href={`/projects/${project.slug.current}`}>
                        <div className='relative'>
                            <div className='absolute bg-gradient-to-tr from-teal-800 via-sky-900 to-green-800 rounded-3xl md:-inset-1 z-0 blur-sm' />
                            <Image
                                src={project.imageUrl} 
                                alt={project.title ? project.title : 'Project Image'}
                                width={1920}
                                height={1080}
                                className='relative rounded-xl my-auto aspect-video w-full min-h-24 xl:min-h-48 2xl:min-h-[12vw] hover:brightness-110 transition-all duration-300'
                            />
                            <div className="absolute hidden md:block bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden rounded-xl bg-blue-400 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30" />
                        </div>
                        <div className='pl-3 pt-2'>
                            <h3 className='text-xl text-left'><strong>{project.title}</strong></h3>
                            <p className='text-md text-left font-sans'>{project.publishedAt.split('T')[0]}</p>
                        </div>
                    </Link>
                ))}
            </section>
        </div>
    )
}