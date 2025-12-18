"use client"

import { useCart } from "@/contexts/cart-context"
import { CartItem } from "./cart-item"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CartView() {
  const { items, totalPrice = 0, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">Your cart is empty</p>
        <Button asChild>
          <Link href="/">Continue Shopping</Link>
        </Button>
      </div>
    )
  }

  // Calculate totals with proper fallbacks
  const subtotal = totalPrice || 0
  const tax = subtotal * 0.1
  const total = subtotal + tax

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-4">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="lg:col-span-1">
        <div className="border rounded-lg p-6 sticky top-4">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span className="font-medium">Free</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tax</span>
              <span className="font-medium">${tax.toFixed(2)}</span>
            </div>
            <div className="border-t pt-3 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <Button className="w-full mb-3" size="lg">
            Proceed to Checkout
          </Button>
          <Button variant="outline" className="w-full bg-transparent" onClick={clearCart}>
            Clear Cart
          </Button>
        </div>
      </div>
    </div>
  )
}