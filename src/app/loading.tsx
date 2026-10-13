

const GlobalLoading = () => {

  
  return (
  

     <div className="min-h-screen bg-[#f3f6f4] font-sans animate-pulse">
      
      {/* 1. Navbar Skeleton */}
      <nav className="bg-white border-b border-gray-100 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="w-28 h-8 bg-gray-200 rounded"></div>
            <div className="hidden lg:flex gap-6">
              <div className="w-16 h-4 bg-gray-200 rounded"></div>
              <div className="w-16 h-4 bg-gray-200 rounded"></div>
              <div className="w-16 h-4 bg-gray-200 rounded"></div>
              <div className="w-16 h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:block w-40 h-9 bg-gray-200 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        
        {/* 2. Hero Section Skeleton */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-10 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 space-y-4 mb-8 md:mb-0">
            <div className="h-4 bg-gray-200 rounded w-24"></div>
            <div className="h-8 bg-gray-200 rounded w-3/4 md:w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            <div className="h-12 bg-gray-200 rounded-lg w-32 mt-6"></div>
          </div>
          <div className="w-48 h-48 bg-gray-200 rounded-full"></div>
        </div>

        {/* 3. Product Sections Skeletons */}
        {[...Array(2)].map((_, sectionIndex) => (
          <div key={sectionIndex} className="mb-12">
            {/* Section Title */}
            <div className="h-6 bg-gray-200 rounded w-48 mb-6"></div>
            
            {/* Grid of Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(6)].map((_, cardIndex) => (
                <div key={cardIndex} className="bg-white rounded-xl p-4 flex gap-4 items-center shadow-sm border border-gray-100">
                  {/* Image Placeholder */}
                  <div className="w-20 h-20 bg-gray-200 rounded-lg shrink-0"></div>
                  
                  {/* Text Details */}
                  <div className="flex-1 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    
                    {/* Price row */}
                    <div className="flex items-center gap-2 pt-1">
                      <div className="h-4 bg-gray-200 rounded w-12"></div>
                      <div className="h-3 bg-gray-200 rounded w-8"></div>
                      <div className="h-6 w-6 bg-gray-200 rounded ml-auto"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* 4. Longer List Skeleton (Additional Category) */}
        <div className="mb-12">
          <div className="h-6 bg-gray-200 rounded w-32 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-4 flex gap-4 items-center shadow-sm border border-gray-100">
                <div className="w-20 h-20 bg-gray-200 rounded-lg shrink-0"></div>
                <div className="flex-1 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  <div className="flex items-center gap-2 pt-1">
                    <div className="h-4 bg-gray-200 rounded w-12"></div>
                    <div className="h-6 w-6 bg-gray-200 rounded ml-auto"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* 5. Footer Skeleton */}
      <footer className="bg-white border-t border-gray-100 py-6 mt-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="h-4 bg-gray-200 rounded w-64"></div>
          <div className="h-4 bg-gray-200 rounded w-48"></div>
        </div>
      </footer>

    </div>


  
  );
};

export default GlobalLoading;
