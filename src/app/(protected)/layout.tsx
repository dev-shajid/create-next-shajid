import { Header, ProtectedNavItems } from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Template",
};

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex overflow-y-hidden max-h-[100dvh]">
      <ProtectedNavItems />
      <div className="flex flex-1 !min-h-fit !overflow-y-auto flex-col">
          <Header />
          <main className="bg-muted/60 p-4 flex-1">
            {children}
          </main>
      </div>
    </div>
  )
}