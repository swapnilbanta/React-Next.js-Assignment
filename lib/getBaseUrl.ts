
// export function getBaseUrl(): string {
//   if (typeof window !== "undefined") return ""
//   if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
//   return "http://localhost:3000"
// }




export function getBaseUrl(): string {
  // On client, use relative URL (empty string)
  if (typeof window !== "undefined") return "";

  // On server, first check VERCEL_URL (for deployment on Vercel)
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // Fallback to environment variable for local or other environments
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }

  // Default fallback
  return "http://localhost:3000";
}
