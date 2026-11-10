import RegisterForm from "@/components/auth/register-form";

export default function RegisterPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#171526] lg:grid lg:h-screen lg:min-h-0 lg:grid-cols-2">
      {/* Unified background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 25% 50%, rgba(139,92,246,0.09), transparent 48%), radial-gradient(ellipse at 80% 45%, rgba(139,92,246,0.06), transparent 45%)",
        }}
      />

      {/* Visual section */}
      <section className="relative flex min-h-[560px] flex-col items-center justify-center overflow-hidden px-7 py-10 lg:h-screen lg:min-h-0 lg:px-10 lg:py-6 xl:px-16">
        <div className="relative z-10 flex w-full max-w-lg flex-col items-center">
          {/* Main message */}
          <div className="mb-5 w-full text-center lg:mb-3 lg:text-left">
            <span className="text-[11px] font-semibold tracking-[0.28em] text-primary-light">
              YOUR CAREER, REIMAGINED
            </span>

            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Your potential.
              <span className="block bg-gradient-to-r from-primary-light via-primary to-purple-400 bg-clip-text text-transparent">
                Your next chapter.
              </span>
            </h1>

            <p className="mt-4 max-w-md text-sm leading-7 text-muted sm:text-base">
              Understand where you stand, discover what’s next, and move forward
              with confidence.
            </p>
          </div>

          {/* Career Intelligence Orbit */}
          <div className="relative mx-auto flex aspect-square w-full max-w-[370px] items-center justify-center lg:w-[min(34vw,38vh)] lg:max-w-[340px]">
            {/* Outer ambient glow */}
            <div className="absolute h-[75%] w-[75%] rounded-full bg-primary/10 blur-[55px]" />

            {/* Orbital rings */}
            <div className="absolute h-[96%] w-[96%] rounded-full border border-primary/10" />

            <div className="absolute h-[76%] w-[76%] rounded-full border border-primary/20" />

            <div className="absolute h-[56%] w-[56%] rounded-full border border-primary-light/20" />

            {/* Orbit paths */}
            <div className="absolute h-[88%] w-[88%] rotate-45 rounded-full border border-dashed border-primary-light/20" />

            <div className="absolute h-[88%] w-[88%] -rotate-45 rounded-full border border-dashed border-primary-light/15" />

            {/* Central glow */}
            <div className="absolute h-56 w-56 rounded-full bg-primary/15 blur-[55px]" />

            {/* Central core */}
            <div className="relative z-10 flex h-36 w-36 items-center justify-center rounded-full border border-primary-light/40 bg-gradient-to-br from-primary/50 via-[#292640] to-[#171526] shadow-[0_0_75px_rgba(139,92,246,0.3)] sm:h-40 sm:w-40">
              <div className="absolute inset-3 rounded-full border border-primary-light/20" />

              <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl" />

              <div className="relative flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary-light/30 bg-primary/20 text-4xl text-primary-light shadow-[0_0_35px_rgba(139,92,246,0.3)]">
                  ✦
                </div>

                <span className="mt-3 text-[10px] font-semibold tracking-[0.2em] text-primary-light">
                  JOBTRACK
                </span>
              </div>
            </div>

            {/* Applications node */}
            <div className="absolute left-[17%] top-[19%] z-20 flex h-12 w-12 items-center justify-center rounded-full border border-primary-light/40 bg-[#292640] shadow-[0_0_25px_rgba(139,92,246,0.25)]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5 text-primary-light"
              >
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
              </svg>
            </div>

            {/* Career insights node */}
            <div className="absolute right-[17%] top-[19%] z-20 flex h-12 w-12 items-center justify-center rounded-full border border-primary-light/40 bg-[#292640] shadow-[0_0_25px_rgba(139,92,246,0.25)]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5 text-primary-light"
              >
                <path d="M3 17l6-6 4 4 8-9" />
                <path d="M15 6h6v6" />
              </svg>
            </div>

            {/* Skills node */}
            <div className="absolute bottom-[19%] left-[17%] z-20 flex h-12 w-12 items-center justify-center rounded-full border border-primary-light/40 bg-[#292640] shadow-[0_0_25px_rgba(139,92,246,0.25)]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5 text-primary-light"
              >
                <path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2L12 3z" />
                <path d="M19 16l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
              </svg>
            </div>

            {/* Career roadmap node */}
            <div className="absolute bottom-[19%] right-[17%] z-20 flex h-12 w-12 items-center justify-center rounded-full border border-primary-light/40 bg-[#292640] shadow-[0_0_25px_rgba(139,92,246,0.25)]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5 text-primary-light"
              >
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M22 12h-2M12 22v-2M2 12h2" />
              </svg>
            </div>

            {/* Small orbit particles */}
            <div className="absolute left-[48%] top-[3%] h-2 w-2 rounded-full bg-primary-light shadow-[0_0_15px_#C4B5FD]" />

            <div className="absolute right-[5%] top-[49%] h-2 w-2 rounded-full bg-primary shadow-[0_0_15px_#8B5CF6]" />

            <div className="absolute bottom-[4%] left-[48%] h-2 w-2 rounded-full bg-primary-light shadow-[0_0_15px_#C4B5FD]" />

            <div className="absolute left-[5%] top-[49%] h-2 w-2 rounded-full bg-primary shadow-[0_0_15px_#8B5CF6]" />
          </div>

          {/* Platform capabilities */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[10px] font-medium tracking-wide text-muted/80 sm:gap-x-5">
            <span>Applications</span>
            <span className="text-primary-light">✦</span>
            <span>Insights</span>
            <span className="text-primary-light">✦</span>
            <span>Skills</span>
            <span className="text-primary-light">✦</span>
            <span>Growth</span>
          </div>
        </div>
      </section>

      {/* Register section */}
      <section className="relative z-10 flex items-center justify-center px-5 py-10 sm:px-10 lg:h-screen lg:min-h-0">
        <div className="w-full max-w-md">
          <RegisterForm />
        </div>
      </section>
    </main>
  );
}
