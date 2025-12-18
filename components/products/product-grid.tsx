import { getProducts } from "@/services/product-service"
import { ProductCard } from "./product-card"

export async function ProductGrid() {
  try {
    const products = await getProducts()

    if (products.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No products found.</p>
        </div>
      )
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    )
  } catch (error) {
    return (
      <div className="text-center py-12">
        <p className="text-destructive">Failed to load products. Please try again later.</p>
      </div>
    )
  }
}
