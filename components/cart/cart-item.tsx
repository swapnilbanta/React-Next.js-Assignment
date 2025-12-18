"use client"

import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import type { Product } from "@/types"

interface CartItemProps {
  item: Product & { quantity: number }
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart()

  return (
    <div className="flex gap-4 border rounded-lg p-4">
      <div className="relative h-24 w-24 flex-shrink-0 bg-muted rounded-md overflow-hidden">
        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" sizes="96px" />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold mb-1">{item.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
        <div className="font-bold">${item.price.toFixed(2)}</div>
      </div>

      <div className="flex flex-col items-end justify-between">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => removeFromCart(item.id)}
          className="text-destructive hover:text-destructive"
        >
          <Trash2 className="h-4 w-4" />
        </Button>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 bg-transparent"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="w-8 text-center font-medium">{item.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 bg-transparent"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  )
}
