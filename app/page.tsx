import { Suspense } from "react"
import { ProductGrid } from "@/components/products/product-grid"
import { ProductGridSkeleton } from "@/components/products/product-grid-skeleton"
import { HeroSection } from "@/components/home/hero-section"

export const metadata = {
  title: "Home",
  description: "Browse our collection of amazing products",
}

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
        <Suspense fallback={<ProductGridSkeleton />}>
          <ProductGrid />
        </Suspense>
      </section>
    </div>
  )
}
