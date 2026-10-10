
import { TbMinus } from "react-icons/tb";
import { formatBangla } from "@/lib/formatBangla";
import { IProductData } from "@/app/types/product";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";


const ProductDetailHeader = (product:IProductData) => {

      const { dir } = product.change;

    

    const priceDifference = product.today - product.yesterday;



      const pctStyles =
        dir === "down"
        ? " text-green-700"
        :  dir === "up"
        ? " text-red-600"
        : "text-gray-600";


    return (
        <div>
          {/* Product Card */}
          <div className="card rounded-2xl border border-[#e1e9e1] bg-[#fbfdfb] shadow-none">
            <div className="flex flex-col gap-3 p-3 sm:flex-row sm:items-center sm:justify-between sm:p-4 md:p-2">
              {/* Product Details */}
              <div className="flex justify-center items-center gap-3 md:gap-4">

                <div className="flex items-center justify-center rounded-xl bg-[#f0f5f0] h-18 w-18 lg:w-20 lg:h-20">
                    <span className="text-3xl md:text-4xl lg:text-5xl">
                          {product.image}
                    </span>
                </div>

                <div className="min-w-0">
                  <h1 className="lg:text-2xl font-bold leading-tight text-xl">
                    {product.nameBn}
                  </h1>

                  <p className="mt-1 text-xs md:text-sm lg:text-base text-gray-500">
                      প্রতি {product.unit === "kg" ? "কেজি" : product.unit}
                            {" · "}
                            {product.categoryNameBn}
                  </p>

                  <p className="mt-2  lg:text-base leading-relaxed text-gray-700 text-xs md:text-sm  font-medium">
                     গতকালের তুলনায় আজ দাম{" "}
                        <span className="font-semibold  ">
                            {priceDifference > 0 ? "বেড়েছে" : priceDifference < 0 ? "কমেছে" : "অপরিবর্তিত"}
                        </span>
                        {" : "}
                         {formatBangla(Math.abs(priceDifference))} টাকা
                  </p>
                </div>
              </div>

              {/* Price Box */}
              <div className="flex items-center lg:justify-between lg:gap-1 rounded-2xl bg-[#f0f5f0] lg:px-5 lg:py-3  flex-col  justify-center gap-1 px-5 py-3">
                <p className="text-sm lg:text-base text-gray-500">আজকের দাম</p>

                <p className="text-xl lg:text-2xl font-bold leading-tight">
                   {formatBangla(product.today)}
                </p>

                <p className="text-sm lg:text-base text-gray-500">
                  টাকা / কেজি
                </p>

                <p className={`flex items-center gap-1 text-sm lg:text-base font-semibold 
                    ${pctStyles}`}>

                    { dir === "up" && product.change.pct > 0 ? (
                        <TiArrowSortedUp className="text-lg" />
                    ) : dir === "down" && product.change.pct < 0 ? (
                        <TiArrowSortedDown className="text-lg" />
                    ) : (
                        <TbMinus className="text-lg" />
                    )}

                    <span>{formatBangla(product.change.pct)} %</span>

                </p>
                
              </div>
            </div>
          </div>
        </div>
    );
};

export default ProductDetailHeader;