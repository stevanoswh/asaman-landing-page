// app/components/StatsStrip.tsx
"use client";

import { Building2, GraduationCap, Gauge, Smile } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

type Stat = {
  icon: React.ReactNode;
  value: string;
  label: string;
  sub: string;
};

export default function StatsSection() {
  const stats: Stat[] = [
    {
      icon: <Building2 className="h-5 w-5" aria-hidden />,
      value: "6+",
      label: "Intl. Schools",
      sub: "LFIP & others onboarded",
    },
    {
      icon: <GraduationCap className="h-5 w-5" aria-hidden />,
      value: "1.2K+",
      label: "Students",
      sub: "50+ activity types",
    },
    {
      icon: <Gauge className="h-5 w-5" aria-hidden />,
      value: "70%",
      label: "Less Admin Time",
      sub: "vs manual ops",
    },
    {
      icon: <Smile className="h-5 w-5" aria-hidden />,
      value: "98%",
      label: "Satisfaction",
      sub: "2024 parent survey",
    },
  ];

  return (
    <ScrollReveal className="w-full bg-sky-50/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <ul className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <li key={s.label} className="flex flex-col items-center">
              <span className="mb-5 grid h-14 w-14 place-items-center rounded-full bg-sky-100 text-sky-700 ring-1 ring-sky-200">
                {s.icon}
              </span>

              <div className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                {s.value}
              </div>

              <div className="mt-1 text-base font-semibold text-slate-800">
                {s.label}
              </div>

              <div className="mt-1 text-sm text-slate-500">{s.sub}</div>
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  );
}
