import logo from '../../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {

  return (
    <nav className="w-full fixed top-0 md:bg-transparent z-1000 playfair-display-600 md:text-3xl pointer-events-none">
        <div className="absolute bg-linear-to-tr from-teal-800 via-sky-900 to-green-800 md:bg-none rounded-3xl -inset-1 z-0 blur-md" />
        <div className="relative z-10 flex justify-between bg-stone-900 md:bg-transparent p-2 px-4 md:p-4 md:px-8">
            <div className="flex items-center md:gap-6 pointer-events-auto">
                <Link href="/projects" className="hover:text-blue-300 ease-in-out transition-colors">
                    <strong>Projects</strong>
                </Link>
                <Link href="/blog" className="hover:text-green-300 ease-in-out transition-colors">
                    <strong>Blog</strong>
                </Link>
                <Link href="/digitaltwin" className="hover:text-teal-300 ease-in-out transition-colors"> 
                    <strong>Digital Twin</strong>
                </Link>
                <Link
                    href="https://www.linkedin.com/in/ashton-george-160619240/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 ease-in-out transition-colors"
                > 
                    <strong>LinkedIn</strong>
                </Link>
            </div>
            <a href="/" className='pointer-events-auto'>
                <Image src={logo} alt="logo" width={50} height={50} className="justify-self-start" />
            </a>
        </div>
    </nav>
    );
}