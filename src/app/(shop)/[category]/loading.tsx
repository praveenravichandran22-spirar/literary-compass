import { Skeleton } from "@/components/ui/skeleton";

export default function CategoryLoading() {
  return (
    <div className="space-y-12">
      {/* Breadcrumbs Skeleton */}
      <div className="flex items-center space-x-2">
        <Skeleton className="h-5 w-16" />
        <Skeleton className="h-5 w-5" />
        <Skeleton className="h-5 w-24" />
      </div>

      {/* Header Skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-10 w-1/3" />
        <Skeleton className="h-6 w-2/3" />
      </div>
      
      {/* AI Suggestions Skeleton */}
      <Skeleton className="h-32 w-full" />

      {/* Subcategories Skeleton */}
      <div>
        <Skeleton className="h-8 w-1/4 mb-4" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-24 w-full" />
          ))}
        </div>
      </div>

      {/* Books Grid Skeleton */}
      <div>
        <Skeleton className="h-8 w-1/4 mb-6" />
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="aspect-[2/3] w-full" />
              <Skeleton className="h-5 w-4/5" />
              <Skeleton className="h-4 w-3/5" />
              <Skeleton className="h-5 w-1/4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
