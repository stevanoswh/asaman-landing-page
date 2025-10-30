// app/components/FindSchoolPortalUI.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import ScrollReveal from "@/components/ui/scroll-reveal";

type Props = {
  bgSrc?: string;          
  title?: string;
  subtitle?: string;
  placeholder?: string;
  ctaText?: string;
};

export default function FindSchoolPortalSection({
  bgSrc = "/find-your-school.png",
  title = "Find Your School's Asaman Portal",
  subtitle = "Type your school name to get started",
  placeholder = "Start typing your school name...",
  ctaText = "Go",
}: Props) {
  const [value, setValue] = useState("");

  return (
    <ScrollReveal initiallyVisible className="relative isolate min-h-[70vh] w-full overflow-hidden">
      <Image src={bgSrc} alt="" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-6xl items-center justify-center px-4">
        <div className="w-full max-w-3xl rounded-[28px] bg-white/90 p-6 shadow-2xl ring-1 ring-black/5 md:p-10">
          <h1 className="text-center text-2xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
            <span className="bg-gradient-to-r from-[#06748a] to-[#4ab8ac] bg-clip-text text-transparent">
              {title.split(" Asaman")[0]}
              {title.includes(" Asaman") ? " Asaman Portal" : ""}
            </span>
          </h1>

          <p className="mt-2 text-center text-sm text-slate-600">{subtitle}</p>

          <div className="mx-auto mt-6 sm:mt-8">
            <div className="flex w-full items-center rounded-2xl bg-white p-1 ring-1 ring-slate-300 shadow-sm">
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
                className="w-full rounded-xl border-0 px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
              />
              <button
                type="button"
                disabled={!value.trim()}
                className="ml-2 inline-flex items-center justify-center rounded-xl bg-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition
                           hover:bg-[#06748a] hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {ctaText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
