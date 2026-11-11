"use client";

import Link from "next/link";
import BrandLogo from "@/components/shared/brand-logo";

const navLinks = [
  { label: "Features", href: "features" },
  { label: "How It Works", href: "how-it-works" },
  { label: "Platform", href: "platform" },
];

export default function Navbar() {
  function handleNavClick(
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) {
    event.preventDefault();

    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `/#${targetId}`);
  }

  return (
    <header className="relative z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Brand */}
        <Link href="/" aria-label="JobTrack Home">
          <BrandLogo size="small" />
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`/#${link.href}`}
              onClick={(event) => handleNavClick(event, link.href)}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Authentication Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm font-medium text-muted transition-colors hover:text-foreground sm:block"
          >
            Log In
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
