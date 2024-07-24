import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"
import ThemeToggle from "../theme/them-change"
import { CircleUser } from "lucide-react"
import { LinkButton } from "../ui/linkButton"
import { PublicNavItems, SidebarMobile } from "."

export default function Header({ className, publicRoute = false }: { className?: string, publicRoute?: boolean }) {
  return (
    <header
      className={cn(
        "sticky top-0 flex h-[--header_height] z-[1000] shrink-0 items-center justify-between border-b px-4 backdrop-blur-lg lg:px-6 bg-background/30",
        className,
      )}
    >
      <div className="flex gap-4 items-center">
        <SidebarMobile className="md:hidden" publicRoute={publicRoute} />
        {
          publicRoute ?
            <>
              <Logo />
              <div className="hidden ml-6 md:flex items-center gap-4">
                <PublicNavItems />
              </div>
            </>
            : <></>
        }
      </div>
      <div className="space-x-4 ml-auto">
        <ThemeToggle />
        <LinkButton href='/dashboard' variant="outline" size="icon" className="rounded-md">
          <CircleUser className="h-5 w-5" />
        </LinkButton>
      </div>
    </header>
  )
}