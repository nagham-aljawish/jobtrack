import Link from "next/link";
import BrandLogo from "@/components/shared/brand-logo";

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Platform", href: "#platform" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background px-6">
      <div className="mx-auto max-w-7xl py-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <Link href="/" aria-label="JobTrack Home">
              <BrandLogo size="small" />
            </Link>

            <p className="text-center text-xs text-muted md:text-left">
              Understand your career. Grow with insights.
            </p>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-primary-light"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/login"
              className="text-sm text-muted transition-colors hover:text-primary-light"
            >
              Log In
            </Link>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-border/60 pt-6 text-center">
          <p className="text-xs text-muted">
            © 2026 JobTrack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
