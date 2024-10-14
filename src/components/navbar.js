import logo from '../assets/logo.png';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full bg-zinc-700 p-4">
        <div className="flex lg:max-w-3xl lg:m-auto">
            <Image src={logo} alt="logo" width={50} height={50} className="justify-self-start" />
            <div className="flex items-center gap-4 justify-self-end">
                <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                >
                Docs
                </a>
                <a
                href="https://nextjs.org/learn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                >
                Learn
                </a>
            </div>
        </div>
    </nav>
    );
}