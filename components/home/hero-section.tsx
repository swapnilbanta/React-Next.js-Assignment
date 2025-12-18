import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative rounded-lg overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="relative z-10 px-8 py-20 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Discover Amazing Products</h1>
          <p className="text-lg md:text-xl mb-8 text-blue-50">
            Shop the latest electronics, accessories, and more at unbeatable prices
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="#products">Shop Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
              asChild
            >
              <Link href="#featured">View Featured</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
