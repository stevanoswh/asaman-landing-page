import ScrollReveal from "@/components/ui/scroll-reveal";
import { BarChart2, Code, Lightbulb, Rocket } from "lucide-react";
import type { ReactNode } from "react";

const journeyItems: Array<{
  icon: ReactNode;
  title: string;
  desc: string;
}> = [
  {
    icon: <Lightbulb className="h-7 w-7" />,
    title: "Idea Sparked",
    desc: "Identified the need for better school activity management systems",
  },
  {
    icon: <Code className="h-7 w-7" />,
    title: "MVP Built",
    desc: "Developed the first version with core functionality",
  },
  {
    icon: <Rocket className="h-7 w-7" />,
    title: "First Pilots",
    desc: "Successfully launched pilot programs with partner schools",
  },
  {
    icon: <BarChart2 className="h-7 w-7" />,
    title: "Platform Growth",
    desc: "Expanding features and onboarding more educational institutions",
  },
];

export default function JourneySection() {
  return (
    <ScrollReveal as="section" className="mx-auto max-w-5xl px-4 py-14 sm:py-16">
      <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-4xl">
        Our Journey
      </h2>

      <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {journeyItems.map((item) => (
          <JourneyItem key={item.title} {...item} />
        ))}
      </div>
    </ScrollReveal>
  );
}

function JourneyItem({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="grid h-14 w-14 place-items-center rounded-full bg-[#06748a] text-white shadow-md">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-800">{title}</h3>
      <p className="mt-2 max-w-xs text-sm leading-6 text-slate-600">{desc}</p>
    </div>
  );
}
