import Image from "next/image";
import me from "../assets/me.jpg";
import resume from "../assets/ResumeSep24-1.png";

export default function Home() {
  return (
    <div className="w-full h-full px-8">
      <section className="h-[100vh] flex justify-center align-middle items-center playfair-display-600 text-7xl">
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
      </section>
      <section className="flex w-full justify-evenly items-center --font-playfair-display text-2xl py-8">
        <div>
          <p className="text-xl text-stone-400 pb-2">At ACM, I was a work study and tutor, providing technical and educational support.</p>
          <p className="text-2xl text-stone-300 pb-2">I have retained a 4.0 GPA since starting my college career at ACM.</p>
          <p className="text-3xl font-semibold">I am a recent transfer to Saint Francis University <br /> after graduating from Allegany College of Maryland.</p>
          <p className="text-2xl text-stone-300 pt-2">In May of 2024, I graduated with two associates degrees and a certification.</p>
          <p className="text-xl text-stone-400 pt-2">Here I&apos;m holding my Outstanding Student in Computer Technology Award in May 2024.</p>
        </div>
        <div className="relative w-1/4">
          <Image src={me} alt="Ashton pictured holding an award." width={1920} height={1080} className="absolute top-0 left-0 w-full h-full rounded-xl blur-md translate-y-12 -translate-x-2 grayscale" />
          <Image src={me} alt="Ashton pictured holding an award." width={1920} height={1080} className="absolute top-0 left-0 w-full h-full rounded-xl blur-md -translate-y-12 translate-x-2 grayscale" />
          <Image src={me} alt="Ashton pictured holding an award." width={1920} height={1080} className="relative w-full h-full rounded-xl" />
        </div>
      </section>
      <section className="flex w-full justify-evenly items-center playfair-display-400 text-2xl py-8">
        <div className="w-1/4">
          <Image src={resume} alt="Ashton's resume." className="" />
          <a href="../assets/ResumeSep24.docx" className="text-md mx-auto text-center w-full hover:underline hover:decoration-blue-500" download>
            Download
          </a>
        </div>
        <div className="w-1/2">
          <p className="text-2xl text-stone-300 pb-2">I have experience in IT support and solo development projects.</p>
          <p className="text-3xl">Check out my resume here for a closer look into my professional career.</p>
          <p className="text-2xl text-stone-300 pt-2">More information about my projects can be found <a href="/projects" className="underline decoration-blue-400 font-semibold">here</a>.</p>
        </div>
      </section>
    </div>
  );
}