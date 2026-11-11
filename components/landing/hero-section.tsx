"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-80px)] items-center overflow-hidden px-6 py-10">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-6">
        {/* Text Content */}
        <div className="relative z-10 text-center lg:text-left">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-primary-light shadow-[0_0_12px_#C4B5FD]" />

            <span className="text-xs font-medium tracking-wide text-primary-light sm:text-sm">
              Your Career Intelligence Platform
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Your Career Journey,
            <span className="mt-2 block bg-gradient-to-r from-primary-light via-primary to-purple-400 bg-clip-text text-transparent">
              Smarter.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg lg:mx-0">
            Manage your job search, understand your progress, and build a
            smarter career strategy with AI-powered insights.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <Link
              href="/register"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90 sm:w-auto"
            >
              Get Started
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

            <Link
              href="/#features"
              onClick={(event) => {
                event.preventDefault();

                document.getElementById("features")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });

                window.history.replaceState(null, "", "/#features");
              }}
              className="inline-flex w-full items-center justify-center rounded-xl border border-border bg-surface/70 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-card sm:w-auto"
            >
              Explore Features
            </Link>
          </div>
        </div>

        {/* Abstract Career Visual */}
        <div
          aria-hidden="true"
          className="relative mx-auto flex aspect-square w-full max-w-[420px] items-center justify-center"
        >
          {/* Outer Glow */}
          <div className="absolute h-[70%] w-[70%] rounded-full bg-primary/10 blur-[65px]" />

          {/* Orbital Rings */}
          <div className="absolute h-[88%] w-[88%] rounded-full border border-primary/10" />

          <div className="absolute h-[70%] w-[70%] rounded-full border border-primary/20 [transform:rotateX(65deg)_rotate(-25deg)]" />

          <div className="absolute h-[58%] w-[85%] rounded-full border border-purple-400/20 [transform:rotate(35deg)]" />

          {/* Glowing Career Path */}
          <svg
            viewBox="0 0 500 500"
            className="absolute inset-0 h-full w-full overflow-visible"
            fill="none"
          >
            <defs>
              <linearGradient id="careerPath" x1="80" y1="400" x2="420" y2="80">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
                <stop offset="45%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#C4B5FD" />
              </linearGradient>

              <filter id="pathGlow">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              d="M65 390 C130 350 100 260 190 270 S270 340 310 225 S370 150 440 85"
              stroke="url(#careerPath)"
              strokeWidth="3"
              strokeLinecap="round"
              filter="url(#pathGlow)"
            />

            <path
              d="M65 390 C130 350 100 260 190 270 S270 340 310 225 S370 150 440 85"
              stroke="#C4B5FD"
              strokeOpacity="0.5"
              strokeWidth="1"
              strokeDasharray="4 12"
              strokeLinecap="round"
            />

            <circle cx="190" cy="270" r="5" fill="#C4B5FD" />
            <circle cx="310" cy="225" r="6" fill="#A78BFA" />
            <circle cx="440" cy="85" r="7" fill="#E9D5FF" />

            <circle
              cx="190"
              cy="270"
              r="15"
              stroke="#C4B5FD"
              strokeOpacity="0.3"
            />

            <circle
              cx="310"
              cy="225"
              r="19"
              stroke="#A78BFA"
              strokeOpacity="0.3"
            />

            <circle
              cx="440"
              cy="85"
              r="23"
              stroke="#C4B5FD"
              strokeOpacity="0.25"
            />
          </svg>

          {/* Central Glass Orb */}
          <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-primary/40 via-[#292044]/90 to-[#171526] shadow-[0_0_55px_rgba(139,92,246,0.25)] backdrop-blur-xl sm:h-40 sm:w-40">
            <div className="absolute inset-3 rounded-full border border-primary-light/20" />

            {/* Career Briefcase Icon */}
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/40 to-purple-900/40 shadow-[inset_0_0_25px_rgba(196,181,253,0.2)] sm:h-24 sm:w-24">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                className="h-11 w-11 text-primary-light sm:h-14 sm:w-14"
              >
                <rect
                  x="7"
                  y="16"
                  width="34"
                  height="25"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <path
                  d="M17 16V12C17 10.3 18.3 9 20 9H28C29.7 9 31 10.3 31 12V16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <path
                  d="M7 25H41M20 25V29H28V25"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <span className="absolute right-5 top-5 h-2 w-2 rounded-full bg-white shadow-[0_0_12px_white]" />
          </div>

          {/* Floating Glass Elements */}
          <div className="absolute left-[10%] top-[22%] flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] text-2xl text-primary-light shadow-xl shadow-primary/10 backdrop-blur-xl sm:h-16 sm:w-16">
            ✧
          </div>

          <div className="absolute right-[9%] top-[30%] flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-2xl text-purple-200 shadow-xl shadow-primary/10 backdrop-blur-xl sm:h-20 sm:w-20">
            ◈
          </div>

          <div className="absolute bottom-[15%] left-[23%] flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-xl text-primary-light shadow-lg backdrop-blur-xl sm:h-14 sm:w-14">
            ↗
          </div>

          <div className="absolute bottom-[18%] right-[19%] flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/15 text-lg text-primary-light shadow-lg backdrop-blur-xl">
            ✦
          </div>

          {/* Small Ambient Particles */}
          <span className="absolute left-[48%] top-[7%] h-1.5 w-1.5 rounded-full bg-primary-light shadow-[0_0_12px_#C4B5FD]" />

          <span className="absolute bottom-[8%] right-[45%] h-2 w-2 rounded-full bg-purple-300 shadow-[0_0_15px_#C4B5FD]" />

          <span className="absolute left-[8%] bottom-[42%] h-1 w-1 rounded-full bg-white/70" />

          <span className="absolute right-[5%] bottom-[43%] h-1.5 w-1.5 rounded-full bg-primary-light/80" />
        </div>
      </div>
    </section>
  );
}
