const ProductsSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-8">

      <div className="h-8 w-48 bg-gray-200 rounded mb-6 animate-pulse"></div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6">
        {[...Array(10)].map((_, i) => (
            <div key={i} className="flex flex-col gap-4 w-full">
                <div className="skeleton h-48 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        ))}
      </div>

    </div>
  );
};

export default ProductsSkeleton;
