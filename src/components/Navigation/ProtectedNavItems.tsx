import { Fragment } from "react"
import { protectedRoutes } from "../../../app.config"
import { Logo } from "../logo"
import { SidebarNavItem } from "."

const protectedNavItems = [...Object.keys(protectedRoutes).map(e => protectedRoutes[e])]

export default function ProtectedNavItems() {
  return (
    <>
      <div className="sticky top-0 md:flex hidden h-screen w-full max-w-[260px] flex-col gap-2 border-r">
        <div className="flex h-[--header_height] shrink-0 items-center justify-between border-b px-6">
          <Logo />
        </div>
        <div className="flex-1 mt-4 overflow-y-auto">
          <nav className="grid items-start gap-1 text-sm font-medium md:px-4">
            {
              protectedNavItems.map((menu, i) => (
                <Fragment key={i}>
                  <SidebarNavItem
                    href={menu.href}
                  >

                    {menu.icon && (
                      <menu.icon
                        size={18}
                        aria-hidden="true"
                      />
                    )}
                    {menu.label}
                  </SidebarNavItem>
                </Fragment>
              ))
            }
          </nav>
        </div>
      </div>
    </>
  )
}