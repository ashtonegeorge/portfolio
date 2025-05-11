import logo from '../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 md:bg-transparent z-1000">
        <div className="absolute bg-linear-to-tr from-teal-800 via-sky-900 to-green-800 md:bg-none rounded-3xl -inset-1 z-0 blur-md" />
        <div className="relative z-10 flex justify-between bg-stone-900 md:bg-transparent p-2 px-4 md:p-4 md:px-8">
            <div className="flex items-center gap-4">
                <Link
                href="/projects"
                className="hover:underline hover:decoration-blue-500"
                >
                Projects
                </Link>
                <Link
                href="https://www.linkedin.com/in/ashton-george-160619240/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:decoration-teal-500"
                > 
                LinkedIn
                </Link>
                <Link href="/api/download" className="hover:underline hover:cursor-pointer hover:decoration-blue-500">
                    <button className="hover:underline hover:cursor-pointer hover:decoration-sky-500">Resume</button>
                </Link>
            </div>
            <a href="/">
                <Image src={logo} alt="logo" width={50} height={50} className="justify-self-start" />
            </a>
        </div>
    </nav>
    );
}