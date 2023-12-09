import Header from "@/shared/layout/Header";
import Navigation from "@/shared/layout/Navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="dashboard">
        <Header />
        <div className="dashboard__body">
            <Navigation />
            <main className="page-content">
                {children}
            </main>
        </div>
    </div>
  )
}