import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden px-6 py-16 sm:py-20">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[110px]"
      />

      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/15 via-card to-surface px-6 py-12 text-center sm:px-12 sm:py-16">
        {/* Decorative Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-[90px]"
        />

        <div className="relative">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-primary-light sm:text-sm">
            YOUR FUTURE STARTS HERE
          </p>

          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to take control of your
            <span className="text-primary-light"> career journey?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
            Make sense of your career journey, uncover opportunities to improve,
            and move forward with a clearer strategy.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/register"
              className="rounded-xl bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-primary/30"
            >
              Get Started
            </Link>

            <Link
              href="/login"
              className="rounded-xl border border-border bg-background/50 px-7 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-background"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
