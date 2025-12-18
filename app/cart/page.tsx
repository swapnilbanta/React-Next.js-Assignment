import { CartView } from "@/components/cart/cart-view"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Review your shopping cart and checkout",
}

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <CartView />
    </div>
  )
}
