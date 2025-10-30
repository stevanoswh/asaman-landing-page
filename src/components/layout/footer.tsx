import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Footer() {
  const socials = [
    { label: "Facebook", href: "https://facebook.com", Icon: Facebook },
    { label: "Twitter / X", href: "https://twitter.com", Icon: Twitter },
    { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
    { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  ];

  return (
    <footer className="bg-[#06748a] text-white">
      <div className="mx-auto grid max-w-5xl gap-6 px-3 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4 text-center sm:text-left">
          <div className="text-2xl font-semibold">asaman</div>
          <p className="text-sm leading-6 text-white/80">
            Building clear, actionable guidelines that help every contributor ship
            with confidence.
          </p>

          <div className="flex items-center justify-center gap-3 sm:justify-start">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-white/10 transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="h-4 w-4 text-white" strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center sm:text-left">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/70">
            Quick Links
          </h2>
          <ul className="mt-3 flex flex-col items-center space-y-2 text-sm sm:items-start">
            <li><Link className="hover:text-white" href="/">Home</Link></li>
            <li><Link className="hover:text-white" href="/guidelines">Guidelines</Link></li>
            <li><Link className="hover:text-white" href="/about">About</Link></li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/70">
            Help &amp; Support
          </h2>
          <ul className="mt-3 flex flex-col items-center space-y-2 text-sm sm:items-start">
            <li><a className="hover:text-white" href="#faq">FAQs</a></li>
            <li><a className="hover:text-white" href="#docs">Documentation</a></li>
            <li><a className="hover:text-white" href="#community">Community</a></li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/70">
            Contact Us
          </h2>
          <ul className="mt-3 flex flex-col items-center space-y-2 text-sm sm:items-start">
            <li><a className="hover:text-white" href="mailto:hello@asaman.com">hello@asaman.com</a></li>
            <li><a className="hover:text-white" href="tel:+1234567890">+1 (234) 567-890</a></li>
            <li><a className="hover:text-white" href="#contact-form">Contact Form</a></li>
          </ul>
        </div>
      </div>

      <div>
        <div className="mx-auto max-w-5xl px-4 pb-6">
          <div className="mx-auto h-px w-full max-w-5xl bg-white/30" />
          <p className="mt-4 text-center text-xs text-white/70">
            &copy; {new Date().getFullYear()} asaman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
