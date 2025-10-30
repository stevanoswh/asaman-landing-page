import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const socials = [
    { label: "Facebook", href: "https://facebook.com/asaman", Icon: Facebook },
    { label: "Twitter / X", href: "https://twitter.com/asaman", Icon: Twitter },
    { label: "LinkedIn", href: "https://linkedin.com/company/asaman", Icon: Linkedin },
    { label: "Instagram", href: "https://instagram.com/asaman", Icon: Instagram },
  ];

  return (
    <footer className="bg-[#06748a] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand + description + socials */}
        <div className="space-y-5 text-center sm:text-left">
          <div className="text-3xl font-semibold tracking-wide">ASAMAN</div>
          <p className="text-base leading-7 text-white/90">
            ASAMAN helps you manage activities, track attendance, and streamline
            communication with your team.
          </p>
          <div className="flex items-center justify-center gap-4 sm:justify-start">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/10 transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-bold">Quick Links</h2>
          <ul className="mt-6 space-y-4 text-lg">
            <li><Link className="hover:text-white" href="/">Home</Link></li>
            <li><Link className="hover:text-white" href="/find-your-school">Find Your School</Link></li>
            <li><Link className="hover:text-white" href="/school-onboarding">School Onboarding</Link></li>
            <li><Link className="hover:text-white" href="/help-guides">Help Guides</Link></li>
            <li><Link className="hover:text-white" href="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Help & Support — semua ke "/" */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-bold">Help &amp; Support</h2>
          <ul className="mt-6 space-y-4 text-lg">
            <li><Link className="hover:text-white" href="/">FAQ</Link></li>
            <li><Link className="hover:text-white" href="/">Contact Support</Link></li>
            <li><Link className="hover:text-white" href="/">Knowledge Base</Link></li>
            <li><Link className="hover:text-white" href="/">Video Tutorials</Link></li>
            <li><Link className="hover:text-white" href="/">System Status</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-bold">Contact Us</h2>
          <ul className="mt-6 space-y-4 text-lg">
            <li className="inline-flex items-center justify-center gap-3 sm:justify-start">
              <Mail className="h-5 w-5" aria-hidden />
              <a className="hover:text-white" href="mailto:support@asaman.com">
                support@asaman.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider + copyright */}
      <div className="mx-auto max-w-7xl px-6 pb-8">
        <div className="h-px w-full bg-white/40" />
        <p className="mt-6 text-center text-sm text-white/80">
          © {new Date().getFullYear()} ASAMAN. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
