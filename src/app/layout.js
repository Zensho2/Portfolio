'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function Header() {
  const [show, setShow] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const hideTimeout = useRef();

  // Mouse proximity logic with debounce for appearance/disappearance
  useEffect(() => {
    const handleMouseMove = (e) => {
      clearTimeout(hideTimeout.current);
      if (e.clientY <= 80) {
        setShow(true);
      } else {
        hideTimeout.current = setTimeout(() => setShow(false), 250); // 250ms delay to avoid flicker
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(hideTimeout.current);
    };
  }, []);

  // Close menu on route change or resize
  useEffect(() => {
    const handleResize = () => setMenuOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-zinc-900/90 shadow-lg border-b border-zinc-200 dark:border-zinc-800 backdrop-blur-lg
        transition-all duration-400 ease-in-out
        ${show ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-15 pointer-events-none'}`}
      style={{ transitionProperty: 'opacity, transform' }}
    >
      <div className="flex items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 select-none focus:outline-none focus:ring-2 focus:ring-primary rounded-lg transition-colors duration-200"
        >
          AK
        </Link>
        <nav className="flex gap-6 text-base font-semibold">
          <Link
            href="/projects"
            className="px-3 py-1 rounded-lg transition-all duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-primary hover:scale-105 active:scale-95"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="px-3 py-1 rounded-lg transition-all duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-primary hover:scale-105 active:scale-95"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className={`${geistSans.variable} ${geistMono.variable}`}> 
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>AK | Portfolio</title>
        <meta name="description" content="Portfolio website of AK, showcasing projects, skills, and contact information." />
      </head>
      <body className={`bg-background text-foreground font-sans min-h-screen ${geistSans.variable} ${geistMono.variable}`}> 
        <Header />
        <main className="container mx-auto max-w-3xl px-4 py-8 flex-1 pt-20">
          {children}
        </main>
        <footer className="w-full py-4 border-t border-border text-center text-sm text-muted-foreground bg-background/80">
          © {new Date().getFullYear()} AK. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

