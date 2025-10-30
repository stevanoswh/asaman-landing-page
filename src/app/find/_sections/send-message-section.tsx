// app/contact/page.tsx  (or paste inside your page/component)
"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function SendMessageSection() {
  return (
    <ScrollReveal id="contact-form" className="bg-slate-50">
     <header className="mt-14 text-center">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Get In Touch With Us
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          We’re here to help with any questions or concerns. Our team is ready to assist you.
        </p>
      </header>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 lg:gap-16">

        <div className="relative aspect-[16/11] w-full">
          <Image
            src="/get-in-touch.png" 
            alt="Support team talking with customers online"
            fill
            className="rounded-2xl object-contain p-4 md:p-6"
          />
        </div>


        <div className="rounded-2xl bg-white p-2 shadow-sm ring-1 ring-black/5 md:p-8">

          <form
            // replace with your handler or action endpoint
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: handle submit
            }}
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            {/* Name */}
            <div className="col-span-1">
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#06748a]/30"
              />
            </div>

            {/* Email */}
            <div className="col-span-1">
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email address"
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#06748a]/30"
              />
            </div>

            {/* Phone */}
            <div className="col-span-1">
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="e.g. +14155552671"
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#06748a]/30"
              />
            </div>

            {/* Subject */}
            <div className="col-span-1">
              <label htmlFor="subject" className="mb-1 block text-sm font-medium text-slate-700">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="How can we help?"
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#06748a]/30"
              />
            </div>

            {/* Message */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Please describe your inquiry in detail..."
                className="w-full resize-y rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#06748a]/30"
              />
            </div>

            {/* Submit button */}
            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                className="w-full rounded-xl bg-[#06748a] px-5 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-[#056173] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#06748a]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </ScrollReveal>
  );
}
