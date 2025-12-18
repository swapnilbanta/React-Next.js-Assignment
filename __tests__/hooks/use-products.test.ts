import { renderHook, waitFor } from "@testing-library/react"
import { useProducts } from "@/hooks/use-products"
import jest from "jest" // Declare the jest variable

// Mock fetch
global.fetch = jest.fn()

describe("useProducts", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("fetches products successfully", async () => {
    const mockProducts = [
      { id: "1", name: "Product 1", price: 100 },
      { id: "2", name: "Product 2", price: 200 },
    ]
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => ({ success: true, data: mockProducts }),
    })

    const { result } = renderHook(() => useProducts())

    expect(result.current.isLoading).toBe(true)

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })

    expect(result.current.products).toEqual(mockProducts)
    expect(result.current.error).toBeNull()
  })

  it("handles fetch errors", async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => ({ success: false, error: "Failed to fetch" }),
    })

    const { result } = renderHook(() => useProducts())

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })

    expect(result.current.error).toBe("Failed to fetch")
    expect(result.current.products).toEqual([])
  })
})
