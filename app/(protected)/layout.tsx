import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";

export const instant = false;

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />

      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
