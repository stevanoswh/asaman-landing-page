// app/page.tsx  (or wherever your page lives)
import Image from "next/image";
import { Cpu, LayoutDashboard, Globe2 } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";
import CTAButton from "@/components/ui/cta-button";

export default function InovationsSection() {
  return (
      <ScrollReveal className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          <div>
            <CTAButton href="/" className="mt-2">
              Inovations
            </CTAButton>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-800 md:text-4xl">
              The Future of ASAMAN
            </h2>

            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <div className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-sky-600/10 ring-1 ring-sky-600/20">
                  <Cpu className="h-5 w-5 text-sky-700" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    AI-based allocations
                  </h3>
                  <p className="text-slate-600">
                    Smart algorithms to optimize student activity assignments
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-sky-600/10 ring-1 ring-sky-600/20">
                  <LayoutDashboard className="h-5 w-5 text-sky-700" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    Parent dashboards
                  </h3>
                  <p className="text-slate-600">
                    Comprehensive portals for parent engagement and monitoring
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-sky-600/10 ring-1 ring-sky-600/20">
                  <Globe2 className="h-5 w-5 text-sky-700" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    Global scaling
                  </h3>
                  <p className="text-slate-600">
                    Expanding to serve educational institutions worldwide
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-xl backdrop-blur-md">
            <Image
              src="/future.webp" // put the file in /public/images/
              alt="Parent and child viewing the ASAMAN dashboard on a laptop"
              width={960}
              height={640}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </ScrollReveal>
  );
}
