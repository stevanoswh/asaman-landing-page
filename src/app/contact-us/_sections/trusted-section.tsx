// app/components/TrustedSchools.tsx
"use client";

import {
  Building2,
  GraduationCap,
  BookOpen,
  Landmark,
  School,
  University,
} from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";


type SchoolItem = {
  name: string;
  icon: React.ReactNode;
};

const SCHOOLS: SchoolItem[] = [
  { name: "Riversi Academy", icon: <Building2 className="h-5 w-5" aria-hidden /> },
  { name: "Metro High School", icon: <GraduationCap className="h-5 w-5" aria-hidden /> },
  { name: "Oakwood Elementary", icon: <BookOpen className="h-5 w-5" aria-hidden /> },
  { name: "Central College", icon: <Landmark className="h-5 w-5" aria-hidden /> },
  { name: "Harmony Institute", icon: <School className="h-5 w-5" aria-hidden /> },
  { name: "Summit University", icon: <University className="h-5 w-5" aria-hidden /> },
];

export default function TrustedSchools() {
  return (
    <ScrollReveal className="w-full bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 ">
        {/* Heading */}
        <header className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
            Trusted by Leading Schools
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Empowering institutions across the region
          </p>
        </header>

        <ul
          className="
            mt-10 grid gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {SCHOOLS.map((s, i) => (
            <li
            key={s.name}
            className={`${
                i === 4 ? "lg:col-start-2" : ""
            } ${
                i === 5 ? "lg:col-start-3" : ""
            }`}
            >
            <div className="flex items-center gap-3 rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-sky-50 text-teal-600 ring-1 ring-sky-100">
                {s.icon}
                </span>
                <span className="text-lg font-semibold text-slate-900">{s.name}</span>
            </div>
            </li>

          ))}
        </ul>
      </div>
    </ScrollReveal>
  );
}
