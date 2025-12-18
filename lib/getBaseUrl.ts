export function getBaseUrl(): string {
  if (typeof window !== "undefined") {
    // Client-side, use relative URL
    return "";
  }

  // Server-side

  // If Vercel deployment, use VERCEL_URL (set by Vercel)
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // If you set NEXT_PUBLIC_BASE_URL manually in .env.local or .env.production
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }

  // Fallback to localhost
  return "http://localhost:3000";
}
