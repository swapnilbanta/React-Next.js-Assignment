"use client"

import Image from "next/image"
import { useState } from "react"
import { ShoppingCart, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import type { Product } from "@/types"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  console.log(product)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
  }

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity((q) => q + 1)
    }
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((q) => q - 1)
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">

      <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
      <Image
  src={product.image || "/placeholder.svg"}
  alt={product.name || "Product image"}
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
  priority
/>

      </div>

      <div className="flex flex-col">
        <div className="mb-2">
          <span className="text-sm text-muted-foreground">{product.category}</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

<div className="text-4xl font-bold mb-6">
  ${product.price?.toFixed(2) ?? "0.00"}
</div>


        <div className="mb-6">
          <div className="text-sm text-muted-foreground mb-2">Quantity</div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" onClick={decrementQuantity} disabled={quantity <= 1}>
              <Minus className="h-4 w-4" />
            </Button>
            <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
            <Button variant="outline" size="icon" onClick={incrementQuantity} disabled={quantity >= product.stock}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-sm text-muted-foreground mt-2">{product.stock} items in stock</div>
        </div>

        {/* <Button size="lg" onClick={handleAddToCart} className="mb-4">
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button> */}

        <div className="border-t pt-6 mt-6 space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Free Shipping</span>
            <span className="font-medium">On orders over $50</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Returns</span>
            <span className="font-medium">30-day return policy</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Warranty</span>
            <span className="font-medium">1-year manufacturer warranty</span>
          </div>
        </div>
      </div>
    </div>
  )
}
