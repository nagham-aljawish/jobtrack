import LogoutButton from "@/components/auth/logout-button";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <h1 className="text-3xl font-bold text-foreground">
          Welcome to JobTrack!
        </h1>

        <p className="mt-3 text-muted">
          Your Career Intelligence Dashboard is coming soon.
        </p>

        <div className="mt-8">
          <LogoutButton />
        </div>
      </div>
    </main>
  );
}
