import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

const baseClasses =
  "inline-flex items-center justify-center rounded-full bg-[#1895af] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#056276] active:bg-[#045063]";

export default function CTAButton({ href, children, className = "", ...rest }: CTAButtonProps) {
  const composedClassName = `${baseClasses}${className ? ` ${className}` : ""}`;
  const isInternal = href.startsWith("/") || href.startsWith("#");

  if (isInternal) {
    return (
      <Link href={href} className={composedClassName} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={composedClassName} {...rest}>
      {children}
    </a>
  );
}
