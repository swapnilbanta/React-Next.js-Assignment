export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  stock: number
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}