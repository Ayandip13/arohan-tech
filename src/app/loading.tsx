export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar Skeleton */}
      <div className="h-20 border-b border-border/40 flex items-center justify-between px-8">
        <div className="w-40 h-8 bg-muted rounded animate-pulse" />
        <div className="hidden md:flex gap-6">
          <div className="w-16 h-4 bg-muted rounded animate-pulse" />
          <div className="w-16 h-4 bg-muted rounded animate-pulse" />
          <div className="w-16 h-4 bg-muted rounded animate-pulse" />
        </div>
      </div>
      
      {/* Hero Skeleton */}
      <div className="flex-1 flex flex-col items-center justify-center pt-32 pb-20 px-4">
        <div className="w-24 h-6 bg-muted/50 rounded-full animate-pulse mb-8" />
        <div className="w-3/4 max-w-3xl h-16 bg-muted rounded animate-pulse mb-4" />
        <div className="w-1/2 max-w-xl h-16 bg-muted rounded animate-pulse mb-8" />
        <div className="w-full max-w-2xl h-24 bg-muted/50 rounded animate-pulse" />
      </div>
    </div>
  );
}
