"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  CalendarDays,
  FileText,
  ChartNoAxesCombined,
  Target,
  MessageSquareText,
  Map,
  Settings,
} from "lucide-react";

import BrandLogo from "@/components/shared/brand-logo";
import LogoutButton from "@/components/auth/logout-button";

const workspaceLinks = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Applications",
    href: "/applications",
    icon: BriefcaseBusiness,
  },
  {
    label: "Interviews",
    href: "/interviews",
    icon: CalendarDays,
  },
  {
    label: "Documents",
    href: "/documents",
    icon: FileText,
  },
];

const intelligenceLinks = [
  {
    label: "Career Insights",
    href: "/career-insights",
    icon: ChartNoAxesCombined,
  },
  {
    label: "Skill Gap",
    href: "/skill-gap",
    icon: Target,
  },
  {
    label: "Interview Coach",
    href: "/interview-coach",
    icon: MessageSquareText,
  },
  {
    label: "Career Roadmap",
    href: "/career-roadmap",
    icon: Map,
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  function isActiveLink(href: string) {
    if (href === "/dashboard") {
      return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-border bg-background px-4 py-6">
      {/* Logo */}
      <Link href="/dashboard" className="mb-10 px-2">
        <BrandLogo size="small" />
      </Link>

      {/* Navigation */}
      <nav className="flex-1 space-y-8 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {/* Workspace */}
        <div>
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted">
            Workspace
          </p>

          <div className="space-y-1">
            {workspaceLinks.map((link) => {
              const Icon = link.icon;
              const isActive = isActiveLink(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "border border-primary/20 bg-primary/10 text-primary-light"
                      : "text-muted hover:bg-surface hover:text-foreground"
                  }`}
                >
                  <Icon size={18} strokeWidth={1.8} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Intelligence */}
        <div>
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted">
            Intelligence
          </p>

          <div className="space-y-1">
            {intelligenceLinks.map((link) => {
              const Icon = link.icon;
              const isActive = isActiveLink(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "border border-primary/20 bg-primary/10 text-primary-light"
                      : "text-muted hover:bg-surface hover:text-foreground"
                  }`}
                >
                  <Icon size={18} strokeWidth={1.8} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="mt-6 space-y-3 border-t border-border pt-5">
        <Link
          href="/settings"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
        >
          <Settings size={18} strokeWidth={1.8} />
          <span>Settings</span>
        </Link>

        <LogoutButton />
      </div>
    </aside>
  );
}
