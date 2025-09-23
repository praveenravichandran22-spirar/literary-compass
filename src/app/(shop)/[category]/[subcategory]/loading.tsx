import { Skeleton } from "@/components/ui/skeleton";

export default function SubCategoryLoading() {
  return (
    <div className="space-y-12">
      {/* Breadcrumbs Skeleton */}
      <div className="flex items-center space-x-2">
        <Skeleton className="h-5 w-16" />
        <Skeleton className="h-5 w-5" />
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-5 w-5" />
        <Skeleton className="h-5 w-32" />
      </div>

      {/* Header Skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-10 w-1/2" />
        <Skeleton className="h-6 w-3/4" />
      </div>

      {/* Books Grid Skeleton */}
      <div>
        <Skeleton className="h-8 w-1/4 mb-6" />
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-6">
          {Array.from({ length: 5 }).map((_, i) => (
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
