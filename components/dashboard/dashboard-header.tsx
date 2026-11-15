import { Bell, Search } from "lucide-react";

type DashboardHeaderProps = {
  userName: string;
  title: string;
  description: string;
};

export default function DashboardHeader({
  userName,
  title,
  description,
}: DashboardHeaderProps) {
  const firstName = userName.trim().split(" ")[0] || "there";

  return (
    <header className="flex min-h-20 items-center justify-between gap-6 border-b border-border bg-background px-6 py-4 lg:px-8">
      {/* Page Title */}
      <div className="min-w-0">
        <h1 className="truncate text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          {title}
        </h1>

        <p className="mt-1 truncate text-sm text-muted">{description}</p>
      </div>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-3">
        {/* Search */}
        <button
          type="button"
          aria-label="Search"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-muted transition-colors hover:border-primary/40 hover:text-foreground"
        >
          <Search size={18} strokeWidth={1.8} />
        </button>

        {/* Notifications */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-muted transition-colors hover:border-primary/40 hover:text-foreground"
        >
          <Bell size={18} strokeWidth={1.8} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary" />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 border-l border-border pl-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-primary/15 text-sm font-semibold text-primary-light">
            {firstName.charAt(0).toUpperCase()}
          </div>

          <div className="hidden sm:block">
            <p className="max-w-32 truncate text-sm font-medium text-foreground">
              {userName}
            </p>

            <p className="text-xs text-muted">Personal Workspace</p>
          </div>
        </div>
      </div>
    </header>
  );
}
