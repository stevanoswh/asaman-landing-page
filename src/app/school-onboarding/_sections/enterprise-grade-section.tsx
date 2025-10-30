// app/components/EnterpriseSecuritySection.tsx
"use client";

import { Cloud, ShieldCheck, KeyRound, Link2 } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function EnterpriseSecuritySection() {
  const items = [
    { icon: <Cloud className="h-5 w-5" />, title: "Cloud Hosting", sub: "AWS / Alibaba Cloud" },
    { icon: <ShieldCheck className="h-5 w-5" />, title: "Compliance", sub: "GDPR + SOC 2, Encrypted" },
    { icon: <KeyRound className="h-5 w-5" />, title: "Authentication", sub: "Magic Link & SSO" },
    { icon: <Link2 className="h-5 w-5" />, title: "Integrations", sub: "iSAMS, Veracross, PowerSchool" },
  ];

  return (
    <ScrollReveal className="relative isolate w-full overflow-hidden">
      {/* teal gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#329dac]  to-[#166170]" />
      {/* subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(60%_60%_at_70%_30%,#94e0ff33,transparent)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <header className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Enterprise-Grade Security
          </h2>
          <p className="mt-2 text-sm text-white/80">
            Built with compliance and data protection at its core
          </p>
        </header>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <li key={it.title} className="h-full">
              <article
                className="
                  flex h-full flex-col items-center text-center
                  rounded-[22px] border border-white/30
                  bg-white/10 p-6 backdrop-blur-md
                  shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)]
                "
              >
                <span className="mb-4 grid h-10 w-10 place-items-center rounded-full bg-white/25 text-white ring-1 ring-white/30">
                  {it.icon}
                </span>

                <h3 className="text-base font-semibold text-white">{it.title}</h3>
                <p className="mt-2 text-sm text-white/80">{it.sub}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  );
}
