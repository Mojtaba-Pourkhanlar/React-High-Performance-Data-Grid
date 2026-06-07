export const InfoSkeleton = () => (
  <div className="animate-pulse space-y-4 p-2">
    {[...Array(8)].map((_, i) => (
      <div key={i} className="flex justify-between">
        <div className="h-4 w-16 rounded bg-gray-100"></div>
        <div className="h-4 w-24 rounded bg-gray-100"></div>
      </div>
    ))}
  </div>
);

export const OrderBookSkeleton = () => (
  <div className="animate-pulse space-y-3">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="flex gap-1">
        {[...Array(6)].map((_, j) => (
          <div key={j} className="h-7 flex-1 rounded bg-gray-100"></div>
        ))}
      </div>
    ))}
  </div>
);
