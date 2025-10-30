"use client";

import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function HeroContact() {
  return (
    <ScrollReveal initiallyVisible className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-[#147e8c]">
              Get In Touch
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              We are here for you! How can we help?
            </p>

            <form className="mt-5 space-y-4 max-w-md">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border-0 bg-slate-100 px-4 py-3 text-slate-900 placeholder:text-slate-400 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border-0 bg-slate-100 px-4 py-3 text-slate-900 placeholder:text-slate-400 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full rounded-xl border-0 bg-slate-100 px-4 py-3 text-slate-900 placeholder:text-slate-400 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
              <button
                type="button"
                className="w-full rounded-xl bg-[#0F8AA0] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow ring-1 ring-black/5 hover:brightness-110"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="items-start gap-8 md:grid-cols-2">
            <div className="relative aspect-[16/12] w-full md:col-span-2 lg:col-span-1">
              <Image
                src="/contact-us-hero.png" 
                alt="Contact illustration"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-contain"
              />
            </div>

            <ul className="space-y-6 md:col-span-2 lg:col-span-1 mt-10">
              <InfoItem
                icon={<MapPin className="h-4 w-4" aria-hidden />}
                title="Visit Our Office"
                lines={["USA, Dubai, China"]}
              />
              <InfoItem
                icon={<Phone className="h-4 w-4" aria-hidden />}
                title="Call Us"
                lines={["+1 (555) 123-4567"]}
              />
              <InfoItem
                icon={<Mail className="h-4 w-4" aria-hidden />}
                title="Email Us"
                lines={["support@asaman.net", "We reply within 24 hours"]}
              />
            </ul>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

function InfoItem({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-sky-50 text-sky-700 ring-1 ring-sky-100">
        {icon}
      </span>
      <div>
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        {lines.map((l) => (
          <div key={l} className="text-sm text-slate-600">
            {l}
          </div>
        ))}
      </div>
    </li>
  );
}
