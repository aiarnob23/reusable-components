"use client"

import * as React from "react"
import {
  SquareTerminal,
  Settings2,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"


import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { BrandLogo } from "./brand-logo"
import { SideFooterItems } from "./side-footer-items"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
    },
    {
      title: "Playground 2",
      url: "#",
      icon: SquareTerminal,
    },
    {
      title: "Playground 3",
      url: "#",
      icon: SquareTerminal,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <BrandLogo  />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <SideFooterItems />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
