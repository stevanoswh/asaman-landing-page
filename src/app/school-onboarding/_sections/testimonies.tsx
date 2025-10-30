// app/components/TestimonialsSlider.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      '“Asaman transformed our signup flow—parents love it, and we saved hours weekly. The automated allocation system is a game-changer for our 40+ after-school programs.”',
    author: "Sarah Chen",
    role: "Director of Student Activities, LFIP",
    avatar: "/avatars/sarah.png", // optional; replace or remove
  },
  {
    quote:
      "“We launched in under a month. Staff loves offline notes and the waitlist back-fill saved us countless emails.”",
    author: "James Walker",
    role: "Activities Coordinator, ISB",
    avatar: "/avatars/james.png",
  },
  {
    quote:
      "“Parents finally get one portal for everything. Messaging templates and real-time attendance are clutch.”",
    author: "Amina Rahman",
    role: "After-School Lead, DCB",
    avatar: "/avatars/amina.png",
  },
];

const logos = [
  { src: "/logos/tsinghua.png", alt: "Tsinghua University" },
  { src: "/logos/cs.png", alt: "Peking University" },
  { src: "/logos/tsinghua.png", alt: "RWTH Aachen" },
  { src: "/logos/academy.png", alt: "Nanyang Technological University" },
  { src: "/logos/cs.png", alt: "Lycee Francais International de Pekin" },
  // tambah logo lain…
];

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Respect reduced motion
  const prefersReducedMotion = useMemo(
    () => typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    []
  );

  // Autoplay
  useEffect(() => {
    if (paused || prefersReducedMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(id);
  }, [paused, prefersReducedMotion]);

  // Basic swipe (pointer) support
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    let startX = 0;
    let delta = 0;

    const onDown = (e: PointerEvent) => {
      startX = e.clientX;
      delta = 0;
      el.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!startX) return;
      delta = e.clientX - startX;
    };
    const onUp = (e: PointerEvent) => {
      if (Math.abs(delta) > 60) {
        setIndex((i) =>
          delta < 0 ? (i + 1) % TESTIMONIALS.length : (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
        );
      }
      startX = 0;
      delta = 0;
      try { el.releasePointerCapture(e.pointerId); } catch {}
    };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
    };
  }, []);

  return (
    <ScrollReveal className="w-full bg-white">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        {/* Heading */}
        <header className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            What Schools Are Saying
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Real feedback from our partner schools
          </p>
        </header>

        <div
          className="relative py-12 overflow-hidden rounded-3xl border border-slate-200 bg-sky-50/40 shadow-sm py"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* quote chip */}
          <div className="pointer-events-none absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 my-7">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-teal-600 text-white shadow-lg ring-4 ring-sky-50/80 mt-10">
              <Quote className="h-6 w-6" aria-hidden />
            </span>
          </div>

          {/* Slides */}
          <div
            ref={sliderRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Testimonials"
            className="relative"
          >
            <div
              className="flex transition-transform duration-500 ease-out will-change-transform"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {TESTIMONIALS.map((t, i) => (
                <figure
                  key={i}
                  className="min-w-full px-6 py-10 sm:px-12 sm:py-14"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${TESTIMONIALS.length}`}
                >
                  <blockquote className="mx-auto max-w-3xl text-center text-xl font-semibold leading-9 text-slate-900 sm:text-2xl sm:leading-10">
                    {t.quote}
                  </blockquote>

                  <figcaption className="mx-auto mt-6 flex max-w-xl items-center justify-center gap-3 text-left">
                    {t.avatar && (
                      <span className="relative block h-10 w-10 overflow-hidden rounded-full ring-1 ring-slate-200">
                        <Image src={t.avatar} alt="" fill sizes="40px" className="object-cover" />
                      </span>
                    )}
                    <div className="text-sm">
                      <div className="font-semibold text-slate-900">{t.author}</div>
                      <div className="text-slate-600">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* Controls */}
            <div className="absolute inset-x-0 bottom-4 z-10 flex items-center justify-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    i === index ? "bg-teal-600" : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

          </div>
        </div>

         <div className="mt-10 grid grid-cols-2 place-items-center gap-6 sm:grid-cols-5">
            {logos.map((l) => (
            <div
            key={l.alt}
            className="relative h-12 w-44"
            title={l.alt}
            >
            <Image
                src={l.src}
                alt={l.alt}
                fill
                sizes="176px"             // = w-44
                className="object-contain grayscale opacity-90 transition hover:opacity-100 hover:grayscale-0"
            />
            </div>
        ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
