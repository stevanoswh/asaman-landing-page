// app/components/HeroLeadForm.tsx
"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function HeroLeadForm() {
  return (
    <ScrollReveal className="relative isolate min-h-[70vh] w-full overflow-hidden">
      {/* Background */}
      <Image
        src="/hero-lobby.jpg" // <-- replace with your image path
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      {/* Dim overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-14 md:grid-cols-2 md:gap-12">
        {/* LEFT: copy + CTA */}
        <div className="text-white">
          <h1 className="max-w-xl text-4xl font-extrabold leading-tight sm:text-6xl">
            Modernize Your After-School Activities
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/80">
            Join leading international schools worldwide in transforming how they manage
            after-school programs with AI-powered automation.
          </p>

          <div className="mt-8">
            <a
              href="#demo"
              className="inline-flex items-center rounded-2xl bg-[#0F8AA0] px-6 py-3 text-base font-semibold text-white shadow-lg ring-1 ring-black/10 hover:brightness-110"
            >
              Request Demo
            </a>
          </div>
        </div>

        {/* RIGHT: glass form */}
        <div className="justify-self-end">
          <div className="w-full max-w-xl rounded-[24px] bg-white/15 p-6 backdrop-blur-md ring-1 ring-white/20 md:p-8">
            <h3 className="text-2xl font-bold text-white">Get Started Today</h3>

            <form className="mt-6 space-y-4">
              <div>
                <label htmlFor="school" className="sr-only">
                  School Name
                </label>
                <input
                  id="school"
                  type="text"
                  placeholder="School Name"
                  className="w-full rounded-2xl border-0 bg-white/10 px-4 py-3 text-white placeholder:text-white/70 shadow-sm ring-1 ring-inset ring-white/25 focus:outline-none focus:ring-2 focus:ring-sky-300/70"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Contact Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Contact Email"
                  className="w-full rounded-2xl border-0 bg-white/10 px-4 py-3 text-white placeholder:text-white/70 shadow-sm ring-1 ring-inset ring-white/25 focus:outline-none focus:ring-2 focus:ring-sky-300/70"
                />
              </div>

              <div>
                <label htmlFor="timeline" className="sr-only">
                  Implementation Timeline
                </label>
                <select
                  id="timeline"
                  className="w-full rounded-2xl border-0 bg-white/10 px-4 py-3 text-white placeholder:text-white/70 shadow-sm ring-1 ring-inset ring-white/25 focus:outline-none focus:ring-2 focus:ring-sky-300/70"
                  defaultValue=""
                >
                  <option value="" disabled className="text-slate-500">
                    Implementation Timeline
                  </option>
                  <option className="text-slate-900">ASAP (this month)</option>
                  <option className="text-slate-900">1–2 months</option>
                  <option className="text-slate-900">Next term</option>
                  <option className="text-slate-900">Just exploring</option>
                </select>
              </div>

              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone (optional)
                </label>
                <input
                  id="phone"
                  type="text"
                  inputMode="tel"
                  placeholder="Phone (optional)"
                  className="w-full rounded-2xl border-0 bg-white/10 px-4 py-3 text-white placeholder:text-white/70 shadow-sm ring-1 ring-inset ring-white/25 focus:outline-none focus:ring-2 focus:ring-sky-300/70"
                />
                <p className="mt-1 text-xs text-white/70">
                  Only numbers and phone characters (#, -, *, etc) are accepted.
                </p>
              </div>

              <button
                type="button"
                className="mt-4 w-full rounded-2xl bg-white px-6 py-3 text-base font-semibold text-teal-800 shadow-lg ring-1 ring-black/5 hover:bg-white/95"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
