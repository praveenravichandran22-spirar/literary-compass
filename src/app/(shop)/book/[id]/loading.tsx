import { Skeleton } from "@/components/ui/skeleton";

export default function BookLoading() {
  return (
    <div>
      {/* Breadcrumbs Skeleton */}
      <div className="flex items-center space-x-2">
        <Skeleton className="h-5 w-16" />
        <Skeleton className="h-5 w-5" />
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-5 w-5" />
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-5 w-5" />
        <Skeleton className="h-5 w-40" />
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* Left Column: Image Skeleton */}
        <div className="md:col-span-1">
          <Skeleton className="w-full aspect-[2/3] rounded-lg" />
        </div>

        {/* Right Column: Details Skeleton */}
        <div className="md:col-span-2 space-y-6">
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-8 w-1/4" />
          <Skeleton className="h-12 w-48" />

          <Skeleton className="h-px w-full" />

          <div className="space-y-4">
            <Skeleton className="h-8 w-1/4" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-5/6" />
          </div>

          <Skeleton className="h-px w-full" />

          <div className="space-y-4">
            <Skeleton className="h-8 w-1/4" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
          </div>
        </div>
      </div>

      {/* Recommendations Skeleton */}
      <div className="mt-12">
        <Skeleton className="h-8 w-1/4 mb-6" />
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 lg:gap-x-6">
          {Array.from({ length: 4 }).map((_, i) => (
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
