import { NextResponse } from "next/server"
import type { Product } from "@/types"

const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    description: "Premium noise-cancelling wireless headphones with 30-hour battery life",
    price: 299.99,
    image: "/placeholder.svg",
    category: "Electronics",
    stock: 50,
  },
  // ... other products
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")

  let filteredProducts = products

  if (category && category !== "all") {
    filteredProducts = products.filter((product) => product.category === category)
  }

  return NextResponse.json({
    success: true,
    data: filteredProducts,
  })
}