import { getBaseUrl } from "@/lib/getBaseUrl"
import type { Product, ApiResponse } from "@/types"

export async function getProducts(category?: string): Promise<Product[]> {
  const baseUrl = getBaseUrl()
  
  const url = category && category !== "all"
    ? `${baseUrl}/api/products?category=${category}`
    : `${baseUrl}/api/products`

  const response = await fetch(url, {
    next: { revalidate: 60 },
  })

  if (!response.ok) {
    throw new Error("Failed to fetch products")
  }

  const result: ApiResponse<Product[]> = await response.json()

  if (!result.success || !result.data) {
    throw new Error(result.error || "Failed to fetch products")
  }

  return result.data
}

export async function getProduct(id: string): Promise<Product> {
  const baseUrl = getBaseUrl()

  const response = await fetch(`${baseUrl}/api/products/${id}`, {
    next: { revalidate: 60 },
  })

  if (!response.ok) {
    throw new Error("Failed to fetch product")
  }

  const result: ApiResponse<Product> = await response.json()

  if (!result.success || !result.data) {
    throw new Error(result.error || "Failed to fetch product")
  }

  return result.data
}