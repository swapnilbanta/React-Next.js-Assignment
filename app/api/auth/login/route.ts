import { NextResponse } from "next/server"

// Mock user database
const users = [
  { id: "1", email: "swapnil@example.com", password: "password123", name: "Demo User" },
  { id: "2", email: "rajesh@example.com", password: "admin123", name: "Admin User" },
]

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Find user
    const user = users.find((u) => u.email === email && u.password === password)

    if (!user) {
      return NextResponse.json({ success: false, error: "Invalid credentials" }, { status: 401 })
    }

    // In a real app, you'd create a session/JWT token here
    return NextResponse.json({
      success: true,
      data: {
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
        token: "mock-jwt-token-" + user.id,
      },
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Login failed" }, { status: 500 })
  }
}
