import {
  LogOut ,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function SideFooterItems() {

  return (
    <SidebarMenu>
      <SidebarMenuItem>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8 rounded-lg">
              {/* <AvatarImage src={user.avatar} alt={user.name} /> */}
              <AvatarFallback className="rounded-lg"> <LogOut /></AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-xl leading-tight">
             Logout
            </div>
            </div>
          </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
