const steps = [
  {
    number: "01",
    title: "Organize Your Journey",
    description:
      "Add your job applications, manage opportunities, and keep everything in one place.",
  },
  {
    number: "02",
    title: "Understand Your Progress",
    description:
      "Explore your career patterns, discover insights, and identify areas to improve.",
  },
  {
    number: "03",
    title: "Grow With a Strategy",
    description:
      "Prepare for interviews, build your skills, and follow a personalized career roadmap.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative border-y border-border/60 bg-surface/30 px-6 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary-light sm:text-sm">
            YOUR NEXT CHAPTER
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A smarter journey,
            <span className="text-primary-light"> step by step.</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
            From your first application to your next career milestone.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-9 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <article key={step.number} className="relative">
              {/* Step number and connector */}
              <div className="mb-5 flex items-center gap-4">
                <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-[#211F35] text-sm font-bold text-primary-light shadow-sm shadow-primary/5">
                  {step.number}
                </span>

                {index !== steps.length - 1 && (
                  <div className="hidden h-px flex-1 bg-gradient-to-r from-primary/50 via-primary/25 to-transparent md:block" />
                )}
              </div>

              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {step.title}
              </h3>

              <p className="mt-2.5 max-w-sm text-sm leading-7 text-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
