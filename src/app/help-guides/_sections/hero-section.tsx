// app/components/HelpCenterHero.tsx
"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "@/components/ui/scroll-reveal";

type Props = {
  illustrationSrc?: string;
};

export default function HelpCenterHero({
  illustrationSrc = "/help-guides.png", // replace with your asset
}: Props) {
  const [q, setQ] = useState("");

  return (
    <ScrollReveal initiallyVisible className="relative w-full bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-14 md:grid-cols-2">
        {/* Left copy */}
        <div>
          <h1 className="text-4xl font-extrabold leading-tight text-[#147e8c] sm:text-6xl">
            Need Help Using ASAMAN?
          </h1>
          <p className="mt-3 max-w-xl text-lg text-slate-600">
            A clear, parent-friendly guide to every part of the platform.
          </p>

          {/* Search box (UI only) */}
          <div className="mt-6 max-w-xl">
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                aria-hidden
              />
              <input
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search a topic..."
                className="w-full rounded-2xl border-0 bg-white px-12 py-4 text-base text-slate-900 placeholder:text-slate-400 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)] ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
            </div>
          </div>
        </div>

        {/* Right illustration */}
        <div className="relative hidden aspect-[16/10] w-full md:block">
          <Image
            src={illustrationSrc}
            alt="Help & FAQs illustration"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain"
          />
        </div>
      </div>
    </ScrollReveal>
  );
}
