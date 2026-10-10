import { formatBangla } from "@/lib/formatBangla";
import { IProductData } from "@/app/types/product";


const ProductPriceSummary =(product:IProductData)=> {

    
  const marketNames = Array.isArray(product.markets)
    ? product.markets
    : [];

            const minPrice = Math.min(
            ...marketNames.map((market) => market.min)
            );

            const maxPrice = Math.max(
            ...marketNames.map((market) => market.max)
            );

            const averagePrice = Math.round(
            product.markets.reduce(
                (total, market) =>
                total + (market.min + market.max) / 2,
                0
            ) / product.markets.length
            );


    return (
        <div>

          {/* Summary */}
          <h2 className="mb-4 text-lg lg:text-2xl font-semibold text-gray-800">
            দামের সারসংক্ষেপ
          </h2>


             {/* card */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card rounded-2xl border border-[#e5ece6] bg-transparent shadow">
              <div className="card-body flex-row items-center justify-between p-3">
                <div>
                  <p className="text-sm lg:text-base text-gray-700">
                    সর্বনিম্ন দাম
                  </p>

                  <h3 className="mt-1 text-xl lg:text-2xl font-bold text-green-600">
                        {formatBangla(minPrice)}  <span className="text-base font-medium "> টাকা</span>
                  </h3>
                  <p className="text-sm lg:text-base text-gray-500">
                    সর্বনিম্ন প্রতি কেজির মূল্য
                  </p>
                </div>
              </div>
            </div>

            <div className="card rounded-2xl border border-[#e5ece6] bg-transparent shadow">
              <div className="card-body flex-row items-center justify-between p-3">
                <div>
                  <p className="text-sm lg:text-base text-gray-600">
                    সর্বোচ্চ দাম
                  </p>
                  <h3 className="mt-1 text-xl lg:text-2xl font-bold text-red-700 mr-1">
                    {formatBangla(maxPrice)}  <span className="text-base font-medium "> টাকা</span>
                  </h3>
                  <p className="text-sm lg:text-base text-gray-500">
                    সর্বোচ্চ প্রতি কেজির মূল্য
                  </p>
                </div>
              </div>
            </div>

            <div className="card rounded-2xl border border-[#e5ece6] bg-transparent shadow sm:col-span-2 lg:col-span-1">
              <div className="card-body flex-row items-center justify-between p-3">
                <div>
                  <p className="text-sm lg:text-base text-gray-600">গড় দাম</p>
                  <h3 className="mt-1 text-xl lg:text-2xl font-bold text-green-600">
                    {formatBangla(averagePrice)} <span className="text-base font-medium"> টাকা </span>
                  </h3>
                  <p className="text-sm lg:text-base text-gray-500">
                    প্রতি কেজির গড় মূল্য
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default ProductPriceSummary;