const previewStats = [
  {
    label: "Applications",
    value: "12",
    color: "bg-primary",
    icon: "briefcase",
  },
  {
    label: "Interviews",
    value: "03",
    color: "bg-purple-400",
    icon: "calendar",
  },
  {
    label: "In Progress",
    value: "08",
    color: "bg-indigo-400",
    icon: "clock",
  },
] as const;

const applicationStages = [
  { label: "Applied", count: "12", width: "100%" },
  { label: "Interview", count: "03", width: "25%" },
  { label: "Offer", count: "01", width: "8%" },
];

const workspaceLinks = [
  { label: "Overview", icon: "grid" },
  { label: "Applications", icon: "briefcase" },
  { label: "Interviews", icon: "calendar" },
  { label: "Documents", icon: "file" },
] as const;

const intelligenceLinks = [
  { label: "Career Insights", icon: "chart" },
  { label: "Skill Gap", icon: "target" },
  { label: "Interview Coach", icon: "message" },
] as const;

type PreviewIconName =
  | "grid"
  | "briefcase"
  | "calendar"
  | "file"
  | "chart"
  | "target"
  | "message"
  | "clock"
  | "sparkles";

function PreviewIcon({
  name,
  className = "h-4 w-4",
}: {
  name: PreviewIconName;
  className?: string;
}) {
  const paths: Record<PreviewIconName, React.ReactNode> = {
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="14" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 12h18M10 12v2h4v-2" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" />
      </>
    ),
    file: (
      <>
        <path d="M13 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10z" />
        <path d="M13 3v7h7M8 14h8M8 17h8" />
      </>
    ),
    chart: (
      <>
        <path d="M3 3v18h18" />
        <path d="m7 14 4-4 4 3 6-7" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    message: (
      <>
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    sparkles: (
      <>
        <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" />
        <path d="m19 14 1.1 2.9L23 18l-2.9 1.1L19 22l-1.1-2.9L15 18l2.9-1.1L19 14Z" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export default function DashboardPreview() {
  return (
    <section id="platform" className="relative px-6 pb-24 pt-10">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-80 w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="mx-auto max-w-5xl">
        {/* Preview Label */}
        <div className="mb-5 flex items-center justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary-light shadow-[0_0_10px_rgba(196,181,253,0.5)]" />
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            A glimpse into JobTrack
          </p>
        </div>

        {/* Dashboard Window */}
        <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/30 transition-shadow duration-300 hover:shadow-primary/5">
          {/* Window Header */}
          <div className="flex items-center justify-between border-b border-border bg-card/70 px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
            </div>

            <span className="text-xs font-medium text-muted">
              JobTrack Dashboard
            </span>

            <span className="rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 text-[10px] font-medium text-primary-light">
              Preview
            </span>
          </div>

          {/* Dashboard Content */}
          <div className="grid gap-5 p-5 sm:p-7 md:grid-cols-[180px_1fr]">
            {/* Sidebar Preview */}
            <aside className="hidden space-y-4 border-r border-border pr-5 md:block">
              {/* Workspace */}
              <div className="space-y-3">
                <p className="px-3 text-xs font-medium text-muted">Workspace</p>

                {workspaceLinks.map((item, index) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs transition-colors ${
                      index === 0
                        ? "border border-primary/15 bg-primary/15 font-medium text-primary-light"
                        : "text-muted hover:bg-card hover:text-foreground"
                    }`}
                  >
                    <PreviewIcon
                      name={item.icon}
                      className="h-4 w-4 shrink-0"
                    />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Intelligence */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 px-3">
                  <PreviewIcon
                    name="sparkles"
                    className="h-4 w-4 shrink-0 text-primary-light"
                  />
                  <p className="text-xs font-medium text-muted">Intelligence</p>
                </div>

                {intelligenceLinks.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs text-muted transition-colors hover:bg-card hover:text-foreground"
                  >
                    <PreviewIcon
                      name={item.icon}
                      className="h-4 w-4 shrink-0"
                    />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </aside>

            {/* Main Preview */}
            <div className="min-w-0 space-y-6">
              <div>
                <p className="text-xs text-muted">Your workspace</p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">
                  Career Overview
                </h3>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                {previewStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border bg-card p-3 transition-all duration-300 hover:border-primary/30 hover:bg-card/80 sm:p-4"
                  >
                    <div className="mb-3 flex items-center justify-between gap-1">
                      <div className={`h-1 w-7 rounded-full ${stat.color}`} />
                      <PreviewIcon
                        name={stat.icon}
                        className="h-4 w-4 text-muted/70"
                      />
                    </div>

                    <p className="text-lg font-bold text-foreground sm:text-2xl">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-[10px] text-muted sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Application Progress */}
              <div className="rounded-xl border border-border bg-card p-4 transition-colors duration-300 hover:border-primary/20 sm:p-5">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <h4 className="text-sm font-semibold text-foreground">
                    Application Activity
                  </h4>

                  <span className="shrink-0 rounded-md bg-surface px-2 py-1 text-[10px] text-muted">
                    Sample preview
                  </span>
                </div>

                <div className="space-y-5">
                  {applicationStages.map((stage) => (
                    <div key={stage.label}>
                      <div className="mb-2 flex justify-between text-xs">
                        <span className="text-muted">{stage.label}</span>
                        <span className="font-medium tabular-nums text-primary-light">
                          {stage.count}
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-surface">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light transition-all duration-500"
                          style={{ width: stage.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs leading-6 text-muted">
          A preview of the workspace. Your actual dashboard is personalized to
          you.
        </p>
      </div>
    </section>
  );
}
