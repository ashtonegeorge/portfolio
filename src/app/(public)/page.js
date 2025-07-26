"use client"
import Image from "next/image";
import TechCard from "@/components/techCard";
import me from "../../../public/me.jpg";
import figma from "../../../public/figma.png"
import blazor from "../../../public/blazor.png"
import git from "../../../public/git.png"
import next from "../../../public/next.png"
import react from "../../../public/react.png"
import tailwind from "../../../public/tailwind.png"
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY, EXPERIENCE_QUERY } from "@/sanity/lib/queries";
import { useState, useEffect } from "react";
import Link from "next/link";
import { PortableText } from "next-sanity";
import Aurora from '../../components/Aurora'

export default function Home() {
  const [experience, setExperience] = useState([]);
  const [projects, setProjects] = useState([]);
  const [downloadUrl, setDownloadUrl] = useState("/api/download");

  const handleDownloadClick = () => {
    // Append a timestamp to the URL for cache busting
    setDownloadUrl(`/api/download?t=${new Date().getTime()}`);
  };

  useEffect(() => {
    async function getProjects() {
      try {
        const timestamp = new Date().getTime();
        const projectsArray = await client.fetch(PROJECTS_QUERY, { t: timestamp });
        setProjects(projectsArray);        
      } catch (error) {
        console.error("Error fetching projects:", error )
      }
    }

    async function getExperience() {
      try {
        const experienceArray = await client.fetch(EXPERIENCE_QUERY);
        setExperience(experienceArray);
      } catch (error) {
        console.error("Error fetching experience:", error);
      }
    }

    getProjects();
    getExperience();
  }, []);


  return (
    <div className="w-screen h-screen">
      <div className="hidden md:block absolute w-screen h-2/3">
        <Aurora
          colorStops={["#3a80b8", "#449275", "#2c6ca8"]}
          blend={0.5}
          amplitude={1.5}
          speed={0.5}
        />
      </div>
      <div className="fixed top-0 md:hidden w-screen h-2/3">
        <Aurora
          colorStops={["#3a80b8", "#449275", "#2c6ca8"]}
          blend={0.5}
          amplitude={0.5}
          speed={0.5}
        />
      </div>
      <div className="relative w-full h-full md:h-screen md:overflow-y-auto md:snap-y md:snap-mandatory md:scroll-smooth scrollbar-hide">
        <section className="relative w-full h-screen min-h-92 flex justify-center align-middle items-center playfair-display-600 xl:text-7xl md:text-3xl sm:text-3xl text-xl md:snap-center py-24 z-100">
          <div className="relative z-10 flex flex-col items-center justify-center linear-wipe">
            <ul className="my-8 flex flex-col w-full items-start gap-6 text-stone-400 attributes">
              <li>a Web Developer</li>
              <li className="text-stone-300">a Comp Sci Student</li>
            </ul>
            <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-8xl text-stone-300">
              I am <span className="text-white">Ashton George</span>
            </h1>
            <ul className="my-8 flex flex-col w-full items-start gap-6 text-stone-400 attributes">
              <li className="text-stone-300">an Audiophile</li>
              <li className="text-stone-400">a Car Enthusiast</li>
            </ul>
          </div>
        </section>
        <section className="relative w-full lg:mx-auto md:snap-start md:h-screen min-h-[90rem] px-8 md:py-6 py-24 z-100">
          <div className="flex flex-col justify-center h-full max-w-[100rem] mx-auto min-h-92">
            <h2 className="text-2xl md:text-4xl xl:text-6xl font-semibold playfair-display-600 pb-8">About me</h2>
            <div className="relative md:flex w-full justify-evenly items-center playfair-display-600 p-8 md:p-16 bg-linear-to-tr from-teal-800 via-sky-900 to-green-800 rounded-3xl z-20">
              <div className="absolute acmbg bg-zinc-900 md:shadow-md md:shadow-black border-1 border-stone-950 -inset-1 rounded-3xl -z-1 blur-md" />
              <div className="md:hidden relative w-full mb-12 z-40">
                <Image src={me} alt="Ashton pictured holding an award." width={1920} height={1080} className="absolute top-0 left-0 w-full h-full rounded-xl acmbg grayscale" />
                <Image src={me} alt="Ashton pictured holding an award." width={1920} height={1080} className="relative w-full h-full rounded-xl" />
              </div>
              <div className="text-left z-20 flex flex-col gap-y-2 md:gap-8 lg:w-2/3">
                <p className="2xl:text-2xl text-lg text-stone-400 pb-2">In May 2024, I graduated from Allegany College of Maryland with <strong>two associates degrees</strong> and a certificate.</p>
                <p className="2xl:text-3xl text-xl text-stone-300 pb-2">At ACM, I was a work study and tutor, providing <strong>technical and educational support</strong> for both students and faculty.</p>
                <p className="2xl:text-4xl text-2xl md:block hidden">I am a recent <strong>transfer</strong>  to Saint Francis University <br /> after graduating from Allegany College of Maryland.</p>
                <p className="2xl:text-4xl text-2xl md:hidden font-semibold">I am a recent <strong>transfer</strong> to Saint Francis University after graduating from Allegany College of Maryland.</p>
                <p className="2xl:text-3xl text-xl text-stone-300 pt-2">I have retained a <strong>4.0 GPA</strong> since starting my college career at ACM, including my time at SFU.</p>
                <p className="2xl:text-2xl text-lg text-stone-400 pt-2">Here I&apos;m holding my Outstanding Student in Computer Technology Award I received at an ACM award ceremony in May 2024.</p>
              </div>
              <div className="md:block hidden relative w-1/5 z-40">
                <Image src={me} alt="Ashton pictured holding an award." width={1920} height={1080} className="absolute top-0 left-0 w-full h-full rounded-xl acmbg grayscale" />
                <Image src={me} alt="Ashton pictured holding an award." width={1920} height={1080} className="relative w-full h-full rounded-xl" />
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="min-h-6 py-12 w-full">
                <h2 className="w-full text-center text-4xl xl:text-6xl font-semibold playfair-display-600 pb-8">Hey, I'm Ashton's <strong className="text-green-200">digital twin.</strong></h2>
                <Link href='/digitaltwin' className="mx-auto cursor-text relative flex md:w-7/8 w-full justify-evenly items-center playfair-display-600 p-2 md:p-5 bg-linear-to-tr from-teal-800 via-sky-900 to-green-800 rounded-full z-20">
                    <div className="absolute acmbg bg-zinc-800 md:shadow-md md:shadow-black border-1 border-stone-950 -inset-1 rounded-full -z-1 blur-md" />
                    <div className="relative flex w-full justify-between mx-2 items-center">
                      <p className="md:block hidden w-full text-xl text-stone-400 font-light"> Ask me anything about work, goals, or background 💬</p>
                      <p className="md:hidden w-full text-xl text-stone-400 font-light"> Ask me anything 💬</p>
                      <svg className="stroke-2 stroke-stone-200 cursor-pointer w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                        <path className="" d='M12 16.5v-9M8.5 11 12 7.5l3.5 3.5'/><path d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0'/>
                      </svg>
                    </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="relative md:snap-start md:h-screen px-8 pb-32 flex flex-col gap-4 justify-center w-full my-auto min-h-[125rem] z-100">
          <div className="max-w-7xl mx-auto">
            <section className="relative max-w-[100rem] z-10 py-24 md:py-12">
              <h2 className="text-2xl md:text-4xl xl:text-6xl font-semibold playfair-display-600 pb-8">What I&apos;m Using</h2>
              <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-center grid-flow-row gap-4">
                  <TechCard img={figma} label="Figma" desc="my favorite interface design tool"  />
                  <TechCard img={blazor} label=".NET Blazor" desc="a C# web framework I&apos;ve used in enterprise"  />
                  <TechCard img={tailwind} label="TailwindCSS" desc="the best way to style web applications"  />
                  <TechCard img={react} label="React" desc="the industry standard for web components"  />
                  <TechCard img={next} label="NextJS" desc="my first choice for SSR and static site rendering"  />
                  <TechCard img={git} label="Git" desc="a popular choice for version control"  />
              </div>
            </section>
            {experience.length > 0 && 
              <div>
                <h2 className="text-2xl md:text-4xl xl:text-6xl font-semibold playfair-display-600 pb-8 text-left">My professional experience</h2>
                <div className="flex flex-col gap-12">
                  {experience.map((e) => 
                    <div key={e._id} className="flex flex-col gap-2 mx-auto">
                        <h3 className="relative border-teal-900 border font-semibold text-lg p-4 bg-zinc-900 rounded-lg z-10"><span className="text-teal-300">{e.title}</span> @ <span className="text-green-300">{e.companyName}</span></h3>
                        <div className="bg-zinc-800 p-4 md:p-8 border border-green-900 rounded-lg flex flex-col gap-4 max-w-screen z-10">
                          <div className="flex justify-between flex-col md:flex-row gap-4 md:gap-0">
                            <div className="flex gap-4 flex-col md:flex-row">
                              <div className="flex">
                                <svg width="24" height="24" viewBox="0 0 15 15" fill="96f7e4"><path d="M10 3.5C10 4.70948 9.14112 5.71836 8 5.94999V13.5C8 13.7761 7.77614 14 7.5 14C7.22386 14 7 13.7761 7 13.5V5.94999C5.85888 5.71836 5 4.70948 5 3.5C5 2.11929 6.11929 1 7.5 1C8.88071 1 10 2.11929 10 3.5Z" fill="currentColor" data-darkreader-inline-fill=""></path></svg>
                                <p className="text-teal-400">{e.location}</p> 
                              </div>
                              <div className="flex gap-2">
                                <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.62471 4.00001L4.56402 4.00001C4.04134 3.99993 3.70687 3.99988 3.4182 4.055C2.2379 4.28039 1.29846 5.17053 1.05815 6.33035C0.999538 6.61321 0.999604 6.93998 0.999703 7.43689L0.999711 7.50001L0.999703 7.56313C0.999604 8.06004 0.999538 8.38681 1.05815 8.66967C1.29846 9.8295 2.2379 10.7196 3.4182 10.945C3.70688 11.0001 4.04135 11.0001 4.56403 11L4.62471 11H5.49971C5.77585 11 5.99971 10.7762 5.99971 10.5C5.99971 10.2239 5.77585 10 5.49971 10H4.62471C4.02084 10 3.78907 9.99777 3.60577 9.96277C2.80262 9.8094 2.19157 9.21108 2.03735 8.46678C2.00233 8.29778 1.99971 8.08251 1.99971 7.50001C1.99971 6.91752 2.00233 6.70225 2.03735 6.53324C2.19157 5.78895 2.80262 5.19062 3.60577 5.03725C3.78907 5.00225 4.02084 5.00001 4.62471 5.00001H5.49971C5.77585 5.00001 5.99971 4.77615 5.99971 4.50001C5.99971 4.22387 5.77585 4.00001 5.49971 4.00001H4.62471ZM10.3747 5.00001C10.9786 5.00001 11.2104 5.00225 11.3937 5.03725C12.1968 5.19062 12.8079 5.78895 12.9621 6.53324C12.9971 6.70225 12.9997 6.91752 12.9997 7.50001C12.9997 8.08251 12.9971 8.29778 12.9621 8.46678C12.8079 9.21108 12.1968 9.8094 11.3937 9.96277C11.2104 9.99777 10.9786 10 10.3747 10H9.49971C9.22357 10 8.99971 10.2239 8.99971 10.5C8.99971 10.7762 9.22357 11 9.49971 11H10.3747L10.4354 11C10.9581 11.0001 11.2925 11.0001 11.5812 10.945C12.7615 10.7196 13.701 9.8295 13.9413 8.66967C13.9999 8.38681 13.9998 8.06005 13.9997 7.56314L13.9997 7.50001L13.9997 7.43688C13.9998 6.93998 13.9999 6.61321 13.9413 6.33035C13.701 5.17053 12.7615 4.28039 11.5812 4.055C11.2925 3.99988 10.9581 3.99993 10.4354 4.00001L10.3747 4.00001H9.49971C9.22357 4.00001 8.99971 4.22387 8.99971 4.50001C8.99971 4.77615 9.22357 5.00001 9.49971 5.00001H10.3747ZM5.00038 7C4.72424 7 4.50038 7.22386 4.50038 7.5C4.50038 7.77614 4.72424 8 5.00038 8H10.0004C10.2765 8 10.5004 7.77614 10.5004 7.5C10.5004 7.22386 10.2765 7 10.0004 7H5.00038Z" fill="currentColor" data-darkreader-inline-fill=""></path></svg>
                                <Link className="text-green-400" href={e.companyWebsite}>{e.companyWebsite}</Link>
                              </div>
                            </div>
                            <div className="text-sky-300">
                              <p>{e.date}</p>
                            </div>
                          </div>
                          <div className="flex">
                            <div className="text-md">
                              <PortableText value={e.description} />
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {e.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="bg-linear-to-tr from-teal-800 via-sky-900 to-green-800 text-white text-lg px-2 py-1 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                    </div>
                  )}
                </div>
              </div>
            } 
            {experience.length > 0 && <div className="mx-auto md:mx-0 my-2 z-10 relative text-right">
                <Link 
                  href={downloadUrl} 
                  onClick={handleDownloadClick} 
                  className="text-xl lg:text-2xl w-full relative cursor-pointer hover:decoration-blue-500 playfair-display-400 z-1000"
                >
                    Download Resume
                </Link>
              </div>
            }
            {projects.length > 0 &&
              <div>
                <h2 className="text-2xl md:text-4xl xl:text-6xl font-semibold playfair-display-600 pb-8 text-left">My recent projects</h2>
                <div className="flex flex-col md:flex-row justify-between gap-6 h-full">
                  {[...projects.slice(-3)].map((p) => 
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
            }
          </div>
        </section>
      </div>
    </div>
  );
}