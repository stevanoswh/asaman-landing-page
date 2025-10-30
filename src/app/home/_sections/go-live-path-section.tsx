import ScrollReveal from "@/components/ui/scroll-reveal";
import { Bell, Cog, GraduationCap, Phone } from "lucide-react";
import type { ReactNode } from "react";

const steps: Step[] = [
  {
    icon: <Phone className="h-6 w-6" />,
    week: "Week 1",
    title: "Kickoff Call",
    desc: "Requirements gathering and system configuration planning",
    href: "/kickoff",
  },
  {
    icon: <Cog className="h-6 w-6" />,
    week: "Week 2",
    title: "Setup",
    desc: "System configuration, data import, and initial testing",
    href: "/setup",
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    week: "Week 3",
    title: "Training",
    desc: "Staff training sessions and workflow optimization",
    href: "/training",
  },
  {
    icon: <Bell className="h-6 w-6" />,
    week: "Week 4",
    title: "Launch",
    desc: "Go-live support and performance monitoring",
    href: "/launch",
  },
];

export default function GoLivePathSection() {
  return (
    <ScrollReveal as="section" className="mx-auto max-w-6xl px-4 py-16">
      <header className="mb-10 text-center">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          4-Week Go-Live Path
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          From kickoff to launch in just one month
        </p>
      </header>

      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 right-0 hidden h-[8px] bg-slate-400 lg:block"
          style={{ top: "50%" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-1/2 top-0 h-full w-[8px] -translate-x-1/2 bg-slate-400 lg:hidden"
        />

        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.week} className="relative">
              <StepCard step={step} index={index} isLast={index === steps.length - 1} />
            </li>
          ))}
        </ol>
      </div>
    </ScrollReveal>
  );
}

type Step = {
  icon: ReactNode;
  week: string;
  title: string;
  desc: string;
  href?: string;
};

function StepCard({ step, index, isLast }: { step: Step; index: number; isLast: boolean }) {
  return (
    <div className="relative flex h-full flex-col justify-between rounded-3xl bg-white p-6 text-slate-900 shadow-xl ring-1 ring-slate-200">


      <div className="flex flex-col items-center text-center">
        <span className="mb-3 grid h-12 w-12 place-items-center rounded-full bg-[#06748a] text-white">
          {step.icon}
        </span>
        <p className="text-sm font-semibold text-[#06748a]">{step.week}</p>

        {step.href ? (
          <a
            href={step.href}
            className="mt-1 text-base font-semibold text-[#06748a] underline decoration-teal-200 underline-offset-4 hover:text-teal-800 hover:decoration-teal-300"
          >
            {step.title}
          </a>
        ) : (
          <p className="mt-1 text-base font-semibold text-[#06748a]">{step.title}</p>
        )}

        <p className="mt-2 text-sm leading-6 text-[#06748a]">{step.desc}</p>
      </div>
    </div>
  );
}
