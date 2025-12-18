"use client"

import Link from "next/link"
import { ShoppingCart, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"
import { useCart } from "@/contexts/cart-context"

export function Header() {
  const { isAuthenticated, user, logout } = useAuth()
  const { totalItems } = useCart()

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            ShopHub
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/#products" className="text-sm font-medium hover:text-primary transition-colors">
              Products
            </Link>
            {isAuthenticated && (
              <Link href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
                Dashboard
              </Link>
            )}
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild className="relative">
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            </Button>

            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <span className="text-sm hidden md:inline">{user?.name}</span>
                <Button variant="ghost" size="icon" onClick={logout}>
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <Button variant="ghost" size="icon" asChild>
                <Link href="/login">
                  <User className="h-5 w-5" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
