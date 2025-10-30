// app/components/HeroSection.tsx
"use client";

import CTAButton from "@/components/ui/cta-button";
import ScrollReveal from "@/components/ui/scroll-reveal";
import Image from "next/image";
import { BrainCircuit, GitBranch, Users, ShieldCheck } from "lucide-react"; // <-- lucide

export default function HeroSection() {
  return (
    <ScrollReveal as="section" initiallyVisible className="relative">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-4 py-16 md:grid-cols-2 lg:gap-20 lg:py-24">
        <div>
          <h1 className="text-3xl font-bold leading-tight text-slate-800 sm:text-4xl">
            <span className="bg-gradient-to-l from-[#a4d5df] to-[#70bdcd] bg-clip-text text-transparent">
              Asaman AI-Driven After School Activity OS for Global Schools
            </span>
          </h1>

          <ul className="mt-6 space-y-3 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 grid h-7 w-7 place-items-center rounded-full bg-sky-50 text-sky-700 ring-1 ring-sky-100">
                <BrainCircuit className="h-4 w-4" aria-hidden />
              </span>
              <span className="text-base">Smart signup automation</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-0.5 grid h-7 w-7 place-items-center rounded-full bg-sky-50 text-sky-700 ring-1 ring-sky-100">
                <GitBranch className="h-4 w-4" aria-hidden />
              </span>
              <span className="text-base">Multi-mode allocation engine</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-0.5 grid h-7 w-7 place-items-center rounded-full bg-sky-50 text-sky-700 ring-1 ring-sky-100">
                <Users className="h-4 w-4" aria-hidden />
              </span>
              <span className="text-base">Realtime parent–provider portals</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-0.5 grid h-7 w-7 place-items-center rounded-full bg-sky-50 text-sky-700 ring-1 ring-sky-100">
                <ShieldCheck className="h-4 w-4" aria-hidden />
              </span>
              <span className="text-base">Secure, compliant, cloud-native</span>
            </li>
          </ul>

          <div className="mt-8">
            <CTAButton href="#why-we-exist" className="px-6 py-3 text-base">
              Request Demo
            </CTAButton>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[28px] bg-sky-500/10 blur-2xl" aria-hidden />
          <div className="relative rounded-[22px] border border-slate-200/70 bg-white/80 shadow-xl backdrop-blur-md">
            <div className="rounded-[22px] p-2">
              <Image
                src="/school-onboarding-hero.png"
                alt="Activities and Events dashboard"
                width={1100}
                height={680}
                className="rounded-[18px] ring-1 ring-black/5"
              />
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
