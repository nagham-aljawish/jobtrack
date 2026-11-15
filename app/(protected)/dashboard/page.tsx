import { headers } from "next/headers";

import { auth } from "@/lib/auth";
import DashboardHeader from "@/components/dashboard/dashboard-header";

export const instant = false;
export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userName = session?.user.name ?? "User";

  return (
    <div className="min-h-screen">
      <DashboardHeader
        userName={userName}
        title="Overview"
        description="Welcome back! Here's what's happening with your career journey."
      />

      <div className="p-6 lg:p-8">
        <div className="rounded-2xl border border-border bg-card p-8">
          <h2 className="text-lg font-semibold text-foreground">
            Welcome to JobTrack!
          </h2>

          <p className="mt-2 text-sm text-muted">
            Your Career Intelligence Dashboard is taking shape.
          </p>
        </div>
      </div>
    </div>
  );
}
