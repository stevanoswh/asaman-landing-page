"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function ContactSection() {
  return (
    <ScrollReveal className="w-full bg-sky-50/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <header className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Get In Touch With Us
          </h2>
          <p className="mt-2 text-base text-slate-600">
            We’re here to help with any questions or concerns. Our team is ready to assist you.
          </p>
        </header>

        <div className="mt-10 grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div className="relative aspect-[16/11] w-full">
            <Image
              src="/contact.png" // replace with your asset
              alt="Support team illustration"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-contain"
            />
          </div>

          {/* Form card (right) */}
          <div className="rounded-[22px] bg-white p-6 shadow-xl ring-1 ring-slate-200 sm:p-8">
            <form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border-0 bg-slate-100 px-4 py-3 text-slate-900 placeholder:text-slate-400 ring-1 ring-inset ring-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-300"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  className="w-full rounded-2xl border-0 bg-slate-100 px-4 py-3 text-slate-900 placeholder:text-slate-400 ring-1 ring-inset ring-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-300"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
                  Phone
                </label>
                <input
                  id="phone"
                  type="text"
                  inputMode="tel"
                  placeholder="e.g. +14155552671"
                  className="w-full rounded-2xl border-0 bg-slate-100 px-4 py-3 text-slate-900 placeholder:text-slate-400 ring-1 ring-inset ring-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-300"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="mb-1 block text-sm font-medium text-slate-700">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="How can we help?"
                  className="w-full rounded-2xl border-0 bg-slate-100 px-4 py-3 text-slate-900 placeholder:text-slate-400 ring-1 ring-inset ring-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-300"
                />
              </div>

              {/* Message (full width) */}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Please describe your inquiry in detail..."
                  className="w-full rounded-2xl border-0 bg-slate-100 px-4 py-3 text-slate-900 placeholder:text-slate-400 ring-1 ring-inset ring-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-300"
                />
              </div>

              {/* Submit */}
              <div className="sm:col-span-2">
                <button
                  type="button"
                  className="w-full rounded-2xl bg-[#0F8AA0] px-6 py-3 text-base font-semibold text-white shadow-lg ring-1 ring-black/5 transition hover:brightness-110"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
