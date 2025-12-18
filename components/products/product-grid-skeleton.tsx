import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={i} className="overflow-hidden">
          <CardHeader className="p-0">
            <div className="aspect-square bg-muted animate-pulse" />
          </CardHeader>
          <CardContent className="p-4">
            <div className="h-4 bg-muted rounded w-20 mb-2 animate-pulse" />
            <div className="h-6 bg-muted rounded w-full mb-2 animate-pulse" />
            <div className="h-4 bg-muted rounded w-full mb-1 animate-pulse" />
            <div className="h-4 bg-muted rounded w-2/3 mb-3 animate-pulse" />
            <div className="h-8 bg-muted rounded w-24 animate-pulse" />
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <div className="h-10 bg-muted rounded w-full animate-pulse" />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
