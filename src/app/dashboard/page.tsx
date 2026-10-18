import type { Metadata } from "next";
import Dashboard from "@/components/Dashboard";

// Private stats page for the TC team. Not linked anywhere and hidden from search engines.
export const metadata: Metadata = {
  title: "TC Dashboard",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

export default function DashboardPage() {
  return <Dashboard />;
}
