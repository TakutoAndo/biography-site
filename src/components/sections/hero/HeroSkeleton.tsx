export function HeroSkeleton() {
  return (
    <div className="text-center">
      <div className="animate-pulse">
        <div className="mx-auto h-8 md:h-12 w-56 md:w-80 bg-gray-200 rounded mb-4"></div>
        <div className="mx-auto h-4 md:h-5 w-48 md:w-64 bg-gray-200 rounded mb-6"></div>
        <div className="flex justify-center gap-5 mb-6">
          <div className="w-7 h-7 bg-gray-200 rounded-full"></div>
          <div className="w-7 h-7 bg-gray-200 rounded-full"></div>
        </div>
        <div className="flex justify-center gap-4">
          <div className="w-32 h-12 bg-gray-200 rounded-xl"></div>
          <div className="w-32 h-12 bg-gray-200 rounded-xl"></div>
          <div className="w-32 h-12 bg-gray-200 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
} 
