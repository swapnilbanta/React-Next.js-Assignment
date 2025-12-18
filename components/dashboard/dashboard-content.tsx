"use client"

import { useAuth } from "@/contexts/auth-context"
import { useCart } from "@/contexts/cart-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingBag, ShoppingCart, User } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function DashboardContent() {
  const { user, isAuthenticated, isLoading } = useAuth()
  const { totalItems, totalPrice } = useCart()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, isLoading, router])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Profile Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>
            <span className="text-sm text-muted-foreground">Name:</span>
            <span className="ml-2 font-medium">{user?.name}</span>
          </div>
          <div>
            <span className="text-sm text-muted-foreground">Email:</span>
            <span className="ml-2 font-medium">{user?.email}</span>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              Shopping Cart
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Items in cart:</span>
                <span className="font-bold">{totalItems}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total value:</span>
                <span className="font-bold">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              Order History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">No orders yet. Start shopping to see your order history!</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
