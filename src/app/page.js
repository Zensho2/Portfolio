"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const cards = [
  {
    key: "hero",
    label: "About",
    content: (
      <section className="flex flex-col items-center text-center gap-4 pt-4">
        <div className="relative w-28 h-28 mb-2">
          <Image
            src="/globe.svg"
            alt="Profile globe"
            fill
            className="rounded-full border-4 border-foreground/10 shadow-lg bg-background"
            priority
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">AK</h1>
        <p className="text-lg text-muted-foreground font-medium">Building the web, one pixel at a time.</p>
        <p className="max-w-xl text-base text-foreground/80 mt-2">
          I’m a web developer passionate about clean design, fast performance, and automation. I love working with Next.js and building side projects with AI. Always learning, always building.
        </p>
      </section>
    ),
  },
  {
    key: "tech",
    label: "Tech Stack",
    content: (
      <section className="flex flex-col items-center min-h-[220px]">
        <h2 className="text-xl font-bold mb-2">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-6 gap-y-4 mt-2 max-w-md mx-auto">
          <span className="flex flex-col items-center text-sm font-medium">
            <svg className="w-8 h-8 mb-1" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#000" /><text x="16" y="21" textAnchor="middle" fontSize="14" fill="#fff">JS</text></svg>
            JavaScript
          </span>
          <span className="flex flex-col items-center text-sm font-medium">
            <svg className="w-8 h-8 mb-1" viewBox="0 0 32 32"><rect width="32" height="32" rx="16" fill="#06B6D4" /><text x="16" y="21" textAnchor="middle" fontSize="14" fill="#fff">TS</text></svg>
            TypeScript
          </span>
          <span className="flex flex-col items-center text-sm font-medium">
            <svg className="w-8 h-8 mb-1" viewBox="0 0 32 32"><rect width="32" height="32" rx="16" fill="#38BDF8" /><text x="16" y="21" textAnchor="middle" fontSize="14" fill="#fff">React</text></svg>
            React
          </span>
          <span className="flex flex-col items-center text-sm font-medium">
            <svg className="w-8 h-8 mb-1" viewBox="0 0 32 32"><rect width="32" height="32" rx="16" fill="#000" /><text x="16" y="21" textAnchor="middle" fontSize="14" fill="#fff">Next</text></svg>
            Next.js
          </span>
          <span className="flex flex-col items-center text-sm font-medium">
            <svg className="w-8 h-8 mb-1" viewBox="0 0 32 32"><rect width="32" height="32" rx="16" fill="#0EA5E9" /><text x="16" y="21" textAnchor="middle" fontSize="14" fill="#fff">TW</text></svg>
            Tailwind
          </span>
          <span className="flex flex-col items-center text-sm font-medium">
            <svg className="w-8 h-8 mb-1" viewBox="0 0 32 32"><rect width="32" height="32" rx="16" fill="#22C55E" /><text x="16" y="21" textAnchor="middle" fontSize="14" fill="#fff">Node</text></svg>
            Node.js
          </span>
          <span className="flex flex-col items-center text-sm font-medium">
            <svg className="w-8 h-8 mb-1" viewBox="0 0 32 32"><rect width="32" height="32" rx="16" fill="#F59E42" /><text x="16" y="21" textAnchor="middle" fontSize="14" fill="#fff">AI</text></svg>
            AI
          </span>
        </div>
        <div className="h-2" />
      </section>
    ),
  },
  {
    key: "skills",
    label: "Skills",
    content: (
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="rounded-xl bg-background/60 shadow p-5 flex flex-col items-center text-center hover:scale-[1.03] transition">
          <h3 className="font-semibold text-lg mb-1">UI/UX Design</h3>
          <p className="text-sm text-foreground/80">Crafting clean, intuitive interfaces and delightful user experiences.</p>
        </div>
        <div className="rounded-xl bg-background/60 shadow p-5 flex flex-col items-center text-center hover:scale-[1.03] transition">
          <h3 className="font-semibold text-lg mb-1">Performance Optimization</h3>
          <p className="text-sm text-foreground/80">Making websites blazing fast and highly responsive.</p>
        </div>
        <div className="rounded-xl bg-background/60 shadow p-5 flex flex-col items-center text-center hover:scale-[1.03] transition">
          <h3 className="font-semibold text-lg mb-1">API Integration</h3>
          <p className="text-sm text-foreground/80">Connecting apps to powerful APIs and third-party services.</p>
        </div>
        <div className="rounded-xl bg-background/60 shadow p-5 flex flex-col items-center text-center hover:scale-[1.03] transition">
          <h3 className="font-semibold text-lg mb-1">Automation Scripts</h3>
          <p className="text-sm text-foreground/80">Automating workflows to save time and reduce errors.</p>
        </div>
      </section>
    ),
  },
];

export default function Home() {
  const [active, setActive] = useState(0);
  const [cardAnimKey, setCardAnimKey] = useState(0);

  const goTo = useCallback((idx) => {
    setActive(idx);
    setCardAnimKey(prev => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    goTo((active - 1 + cards.length) % cards.length);
  }, [active, goTo]);

  const handleNext = useCallback(() => {
    goTo((active + 1) % cards.length);
  }, [active, goTo]);

  // Keyboard arrow navigation
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handlePrev, handleNext]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-24 px-4">
      <div className="w-full max-w-xl">
        <div
          className="relative w-full max-w-2xl glass shadow-lg p-6 sm:p-8 lg:p-12 flex-1 flex items-center justify-center overflow-auto min-h-[550px]"
          id={`card-panel-${cards[active].key}`}
          role="tabpanel"
          aria-labelledby={cards[active].key}
        >
          <div key={cardAnimKey} className="w-full card-animate-in pb-14">
            {cards[active].content}
          </div>
          {/* Arrow navigation at the bottom */}
          <div className="absolute left-0 right-0 bottom-0 flex justify-center gap-12 pb-12">
            <button
              className="arrow-btn"
              aria-label="Previous card"
              onClick={handlePrev}
            >
              &#8592;
            </button>
            <button
              className="arrow-btn"
              aria-label="Next card"
              onClick={handleNext}
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
