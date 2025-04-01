"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { GalleryVerticalEnd } from "lucide-react"

import { SearchBar } from "@/components/search-bar"
import { useSearchContext } from "@/components/search-provider"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

const navItems = [
  { title: "Introduction", url: "/" },
  { title: "Project Architecture", url: "/project-architecture" },
  { title: "Technology Stack", url: "/technology-stack" },
  { title: "Project Structure", url: "/project-structure" },
  { title: "Core Components", url: "/core-components" },
  { title: "State Management", url: "/state-management" },
  { title: "Custom Hooks", url: "/custom-hooks" },
  { title: "API Integration", url: "/api-integration" },
  { title: "Authentication & Authorization", url: "/authentication-authorization" },
  { title: "Routing Structure", url: "/routing-structure" },
  { title: "Environment Configuration", url: "/environment-configuration" },
  { title: "Extending the Application", url: "/extending-the-application" },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { navItems: contentNavItems, isLoading } = useSearchContext()
  
  // Use contentNavItems from context if available, otherwise fall back to static navItems
  const searchNavItems = contentNavItems.length > 0 ? contentNavItems : navItems;

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="bg-primary text-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">CFS UI</span>
                  <span className="">Docs</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarGroup className="py-0">
          <SidebarGroupContent className="relative">
            <SearchBar 
              navItems={searchNavItems} 
              placeholder="Search the docs..."
              className="w-full"
            />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Documentation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url}>{item.title}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

