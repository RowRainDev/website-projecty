"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  FileText,
  Ticket,
  Store,
  CreditCard,
  Wallet,
  Sun,
  Bell,
  Globe,
  ChevronDown,
  User,
  LinkIcon,
  LogOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/invoices", label: "Invoices", icon: FileText },
  { href: "/tickets", label: "Tickets", icon: Ticket },
  { href: "/store", label: "Store", icon: Store },
  { href: "/credits", label: "Credits", icon: CreditCard },
  { href: "/wallet", label: "Wallet", icon: Wallet },
]

export function Navigation() {
  const pathname = usePathname()
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  // Don't show navigation on auth pages
  if (pathname.startsWith("/auth")) {
    return null
  }

  return (
    <nav style={{ backgroundColor: "#141414" }} className="border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-orange-500 text-xl">🥭</div>
            <span className="text-xl font-bold text-white">MangooHost</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-white border-b-2" : "text-gray-300 hover:text-white"
                  }`}
                  style={isActive ? { borderBottomColor: "#04946c" } : {}}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Right side icons and user menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
              <Sun className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
              <Globe className="w-4 h-4" />
            </Button>

            {/* User Dropdown */}
            <DropdownMenu open={userMenuOpen} onOpenChange={setUserMenuOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2 text-cyan-400">
                  <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                    C
                  </div>
                  <span>chedix</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-gray-800 border-gray-700">
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Your Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/affiliates" className="flex items-center space-x-2">
                    <LinkIcon className="w-4 h-4" />
                    <span>Affiliates</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-700" />
                <DropdownMenuItem asChild>
                  <Link href="/auth/signin" className="flex items-center space-x-2 text-red-400">
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}
