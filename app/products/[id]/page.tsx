import { Suspense } from "react"
import { notFound } from "next/navigation"
import { ProductDetail } from "@/components/products/product-detail"
import { getProduct } from "@/services/product-service"



import type { Metadata } from "next"


type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params

  try {
    const product = await getProduct(id)

    return {
      title: product.name,
      description: product.description,
      openGraph: {
        title: product.name,
        description: product.description,
        images: [product.image],
        type: "website",
      },
    }
  } catch (error) {
    return {
      title: "Product Not Found",
    }
  }
}

// export default async function ProductPage({ params }: Props) {
//   const { id } = await params

//   try {
//     const products = await getProduct(id) // API returns array
//              // extract single product

//     if (!products) {
//       notFound()
//     }

//     return (
//       <div className="container mx-auto px-4 py-8">
//         <Suspense fallback={<div>Loading...</div>}>
//           <ProductDetail product={products} />
//         </Suspense>
//       </div>
//     )
//   } catch {
//     notFound()
//   }
// }


export default async function ProductPage({ params }: Props) {
  const { id } = await params

  try {
    const products = await getProduct(id) // array of products
    const product = products[0]            // extract single product

    if (!product) {
      notFound()
    }

    return (
      <div className="container mx-auto px-4 py-8">
        <Suspense fallback={<div>Loading...</div>}>
          <ProductDetail product={product} />
        </Suspense>
      </div>
    )
  } catch {
    notFound()
  }
}

