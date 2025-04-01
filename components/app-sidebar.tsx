"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GalleryVerticalEnd } from "lucide-react";

import { SearchBar } from "@/components/search-bar";
import { useSearchContext } from "@/components/search-provider";
import { ThemeToggle } from "@/components/ui/theme-toggle";
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
  SidebarFooter,
} from "@/components/ui/sidebar";
import Logo from "@/public/Continental-logo-light-mode.png";
import Logo2 from "@/public/Continental-logo-dark-mode.png";
import NexLogoLight from "@/public/Nexuses-logo-lightmode.png";
import NexLogoDark from "@/public/Nexuses-logo-darkmode.png";
import Image from "next/image";

const navItems = [
  { title: "Introduction", url: "/" },
  { title: "Project Architecture", url: "/project-architecture" },
  { title: "Technology Stack", url: "/technology-stack" },
  { title: "Project Structure", url: "/project-structure" },
  { title: "Core Components", url: "/core-components" },
  { title: "State Management", url: "/state-management" },
  { title: "Custom Hooks", url: "/custom-hooks" },
  { title: "API Integration", url: "/api-integration" },
  {
    title: "Authentication & Authorization",
    url: "/authentication-authorization",
  },
  { title: "Routing Structure", url: "/routing-structure" },
  { title: "Environment Configuration", url: "/environment-configuration" },
  { title: "Extending the Application", url: "/extending-the-application" },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { navItems: contentNavItems, isLoading } = useSearchContext();

  // Use contentNavItems from context if available, otherwise fall back to static navItems
  const searchNavItems =
    contentNavItems.length > 0 ? contentNavItems : navItems;

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="dark:hidden">
                  <Image
                    src={Logo}
                    alt="Continental Logo"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="hidden dark:block">
                  <Image
                    src={Logo2}
                    alt="Continental Logo Dark"
                    width={200}
                    height={200}
                  />
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
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center justify-between">
          {/* <span className="text-xs text-muted-foreground">Toggle theme</span> */}
          <div className="dark:hidden">
            <Image src={NexLogoLight} alt="Nexuses Logo" width={100} height={100} />
          </div>
          <div className="hidden dark:block">
            <Image
              src={NexLogoDark}
              alt="Nexuses Logo Dark"
              width={100}
              height={100}
            />
          </div>
          <ThemeToggle />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
