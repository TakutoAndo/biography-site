export function SkillCardSkeleton() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="animate-pulse">
        <div className="w-8 h-8 bg-gray-200 rounded mb-4"></div>
        <div className="h-6 bg-gray-200 rounded mb-2"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  );
} 
