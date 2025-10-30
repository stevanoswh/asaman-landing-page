"use client";

import CTAButton from "@/components/ui/cta-button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/find-your-school", label: "Find Your School"},
  { href: "/school-onboarding", label: "School Onboarding" },
  { href: "/help-guides", label: "Help Guides" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white text-black shadow-sm">
      <nav className="mx-auto flex max-w-5xl items-center px-4 py-3">
        <div className="flex flex-1 items-center gap-3">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-black/10 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex h-4 w-5 flex-col justify-between">
              <span className="block h-0.5 w-full bg-black" />
              <span className="block h-0.5 w-full bg-black" />
              <span className="block h-0.5 w-full bg-black" />
            </span>
          </button>
          <Link href="/" className="text-lg font-semibold">
            <Image src="/asaman.png" alt="Asaman" width={100} height={20} />
          </Link>
        </div>
        <div className="hidden flex-1 items-center justify-center gap-3 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded px-3 py-2 text-xs font-semibold tracking-wide transition-colors md:text-[13px] ${
                  isActive ? "text-[#1895af]" : "text-black hover:text-[#1895af]"
                }`}
                style={{ whiteSpace: "nowrap" }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="hidden flex-1 justify-end md:flex">
          <CTAButton href="/contact-us">Contact Us</CTAButton>
        </div>
      </nav>
      {isMobileOpen ? (
        <div className="mx-auto w-full max-w-5xl px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-0 border border-black/10 bg-[#06748a] p-2 shadow-sm">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-xs font-semibold tracking-wide transition-colors ${
                    isActive ? "bg-[#1895af]" : "text-black hover:bg-[#1895af]"
                  }`}
                  style={{ whiteSpace: "nowrap" }}
                >
                  {link.label}
                </Link>
              );
            })}
            <CTAButton href="./contact-us" className="mt-2">
              Contact Us
            </CTAButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
