import Image from "next/image";
import Link from "next/link";
import me from "../public/me.jpg";
import logo from "../public/logo.png";
import resume from "../public/ResumeSep24-1.png";

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
              Web Developer
            </h2>
            <h2 className="pb-10 text-stone-300">
              Comp Sci Student
            </h2>
            <h1>
              Ashton George
            </h1>
            <h2 className="pt-10 text-stone-300">
              Audiophile
            </h2>
            <h2 className="pt-10 text-stone-400">
              Car Enthusiast
            </h2>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="absolute p-16 bg-gradient-to-tr from-teal-800 via-sky-900 to-green-800 rounded-3xl -inset-1 z-0 blur-xl" />
        <section className="relative md:flex w-full justify-evenly items-center playfair-display-600 p-16 bg-stone-900 rounded-3xl z-200">
          <div className="md:hidden relative w-full mb-12 z-40">
            <Image src={me} alt="Ashton pictured holding an award." width={1920} height={1080} className="absolute top-0 left-0 w-full h-full rounded-xl acmbg grayscale" />
            <Image src={me} alt="Ashton pictured holding an award." width={1920} height={1080} className="relative w-full h-full rounded-xl" />
          </div>
          <div className="text-center md:text-left z-20">
            <p className="2xl:text-3xl text-md text-stone-400 pb-2">At ACM, I was a work study and tutor, providing technical and educational support.</p>
            <p className="2xl:text-4xl text-lg text-stone-300 pb-2">I have retained a <strong>4.0 GPA</strong> since starting my college career at ACM.</p>
            <p className="2xl:text-5xl text-xl md:block hidden">I am a recent <strong>transfer</strong>  to Saint Francis University <br /> after graduating from Allegany College of Maryland.</p>
            <p className="2xl:text-5xl text-xl md:hidden font-semibold">I am a recent <strong>transfer</strong>  to Saint Francis University after graduating from Allegany College of Maryland.</p>
            <p className="2xl:text-4xl text-lg text-stone-300 pt-2">In May of 2024, I graduated with <strong>two associates degrees</strong> and a certificate.</p>
            <p className="2xl:text-3xl text-md text-stone-400 pt-2">Here I&apos;m holding my Outstanding Student in Computer Technology Award in May 2024.</p>
          </div>
          <div className="md:block hidden relative w-1/5 z-40">
            <Image src={me} alt="Ashton pictured holding an award." width={1920} height={1080} className="absolute top-0 left-0 w-full h-full rounded-xl acmbg grayscale" />
            <Image src={me} alt="Ashton pictured holding an award." width={1920} height={1080} className="relative w-full h-full rounded-xl" />
          </div>
        </section>
      </div>
      <section className="md:flex w-full justify-evenly items-center playfair-display-400 text-2xl py-72 md:text-left text-center">
        <div className="w-1/4 md:block hidden">
          <Image src={resume} alt="Ashton's resume." className="" />
          <Link href="/api/download" className="text-md mx-auto text-center w-full hover:underline hover:decoration-blue-500" >
            <button>Download</button>
          </Link>
        </div>
        <div className="md:w-1/2 pb-12">
          <p className="2xl:text-3xl text-lg text-stone-300 pb-2">I have experience in IT support and solo development projects.</p>
          <p className="2xl:text-5xl text-xl">Check out my resume <a href="/api/download" className="underline font-semibold" >here</a> for a closer look into my professional career.</p>
          <p className="2xl:text-3xl text-lg text-stone-300 pt-2">More information about my projects can be found <a href="/projects" className="underline font-semibold">here</a>.</p>
        </div>
        <div className="md:hidden">
          <Image src={resume} alt="Ashton's resume." className="" />
          <Link href="/api/download" className="text-md mx-auto text-center w-full hover:underline hover:decoration-blue-500">
            <button>Download</button>
          </Link>
        </div>
      </section>
      
    </div>
  );
}