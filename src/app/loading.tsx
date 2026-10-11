

const GlobalLoading = () => {
  return (
    <div className="py-40 lg:py-100 flex flex-col justify-center items-center">
  
      {/* Loading text */}
      <p className="text-green-600 text-2xl lg:text-4xl text-center font-semibold mb-4 animate-pulse">
        Loading…
      </p>

      {/* spinner */}
      <div className="text-center ">
        <span className="loading text-2xl text-green-700 loading-ball loading-md"></span>
        <span className="loading text-3xl text-green-700 loading-ball loading-lg"></span>
        <span className="loading text-4xl text-green-700 loading-ball  loading-xl"></span>
      </div>

    
    </div>

  );
};

export default GlobalLoading;
