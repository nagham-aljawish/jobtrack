const features = [
  {
    number: "02",
    title: "Application Tracking",
    description:
      "Keep every opportunity organized and follow your progress from application to offer.",
    icon: "applications",
  },
  {
    number: "03",
    title: "AI Interview Coach",
    description:
      "Practice your answers, receive meaningful feedback, and prepare with confidence.",
    icon: "interview",
  },
] as const;

function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: "applications" | "interview" | "roadmap" | "insights";
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {name === "applications" && (
        <>
          <rect x="4" y="3" width="16" height="18" rx="2.5" />
          <path d="M8 8h8M8 12h8M8 16h5" />
        </>
      )}

      {name === "interview" && (
        <>
          <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H7l-3 2v-5.5A7.5 7.5 0 1 1 20 11.5Z" />
          <path d="M8 11h.01M12 11h.01M16 11h.01" />
        </>
      )}

      {name === "roadmap" && (
        <>
          <circle cx="6" cy="18" r="2.5" />
          <circle cx="18" cy="6" r="2.5" />
          <path d="M8.5 18H12a3 3 0 0 0 3-3V9a3 3 0 0 1 3-3" />
          <path d="m14 12 1.5-1.5L17 12" />
        </>
      )}

      {name === "insights" && (
        <>
          <path d="M3 17.5 8.5 12l4 3.5L21 6" />
          <path d="M15 6h6v6" />
          <path d="M3 21h18" />
        </>
      )}
    </svg>
  );
}

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative scroll-mt-24 px-6 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-9 flex flex-col justify-between gap-5 md:mb-11 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] text-primary-light">
              THE JOBTRACK EXPERIENCE
            </p>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              A smarter way to
              <br />
              <span className="text-primary-light">move forward.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-muted">
            More than tracking applications. A connected space to understand
            your career and shape what comes next.
          </p>
        </div>

        {/* Main Featured Feature */}
        <article className="group relative mb-3 overflow-hidden rounded-3xl border border-primary/20 bg-[#211F35] transition-colors duration-300 hover:border-primary/40">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-primary/10 blur-[90px]"
          />

          <div className="relative grid gap-6 p-6 sm:p-7 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:p-8">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="text-4xl font-light tracking-tighter text-primary/30">
                  01
                </span>

                <span className="h-px w-8 bg-primary/50" />

                <span className="text-[10px] font-semibold tracking-[0.2em] text-primary-light">
                  CORE FEATURE
                </span>
              </div>

              <div className="flex items-center gap-3 text-primary-light">
                <Icon name="insights" />

                <span className="text-xs font-medium tracking-wide">
                  CAREER INTELLIGENCE
                </span>
              </div>

              <h3 className="mt-3 max-w-lg text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl">
                See the patterns.
                <br />
                <span className="text-primary-light">Find your next move.</span>
              </h3>

              <p className="mt-3 max-w-md text-sm leading-7 text-muted">
                Understand your job search performance, discover meaningful
                patterns, and identify where you can improve your strategy.
              </p>
            </div>

            {/* Abstract Insights Visual */}
            <div className="relative mx-auto w-full max-w-md rounded-2xl border border-white/[0.08] bg-[#171526]/80 p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] tracking-[0.16em] text-muted">
                    CAREER OVERVIEW
                  </p>

                  <p className="mt-1 text-sm font-medium text-foreground">
                    Your progress
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary-light">
                  <Icon name="insights" />
                </div>
              </div>

              <div className="relative mt-5 flex h-20 items-end gap-2 border-b border-white/[0.08] px-2">
                {[35, 52, 43, 68, 56, 82, 72, 100, 88, 95].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="relative flex-1 rounded-t-sm bg-gradient-to-t from-primary/20 to-primary-light/80 transition-all duration-300 group-hover:from-primary/40"
                      style={{ height: `${height}%` }}
                    />
                  ),
                )}

                <div className="pointer-events-none absolute inset-x-0 top-1/2 border-t border-dashed border-primary/30" />
              </div>

              <div className="mt-3 flex justify-between text-[10px] text-muted">
                <span>RECENT ACTIVITY</span>
                <span>ILLUSTRATIVE PREVIEW</span>
              </div>
            </div>
          </div>
        </article>

        {/* Supporting Features */}
        <div className="grid gap-3 md:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary/40 hover:bg-card sm:p-7"
            >
              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-primary-light transition-colors group-hover:border-primary/30 group-hover:bg-primary/10">
                    <Icon name={feature.icon} />
                  </div>

                  <span className="text-xs tracking-widest text-muted/50">
                    {feature.number} / 04
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>

                <p className="mt-2 max-w-md text-sm leading-7 text-muted">
                  {feature.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-medium text-primary-light opacity-70 transition-all duration-300 group-hover:gap-3 group-hover:opacity-100">
                  <span>Explore feature</span>
                  <span>↗</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Career Roadmap */}
        <article className="group relative mt-3 overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-primary/40">
          <div className="grid gap-5 p-6 sm:p-7 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Icon name="roadmap" className="h-5 w-5 text-primary-light" />

                <span className="text-xs font-medium tracking-[0.15em] text-muted">
                  04 / CAREER ROADMAP
                </span>
              </div>

              <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                Turn ambition into action.
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-7 text-muted">
                Build a personalized learning path, develop relevant skills, and
                take meaningful steps toward your career goals.
              </p>
            </div>

            {/* Roadmap visual */}
            <div className="flex items-center justify-start gap-2 md:justify-end">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary-light">
                <span className="text-xs">01</span>
              </div>

              <div className="h-px w-7 bg-primary/40 sm:w-10" />

              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-primary/5 text-primary-light">
                <span className="text-xs">02</span>
              </div>

              <div className="h-px w-7 bg-primary/40 sm:w-10" />

              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary-light">
                <span className="text-xs">03</span>
              </div>

              <Icon
                name="roadmap"
                className="ml-2 h-5 w-5 text-primary-light"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
