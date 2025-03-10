import Image from "next/image";
import Link from "next/link";
import TechCard from "@/components/techCard";
import me from "../public/me.jpg";
import logo from "../public/logo.png";
import resume from "../public/ResumeSep24-1.png";
import figma from "../public/figma.png"
import blazor from "../public/blazor.png"
import git from "../public/git.png"
import next from "../public/next.png"
import react from "../public/react.png"
import tailwind from "../public/tailwind.png"

export default function Home() {
  return (
    <div className="w-full h-full px-8">
      <section className="relative h-[100vh] flex justify-center align-middle items-center playfair-display-600 xl:text-7xl md:text-3xl sm:text-3xl text-xl">
        <div className="absolute inset-0 flex justify-center items-center z-0">
          <Image src={logo} alt="Logo" className="logo" width={1500} height={1500} />
        </div>
        <div className="relative z-10 flex items-center">
          <h1 className="pr-8">
            I am
          </h1>
          <div className="">
            <h2 className="pb-10 text-stone-400">
              a Web Developer
            </h2>
            <h2 className="pb-10 text-stone-300">
              a Comp Sci Student
            </h2>
            <h1>
              Ashton George
            </h1>
            <h2 className="pt-10 text-stone-300">
              an Audiophile
            </h2>
            <h2 className="pt-10 text-stone-400">
              a Car Enthusiast
            </h2>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="absolute bg-linear-to-tr from-teal-800 via-sky-900 to-green-800 rounded-3xl -inset-1 z-1 blur-md" />
        <div className="relative md:flex w-full justify-evenly items-center playfair-display-600 p-8 md:p-16 bg-stone-900 md:shadow-md md:shadow-black border-1 border-stone-950 rounded-3xl z-20">
          <div className="md:hidden relative w-full mb-12 z-40">
            <Image src={me} alt="Ashton pictured holding an award." width={1920} height={1080} className="absolute top-0 left-0 w-full h-full rounded-xl acmbg grayscale" />
            <Image src={me} alt="Ashton pictured holding an award." width={1920} height={1080} className="relative w-full h-full rounded-xl" />
          </div>
          <div className="text-left z-20">
            <p className="2xl:text-2xl text-lg text-stone-400 pb-2">At ACM, I was a work study and tutor, providing technical and educational support.</p>
            <p className="2xl:text-3xl text-xl text-stone-300 pb-2">I have retained a <strong>4.0 GPA</strong> since starting my college career at ACM.</p>
            <p className="2xl:text-4xl text-2xl md:block hidden">I am a recent <strong>transfer</strong>  to Saint Francis University <br /> after graduating from Allegany College of Maryland.</p>
            <p className="2xl:text-4xl text-2xl md:hidden font-semibold">I am a recent <strong>transfer</strong>  to Saint Francis University after graduating from Allegany College of Maryland.</p>
            <p className="2xl:text-3xl text-xl text-stone-300 pt-2">In May of 2024, I graduated with <strong>two associates degrees</strong> and a certificate.</p>
            <p className="2xl:text-2xl text-lg text-stone-400 pt-2">Here I&apos;m holding my Outstanding Student in Computer Technology Award in May 2024.</p>
          </div>
          <div className="md:block hidden relative w-1/5 z-40">
            <Image src={me} alt="Ashton pictured holding an award." width={1920} height={1080} className="absolute top-0 left-0 w-full h-full rounded-xl acmbg grayscale" />
            <Image src={me} alt="Ashton pictured holding an award." width={1920} height={1080} className="relative w-full h-full rounded-xl" />
          </div>
        </div>
      </section>
      <div className="py-24 md:px-12">
        <h1 className="text-2xl md:text-6xl font-semibold playfair-display-600 pb-8">What I'm Using</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-center grid-flow-row gap-4">
            <TechCard img={figma} label="Figma" desc="my favorite interface design tool"  />
            <TechCard img={blazor} label=".NET Blazor" desc="a C# web framework I've used in enterprise"  />
            <TechCard img={tailwind} label="TailwindCSS" desc="the best way to style web applications"  />
            <TechCard img={react} label="React" desc="the industry standard for web components"  />
            <TechCard img={next} label="NextJS" desc="my first choice for SSR and static site rendering"  />
            <TechCard img={git} label="Git" desc="a popular choice for version control"  />
        </div>
      </div>
      <section className="relative my-[3rem]">
        <div className="absolute bg-linear-to-tr from-teal-800 via-sky-900 to-green-800 rounded-3xl -inset-1 z-1 blur-md" />
        <div className="relative md:flex w-full justify-evenly items-center playfair-display-600 bg-stone-900 md:shadow-md md:shadow-black border-1 border-stone-950 rounded-3xl text-2xl py-12 md:text-left text-center z-20">
          <div className="w-1/6 md:block hidden">
            <Image src={resume} alt="Ashton's resume." className="blur-xss" />
            <Link href="/api/download" className="text-md mx-auto text-center w-full hover:underline hover:decoration-blue-500 playfair-display-400" >
              <button>Download</button>
            </Link>
          </div>
          <div className="md:w-1/2 pb-12 p-8 md:p-0 text-left">
            <p className="2xl:text-2xl text-xl text-stone-300 pb-2">I have professional web development experience, a variety of exploratory projects both solo and academic, as well as general IT Support experience.</p>
            <p className="2xl:text-3xl text-2xl">Check out my resume <a href="/api/download" className="underline font-semibold" >here</a> for a closer look into my professional career.</p>
            <p className="2xl:text-2xl text-xl text-stone-300 pt-2">More information about my projects can be found <a href="/projects" className="underline font-semibold">here</a>.</p>
          </div>
          <div className="md:hidden w-3/4 mx-auto">
            <Image src={resume} alt="Ashton's resume." className="blur-xss" />
            <Link href="/api/download" className="text-md mx-auto text-center w-full hover:underline hover:decoration-blue-500 playfair-display-400">
              <button>Download</button>
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}