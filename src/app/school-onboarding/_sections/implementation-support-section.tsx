// app/components/ImplementationSupportSection.tsx
"use client";

import {
  Cog,
  UserRoundCheck,
  BookOpenText,
  Route,
  Bell,
} from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function ImplementationSupportSection() {
  return (
    <ScrollReveal className="relative w-full bg-sky-50/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        {/* Heading */}
        <header className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Implementation &amp; Support
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Everything you need to get started and succeed, backed by dedicated support every step of the way.
          </p>
        </header>

        {/* Content */}
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-12">
          {/* Left list */}
          <ul className="space-y-8">
            <FeatureItem
              icon={<Cog className="h-5 w-5" aria-hidden />}
              title="Turnkey Setup"
              desc="Go live in as little as 4 weeks with our streamlined implementation process and expert guidance."
            />
            <FeatureItem
              icon={<UserRoundCheck className="h-5 w-5" aria-hidden />}
              title="Dedicated Success Manager"
              desc="Your in-house Asaman expert to guide onboarding and ensure your team’s success from day one."
            />
            <FeatureItem
              icon={<BookOpenText className="h-5 w-5" aria-hidden />}
              title="Training & Documentation"
              desc="On-demand webinars, step-by-step guides, and a 24/7 help center for every level."
            />
            <FeatureItem
              icon={<Route className="h-5 w-5" aria-hidden />}
              title="Ongoing Roadmap"
              desc="Regular feature releases driven by school feedback so the platform evolves with your needs."
            />
          </ul>

          {/* Right card */}
          <div className="relative">
            {/* decorative blobs */}
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-sky-200/60 blur-xl" />
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-sky-200/60 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl bg-white/80 p-6 shadow-xl ring-1 ring-slate-200 backdrop-blur-md sm:p-8">
              <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-sky-600 text-white">
                <Bell className="h-5 w-5" aria-hidden />
              </div>

              <h3 className="text-center text-base font-semibold text-slate-900">
                Ready to Get Started?
              </h3>
              <p className="mt-2 text-center text-sm text-slate-600">
                Join schools transforming their operations with our comprehensive platform.
              </p>

              {/* Stats tiles */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <StatTile value="4 weeks" label="Implementation" />
                <StatTile value="24/7" label="Support" />
                <StatTile value="1:1" label="Success Manager" />
                <StatTile value="100%" label="Satisfaction" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* --------- subcomponents --------- */

function FeatureItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-sky-100">
        {icon}
      </span>
      <div>
        <h4 className="text-base font-semibold text-slate-900">{title}</h4>
        <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
      </div>
    </li>
  );
}

function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-slate-100/70 px-4 py-5 text-center ring-1 ring-slate-200">
      <div className="text-lg font-extrabold tracking-tight text-sky-800">{value}</div>
      <div className="mt-1 text-xs font-medium text-slate-600">{label}</div>
    </div>
  );
}
