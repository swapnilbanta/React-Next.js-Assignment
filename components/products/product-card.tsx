"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { useCart } from "@/contexts/cart-context"
import type { Product } from "@/types"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart(product)
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/products/${product.id}`}>
        <CardHeader className="p-0">
          <div className="relative aspect-square bg-muted">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
          <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{product.description}</p>
          <div className="text-2xl font-bold">${product.price.toFixed(2)}</div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button className="w-full" onClick={handleAddToCart}>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </CardFooter>
      </Link>
    </Card>
  )
}