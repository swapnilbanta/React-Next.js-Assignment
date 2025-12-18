import { NextResponse } from "next/server"
import type { Product } from "@/types"

const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    description: "Premium noise-cancelling wireless headphones with 30-hour battery life",
    price: 299.99,
    image: "/wireless-headphones.png",
    category: "Electronics",
    stock: 50,
  },
  {
    id: "2",
    name: "Smart Watch",
    description: "Fitness tracking smartwatch with heart rate monitor and GPS",
    price: 399.99,
    image: "/smartwatch-lifestyle.png",
    category: "Electronics",
    stock: 30,
  },
  {
    id: "3",
    name: "Laptop Backpack",
    description: "Durable water-resistant backpack with padded laptop compartment",
    price: 79.99,
    image: "/laptop-backpack.png",
    category: "Accessories",
    stock: 100,
  },
  {
    id: "4",
    name: "Mechanical Keyboard",
    description: "RGB mechanical gaming keyboard with customizable switches",
    price: 149.99,
    image: "/mechanical-keyboard.png",
    category: "Electronics",
    stock: 45,
  },
  {
    id: "5",
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with precision tracking",
    price: 49.99,
    image: "/wireless-mouse.png",
    category: "Electronics",
    stock: 75,
  },
  {
    id: "6",
    name: "USB-C Hub",
    description: "7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader",
    price: 59.99,
    image: "/usb-c-hub.jpg",
    category: "Accessories",
    stock: 60,
  },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")

  const filteredProducts =
    category && category !== "all"
      ? products.filter((p) => p.category === category)
      : products

  return NextResponse.json({
    success: true,
    data: filteredProducts,
  })
}
