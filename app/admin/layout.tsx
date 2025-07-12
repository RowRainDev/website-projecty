"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Search,
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  Users,
  Palette,
  Mail,
  FileText,
  Server,
  Package,
  MessageSquare,
  Bell,
  LogOut,
  Grid3X3,
  Key,
  Database,
  Sliders,
  Store,
  Layers,
  Monitor,
  User,
} from "lucide-react"
import { Suspense } from "react"

const sidebarSections = [
  {
    title: "OVERVIEW",
    items: [
      { href: "/admin", label: "Admin Overview", icon: LayoutDashboard },
      { href: "/admin/api", label: "API", icon: Key },
      { href: "/admin/users", label: "Users", icon: Users },
      { href: "/admin/customize", label: "Customize", icon: Sliders },
      { href: "/admin/colors", label: "Colors", icon: Palette },
      { href: "/admin/emails", label: "Emails", icon: Mail },
      { href: "/admin/logs", label: "Logs", icon: FileText },
    ],
  },
  {
    title: "DASHBOARD",
    items: [
      { href: "/admin/pages", label: "Pages", icon: FileText },
      { href: "/admin/wallets", label: "Wallets", icon: Database },
      { href: "/admin/news", label: "News", icon: MessageSquare },
      { href: "/admin/notification-center", label: "Notification Center", icon: Bell },
      { href: "/admin/tickets", label: "Tickets", icon: MessageSquare },
    ],
  },
  {
    title: "MARKET",
    items: [
      { href: "/admin/market-overview", label: "Market Overview", icon: Store },
      { href: "/admin/products", label: "Products", icon: Package },
      { href: "/admin/categories", label: "Categories", icon: Layers },
    ],
  },
  {
    title: "SERVICES",
    items: [
      { href: "/admin/pterodactyl", label: "Pterodactyl Panel", icon: Server },
      { href: "/admin/virtfusion", label: "VirtFusion", icon: Monitor, hasSubmenu: true },
      { href: "/admin/other-services", label: "Other Services", icon: Grid3X3 },
    ],
  },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [expandedSections, setExpandedSections] = useState<string[]>(["OVERVIEW"])
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => (prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]))
  }

  const toggleItem = (href: string) => {
    setExpandedItems((prev) => (prev.includes(href) ? prev.filter((s) => s !== href) : [...prev, href]))
  }

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#0f1419" }}>
      {/* Sidebar */}
      <Suspense fallback={<div>Loading...</div>}>
        <div className="w-64 flex flex-col" style={{ backgroundColor: "#1a1f2e" }}>
          {/* Header */}
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">DX</span>
              </div>
              <div>
                <span className="text-white font-semibold">DezerX</span>
                <span className="text-blue-400 ml-1">Admin</span>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search... (Ctrl+K)"
                className="pl-10 text-white placeholder:text-gray-500"
                style={{ backgroundColor: "#0f1419", borderColor: "#374151" }}
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto px-4 pb-4">
            {sidebarSections.map((section) => (
              <div key={section.title} className="mb-6">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex items-center justify-between w-full text-left text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 hover:text-white transition-colors"
                >
                  {section.title}
                  {expandedSections.includes(section.title) ? (
                    <ChevronDown className="w-3 h-3" />
                  ) : (
                    <ChevronRight className="w-3 h-3" />
                  )}
                </button>

                {expandedSections.includes(section.title) && (
                  <div className="space-y-1">
                    {section.items.map((item) => {
                      const Icon = item.icon
                      const isActive = pathname === item.href
                      const isExpanded = expandedItems.includes(item.href)

                      return (
                        <div key={item.href}>
                          <div className="flex items-center">
                            <Link
                              href={item.href}
                              className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors flex-1 ${
                                isActive
                                  ? "bg-blue-600 text-white"
                                  : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                              <span>{item.label}</span>
                            </Link>
                            {item.hasSubmenu && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => toggleItem(item.href)}
                                className="p-1 h-auto text-gray-400 hover:text-white"
                              >
                                {isExpanded ? (
                                  <ChevronDown className="w-3 h-3" />
                                ) : (
                                  <ChevronRight className="w-3 h-3" />
                                )}
                              </Button>
                            )}
                          </div>

                          {item.hasSubmenu && isExpanded && (
                            <div className="ml-7 mt-1 space-y-1">
                              <Link
                                href="/admin/virtfusion/overview"
                                className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                                  pathname === "/admin/virtfusion/overview"
                                    ? "bg-blue-600 text-white"
                                    : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                                }`}
                              >
                                Overview
                              </Link>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">DX</span>
                </div>
                <span className="text-white text-sm font-medium">9988</span>
              </div>
            </div>
            <div className="text-xs text-gray-400 mb-3">$9988.00 USD credit</div>
            <Button
              variant="ghost"
              className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-900/20"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </Suspense>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div
          className="h-16 border-b border-gray-700 flex items-center justify-between px-6"
          style={{ backgroundColor: "#1a1f2e" }}
        >
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Grid3X3 className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search... (Ctrl+K)"
                className="pl-10 w-80 text-white placeholder:text-gray-500"
                style={{ backgroundColor: "#0f1419", borderColor: "#374151" }}
              />
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="text-white">
                <div className="text-sm font-medium">anthonyjs</div>
                <div className="text-xs text-gray-400">2138 credits</div>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-auto" style={{ backgroundColor: "#0f1419" }}>
          {children}
        </div>
      </div>
    </div>
  )
}
