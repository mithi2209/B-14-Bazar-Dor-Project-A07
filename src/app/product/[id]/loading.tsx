

const ProductDetailSkeleton = () => {
    return (
        
     <div className="bg-base-200 min-h-screen p-4 md:p-8 font-sans">
      <div className="container mx-auto space-y-6">

        {/* Breadcrumb Skeleton */}
        <div className="flex items-center space-x-2">
          <div className="skeleton h-3 w-12"></div>
          <div className="skeleton h-3 w-2"></div>
          <div className="skeleton h-3 w-24"></div>
        </div>

        {/* Header Card Skeleton */}
        <div className="card bg-base-100 shadow-sm border border-base-200">
          <div className="card-body p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            
            {/* Left Side: Image & Text */}
            <div className="flex items-center gap-5 w-full md:w-auto">
              {/* Image Placeholder */}
              <div className="skeleton w-20 h-20 rounded-full shrink-0"></div>
              
              {/* Title & Subtitle */}
              <div className="space-y-3 flex-1 w-full">
                <div className="skeleton h-6 w-3/4 md:w-48"></div>
                <div className="skeleton h-4 w-1/2 md:w-32"></div>
                <div className="skeleton h-3 w-full md:w-56"></div>
              </div>
            </div>

            {/* Right Side: Statistics Box */}
            <div className="bg-base-200/50 border border-base-200 rounded-lg p-4 w-full md:w-48 flex flex-col items-center justify-center space-y-4 shrink-0">
              <div className="skeleton h-3 w-20"></div>
              <div className="skeleton h-8 w-12"></div>
              <div className="skeleton h-3 w-16"></div>
              <div className="skeleton h-5 w-14 rounded-full mt-2"></div>
            </div>
          </div>
        </div>

        {/* Stats Section Skeleton */}
        <div className="card bg-base-100 shadow-sm border border-base-200">
          <div className="card-body p-6">
            {/* Section Title */}
            <div className="skeleton h-4 w-32 mb-6"></div>
            
            {/* Grid of 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="border border-base-200 rounded-lg p-4 space-y-3">
                  <div className="skeleton h-3 w-20"></div>
                  <div className="flex items-center gap-3">
                    <div className="skeleton w-8 h-8 rounded-full shrink-0"></div>
                    <div className="skeleton h-6 w-16"></div>
                  </div>
                  <div className="skeleton h-3 w-28"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Table Section Skeleton */}
        <div className="card bg-base-100 shadow-sm border border-base-200">
          <div className="card-body p-6 overflow-x-auto">
            {/* Table Title */}
            <div className="skeleton h-4 w-48 mb-6"></div>

            {/* Responsive Table Wrapper */}
            <div className="min-w-[600px] w-full">
              {/* Table Header */}
              <div className="grid grid-cols-5 gap-4 pb-3 border-b border-base-200 mb-4">
                <div className="skeleton h-3 w-16"></div>
                <div className="skeleton h-3 w-16"></div>
                <div className="skeleton h-3 w-16"></div>
                <div className="skeleton h-3 w-16"></div>
                <div className="skeleton h-3 w-16"></div>
              </div>

              {/* Table Rows */}
              <div className="space-y-0">
                {[...Array(10)].map((_, index) => (
                  <div 
                    key={index} 
                    className="grid grid-cols-5 gap-4 py-4 border-b border-base-200/50 items-center last:border-0"
                  >
                    <div className="skeleton h-3 w-20"></div>
                    <div className="skeleton h-3 w-24"></div>
                    <div className="skeleton h-3 w-12"></div>
                    <div className="skeleton h-3 w-12"></div>
                    <div className="skeleton h-3 w-16"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
      
    );
};

export default ProductDetailSkeleton ;