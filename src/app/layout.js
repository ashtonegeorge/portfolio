import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const playfairDisplay = localFont({
  src: "./fonts/PlayfairDisplayVF.woff",
  variable: "--font-playfair-display",
  weight: "400 900",
});

export const metadata = {
  title: "Ashton George",
  description: "Ashton George's portfolio website showcasing his projects and resume.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="/dist/styles.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay} antialiased`}
      >
        <Navbar />
        {children}
        <footer className="flex justify-center fixed bottom-0 w-full text-center z-1000">
          <p>© 2024 Ashton George</p>
        </footer>
      </body>
    </html>
  );
}
