import CTAButton from "@/components/ui/cta-button";
import ScrollReveal from "@/components/ui/scroll-reveal";
import Image from "next/image";
import {
  Clock,
  Eye,
  Play,
  School,
  ShieldCheck,
  Smile,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";

type Stat = {
  icon: ReactNode;
  value: string;
  label: string;
  sub: string;
  accent?: "sky" | "emerald" | "orange" | "violet";
};

const stats: Stat[] = [
  {
    icon: <School className="h-5 w-5" />,
    value: "6",
    label: "International Schools",
    sub: "Partnered with LFIP + others",
  },
  {
    icon: <Users className="h-5 w-5" />,
    value: "1,200+",
    label: "Students",
    sub: "Across 50+ activities",
    accent: "emerald",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    value: "70%",
    label: "Time Saved",
    sub: "Versus manual operations",
    accent: "orange",
  },
  {
    icon: <Smile className="h-5 w-5" />,
    value: "98%",
    label: "Satisfaction",
    sub: "From our 2024 pilot survey",
    accent: "violet",
  },
];

const featureCards: Array<{
  icon: ReactNode;
  title: string;
  desc: string;
  chips: string[];
}> = [
  {
    icon: <Eye className="h-5 w-5" />,
    title: "Transparency",
    desc: "Clear visibility into all activities, schedules, and communications for all stakeholders.",
    chips: ["Activity Insights", "Real-time Communication"],
  },
  {
    icon: <Play className="h-5 w-5" />,
    title: "Efficiency",
    desc: "Automated processes that save time and reduce administrative burden.",
    chips: ["Process Automation", "Time-Saving Tools"],
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Trust",
    desc: "Reliable platform that schools, parents, and staff can depend on, daily.",
    chips: ["Reliable Access", "Role-Based Control"],
  },
];

export default function WhyWeExistSection() {
  return (
    <ScrollReveal as="section" className="mx-auto max-w-5xl px-4 py-16">
      <div className="grid items-start gap-10 md:grid-cols-2">
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-xl bg-white/80 backdrop-blur-md">
            <Image
              src="/whyweexist.png"
              alt="Educator using the platform"
              width={900}
              height={700}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="pointer-events-none absolute inset-x-4 bottom-4 grid grid-cols-2 gap-4 md:inset-x-6">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <CTAButton
            href="/about"
            className="px-3 py-1 text-xs uppercase tracking-wide"
          >
            About ASAMAN
          </CTAButton>

          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Why We Exist
          </h2>

          <p className="max-w-prose text-sm leading-6 text-slate-600">
            ASAMAN simplifies chaotic school operations with a central system for
            activities, allocations, attendance, and communication. We transform
            complex administrative processes into streamlined, efficient
            workflows that benefit everyone in the educational ecosystem.
          </p>

          <div className="space-y-4">
            {featureCards.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

function StatCard({
  icon,
  value,
  label,
  sub,
  accent = "sky",
}: {
  icon: ReactNode;
  value: string;
  label: string;
  sub: string;
  accent?: "sky" | "emerald" | "orange" | "violet";
}) {
  const bg: Record<string, string> = {
    sky: "bg-sky-500",
    emerald: "bg-emerald-500",
    orange: "bg-orange-500",
    violet: "bg-violet-500",
  };

  return (
    <div className="pointer-events-auto h-full w-full rounded-2xl bg-white/35 p-5 text-white backdrop-blur-sm ring-1 ring-white/10 min-h-40 md:min-h-44">
      <div className="flex flex-col items-center text-center gap-3">
        <span className={`grid h-10 w-10 place-items-center rounded-full ${bg[accent]} text-white`}>
          {icon}
        </span>

        <div>
          <div className="text-2xl font-semibold leading-tight">{value}</div>
          <div className="text-[11px] uppercase tracking-wide text-white/80">
            {label}
          </div>
        </div>

        <p className="mt-1 text-xs text-white/80">{sub}</p>
      </div>
    </div>
  );
}


function FeatureCard({
  icon,
  title,
  desc,
  chips,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
  chips: string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-sky-50 text-sky-700 ring-1 ring-sky-100">
          {icon}
        </span>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-100"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
