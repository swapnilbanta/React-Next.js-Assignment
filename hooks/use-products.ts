"use client"

import { useState, useEffect } from "react"
import type { Product } from "@/types"

interface UseProductsResult {
  products: Product[]
  isLoading: boolean
  error: string | null
}

export function useProducts(category?: string): UseProductsResult {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true)
        setError(null)

        const url = category && category !== "all" ? `/api/products?category=${category}` : "/api/products"

        const response = await fetch(url)
        const result = await response.json()

        if (!result.success) {
          throw new Error(result.error || "Failed to fetch products")
        }

        setProducts(result.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [category])

  return { products, isLoading, error }
}
