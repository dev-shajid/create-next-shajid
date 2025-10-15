'use client'

import * as React from "react"
import { ChevronRight, GalleryVerticalEnd, LucideIcon } from "lucide-react"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarRail,
} from "@/components/ui/sidebar"

import Link from "next/link"
import { usePathname } from "next/navigation"
import AppSidebarUser from "./app-sidebar-user"

interface ISidebarItem {
    title: string
    url: string
    icon?: LucideIcon
    items?: ISidebarItem[]
}

// This is sample data.
const data: {
    navMain: ISidebarItem[]
} = {
    navMain: [
        {
            title: "Dashboard",
            url: "/",
            icon: GalleryVerticalEnd,
        },
        {
            title: "API Reference",
            url: "#",
            icon: GalleryVerticalEnd,
            items: [
                {
                    title: "Components",
                    url: "#",
                    icon: GalleryVerticalEnd,
                },
                {
                    title: "File Conventions",
                    url: "#",
                    icon: GalleryVerticalEnd,
                },
            ],
        },
        {
            title: "Settings",
            url: "/settings",
            icon: GalleryVerticalEnd,
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname()

    function isItemActive(item: ISidebarItem): boolean {
        return item.url === pathname ||
            (item.items ? item.items.some(isItemActive) : false)
    }

    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="#">
                                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                                    <GalleryVerticalEnd className="size-4" />
                                </div>
                                <div className="flex flex-col gap-0.5 leading-none">
                                    <span className="font-medium">Documentation</span>
                                    <span className="">v1.0.0</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        {data.navMain.map((item, index) => (
                            <Collapsible
                                key={item.title}
                                defaultOpen={index === 1}
                                className="group/collapsible"
                            >
                                <SidebarMenuItem>
                                    {item.items?.length ? (
                                        <>
                                            <CollapsibleTrigger asChild>
                                                <SidebarMenuButton className="cursor-pointer">
                                                    {item.icon && <item.icon />}
                                                    <span>{item.title}</span>
                                                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                                </SidebarMenuButton>
                                            </CollapsibleTrigger>
                                            <CollapsibleContent>
                                                <SidebarMenuSub>
                                                    {item.items.map((item) => (
                                                        <SidebarMenuSubItem key={item.title}>
                                                            <SidebarMenuSubButton
                                                                asChild
                                                                isActive={isItemActive(item)}
                                                                className="data-[active=true]:bg-indigo-100/80 data-[active=true]:text-indigo-700 data-[active=true]:hover:bg-indigo-100 cursor-pointer"
                                                            >
                                                                <Link href={item.url}>
                                                                    {item.title}
                                                                </Link>
                                                            </SidebarMenuSubButton>
                                                        </SidebarMenuSubItem>
                                                    ))}
                                                </SidebarMenuSub>
                                            </CollapsibleContent>
                                        </>
                                    ) :
                                        <Link href={item.url}>
                                            <SidebarMenuButton
                                                isActive={isItemActive(item)}
                                                className="data-[active=true]:bg-indigo-100/80 data-[active=true]:text-indigo-700 data-[active=true]:hover:bg-indigo-100 dark:data-[active=true]:bg-indigo-900/20 dark:data-[active=true]:text-indigo-400 cursor-pointer"
                                            >
                                                {item.icon && <item.icon />}
                                                <span>{item.title}</span>
                                            </SidebarMenuButton>
                                        </Link>
                                    }
                                </SidebarMenuItem>
                            </Collapsible>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <AppSidebarUser />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
