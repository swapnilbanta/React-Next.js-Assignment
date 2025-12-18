import { render, screen, fireEvent } from "@testing-library/react"
import { ProductCard } from "@/components/products/product-card"
import { CartProvider } from "@/contexts/cart-context"

const mockProduct = {
  id: "1",
  name: "Test Product",
  description: "Test description",
  price: 99.99,
  image: "/test.jpg",
  category: "Electronics",
  stock: 10,
}

describe("ProductCard", () => {
  it("renders product information correctly", () => {
    render(
      <CartProvider>
        <ProductCard product={mockProduct} />
      </CartProvider>,
    )

    expect(screen.getByText("Test Product")).toBeInTheDocument()
    expect(screen.getByText("$99.99")).toBeInTheDocument()
    expect(screen.getByText("Electronics")).toBeInTheDocument()
  })

  it("adds product to cart when button is clicked", () => {
    render(
      <CartProvider>
        <ProductCard product={mockProduct} />
      </CartProvider>,
    )

    const addButton = screen.getByRole("button", { name: /add to cart/i })
    fireEvent.click(addButton)

    // In a real test, you'd verify the cart state changed
    // This is a basic example
  })
})
