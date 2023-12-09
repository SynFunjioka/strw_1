import Header from "@/shared/layout/Header";
import Navigation from "@/shared/layout/Navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="dashboard auth">
        {children}
    </div>
  )
}