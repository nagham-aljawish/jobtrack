import BrandLogo from "@/components/shared/brand-logo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <BrandLogo size="large" />

      <p className="mt-6 text-lg text-muted">
        Understand your career. Improve your strategy. Grow with insights.
      </p>

      <div className="mt-8 rounded-xl border border-border bg-card px-6 py-4">
        <p className="text-primary-light">Your Career Intelligence Platform</p>
      </div>
    </main>
  );
}
