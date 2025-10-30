import CTAButton from "@/components/ui/cta-button";
import ScrollReveal from "@/components/ui/scroll-reveal";
import Image from "next/image";

export default function HeroSection() {
  return (
    <ScrollReveal as="section" initiallyVisible className="relative">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-4 py-16 md:grid-cols-2 lg:gap-20 lg:py-24">
        <div>
          <h1 className="text-3xl font-bold leading-tight text-slate-800 sm:text-4xl">
            <span className="bg-gradient-to-l from-[#70bdcd] to-[#279cb4] bg-clip-text text-transparent">
              Shaping the Future of School
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#69bacb] to-[#a4d5df] bg-clip-text text-transparent">
              Activity Management
            </span>
          </h1>

          <div className="mt-8">
            <CTAButton href="#why-we-exist" className="px-6 py-3 text-base">
              Get To Know Us
            </CTAButton>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[28px] bg-sky-500/10 blur-2xl" aria-hidden />
          <div className="relative rounded-[22px] border border-slate-200/70 bg-white/80 shadow-xl backdrop-blur-md">
            <div className="rounded-[22px] p-2">
              <Image
                src="/school-activities.webp"
                alt="Activities and Events dashboard"
                width={1100}
                height={680}
                priority
                className="rounded-[18px] ring-1 ring-black/5"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4">
        <div className="h-px w-full border-b border-dotted border-sky-300/60" />
        <div className="mt-2 h-[6px] w-full rounded-full bg-[#0B7B8E]" />
      </div>
    </ScrollReveal>
  );
}
