// app/components/FeatureModulesSection.tsx
"use client";

import {
  SmartphoneNfc,    // Parent-first, Omnichannel
  WifiOff,          // Offline-first
  Timer,            // Real-time Allocation
  Link2,            // Open SIS Integrations
  Workflow,         // Automation Rules
  Bell,             // Native Push & Messaging
  Globe2,           // Global Performance
  ShieldCheck,      // Security & Privacy
} from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

type Module = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

const modules: Module[] = [
  {
    icon: <SmartphoneNfc className="h-5 w-5" aria-hidden />,
    title: "Parent-first, Omnichannel",
    desc: "Web/PWA, iOS/Android, WeChat MP (CN) with one-tap QR check-in",
  },
  {
    icon: <WifiOff className="h-5 w-5" aria-hidden />,
    title: "Offline-first for Staff",
    desc: "Attendance, notes, and photos work without Wi-Fi; background sync on reconnect.",
  },
  {
    icon: <Timer className="h-5 w-5" aria-hidden />,
    title: "Real-time Allocation & Conflict Resolver",
    desc: "Live capacities, clash detection, and automatic waitlist back-fill.",
  },
  {
    icon: <Link2 className="h-5 w-5" aria-hidden />,
    title: "Open SIS Integrations & Standards",
    desc: "Veracross, PowerSchool, iSAMS, Wonde; OneRoster/Ed-Fi ready.",
  },
  {
    icon: <Workflow className="h-5 w-5" aria-hidden />,
    title: "Automation Rules (No-code)",
    desc: "Absence triggers staff notifications, make-up proposals, and roster updates automatically.",
  },
  {
    icon: <Bell className="h-5 w-5" aria-hidden />,
    title: "Native Push & Messaging",
    desc: "Mobile push, email/SMS, WeChat/WhatsApp templates with read receipts.",
  },
  {
    icon: <Globe2 className="h-5 w-5" aria-hidden />,
    title: "Global Performance & Reliability",
    desc: "Edge CDN, regional hosting, sub-second dashboards, and clear SLOs.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" aria-hidden />,
    title: "Security, Privacy & Residency",
    desc: "SSO/MFA, tenant isolation, encryption; GDPR, FERPA, PIPL compliance.",
  },
];

export default function FeatureModulesSection() {
  return (
    <ScrollReveal className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Feature Modules
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Comprehensive tools for modern school activity management
          </p>
        </div>

        {/* Grid */}
        <ul
          className="
            mt-10 grid gap-5
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {modules.map((m) => (
            <li key={m.title} className="h-full">
              <article
                className="
                  flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5
                  shadow-sm transition hover:shadow-md
                  ring-1 ring-transparent hover:ring-sky-100
                "
              >
                <span className="mb-4 grid h-10 w-10 place-items-center rounded-full bg-sky-50 text-sky-700 ring-1 ring-sky-100">
                  {m.icon}
                </span>

                <h3 className="text-base font-semibold text-slate-900">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {m.desc}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  );
}
