import Image from "next/image";
import me from "../assets/me.jpg";

export default function Home() {
  return (
    <div className="w-full h-full px-8">
      <section className="h-[100vh] flex justify-center align-middle items-center playfair-display-600 text-7xl">
        <h1 className="pr-8">
          I am
        </h1>
        <div className="">
          <h2 className="pb-10 text-stone-500">
            Web Developer
          </h2>
          <h2 className="pb-10 text-stone-400">
            Comp Sci Student
          </h2>
          <h1>
            Ashton George
          </h1>
          <h2 className="pt-10 text-stone-400">
            Audiophile
          </h2>
          <h2 className="pt-10 text-stone-500">
            Car Enthusiast
          </h2>
        </div>
      </section>
      <section className="flex w-full justify-evenly items-center playfair-display-400 text-2xl py-4">
        <div>
          <p className="text-3xl font-semibold pb-2">I am a recent transfer to Saint Francis University <br /> after graduating from Allegany College of Maryland</p>
          <p className="text-xl">Here I'm holding my Outstanding Student in Computer Technology Award in May 2024</p>
        </div>
        <div className="relative w-1/4">
          <Image src={me} alt="Ashton pictured holding an award." width={1920} height={1080} className="absolute top-0 left-0 w-full h-full rounded-xl blur-md" />
          <Image src={me} alt="Ashton pictured holding an award." width={1920} height={1080} className="relative w-full h-full rounded-xl" />
        </div>
      </section>
      <section>
        
      </section>
    </div>
  );
}
