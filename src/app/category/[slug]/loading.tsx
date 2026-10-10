




const CategoryLoadingSkeleton = () => {
  return (
    <section className="min-h-screen bg-[#F0F5EF] px-3 py-5 sm:px-6">
      <div className="px-4 md:px-5 lg:px-0 py-10 container mx-auto space-y-6 lg:space-y-10">
        <div className="h-24 animate-pulse rounded-2xl bg-white" />
        <div className="mt-3 h-24 animate-pulse rounded-2xl bg-white" />

        <div className="min-h-125 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mt-6 lg:mt-10">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse rounded-[2rem] border border-gray-100 bg-white p-4"
            >
              <div className="h-10 w-10 rounded-lg bg-gray-100" />
              <div className="mt-4 h-4 w-3/4 rounded bg-gray-100" />
              <div className="mt-3 h-5 w-1/2 rounded bg-gray-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryLoadingSkeleton;
