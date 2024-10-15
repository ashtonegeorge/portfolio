import logo from '../assets/logo.png';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full p-4 px-8 fixed top-0">
        <div className="flex justify-between">
            <div className="flex items-center gap-4">
                <a
                href="/projects"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:decoration-blue-500"
                >
                Projects
                </a>
                <a
                href="https://www.linkedin.com/in/ashton-george-160619240/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:decoration-teal-500"
                > 
                LinkedIn
                </a>
            </div>
            <a href="/">
                <Image src={logo} alt="logo" width={50} height={50} className="justify-self-start" />
            </a>
        </div>
    </nav>
    );
}