import { Header } from "@/components/Navigation"


export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header publicRoute />
      <main className="bg-muted/60 p-4 flex-1">
        {children}
      </main>
    </div>
  )
}
