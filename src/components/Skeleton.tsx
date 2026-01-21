export const SkeletonCard = () => (
  <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm animate-pulse">
    <div className="flex justify-between mb-4">
      <div className="h-6 w-20 bg-gray-200 rounded"></div>
      <div className="h-4 w-12 bg-gray-100 rounded"></div>
    </div>
    <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
    <div className="space-y-2">
      <div className="h-4 bg-gray-100 rounded w-full"></div>
      <div className="h-4 bg-gray-100 rounded w-5/6"></div>
    </div>
  </div>
);
