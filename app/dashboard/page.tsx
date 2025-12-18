import { DashboardContent } from "@/components/dashboard/dashboard-content"

export const metadata = {
  title: "Dashboard",
  description: "Your personal dashboard",
}

export default function DashboardPage() {
  // Note: In a real app, you'd check auth on the server
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Dashboard</h1>
      <DashboardContent />
    </div>
  )
}
