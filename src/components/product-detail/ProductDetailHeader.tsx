import { formatBangla } from "@/lib/formatBangla";
import { TbMinus } from "react-icons/tb";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const ProductDetailHeader = ({product}) => {

     const { dir } = product.change;

    const priceDifference = product.today - product.yesterday;

      const pctStyles =
        dir === "down"
      ? "bg-[#f5f0f5] text-green-700"
      : dir === "up"
      ? "bg-red-50 text-red-600"
      : "bg-gray-100 text-gray-600";


    return (
        <div>
              {/* Product Card */}
          <div className="card rounded-2xl border border-[#e1e9e1] bg-[#fbfdfb] shadow-none">
            <div className="flex flex-col gap-3 p-3 sm:flex-row sm:items-center sm:justify-between sm:p-4 md:p-5">
              {/* Product Details */}
              <div className="flex  items-center gap-3">
                <div className="flex shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] h-16 w-16">
                    {product.image}
                </div>

                <div className="min-w-0">
                  <h1 className="lg:text-2xl font-bold leading-tight text-xl">
                    {product.nameBn}
                  </h1>

                  <p className="mt-1 text-xs lg:text-base text-gray-500">
                      প্রতি {product.unit === "kg" ? "কেজি" : product.unit}
                            {" · "}
                            {product.categoryNameBn}
                  </p>

                  <p className="mt-2  lg:text-base leading-relaxed text-gray-700 text-xs font-medium">
                     গতকালের তুলনায় আজ দাম{" "}
                        <span className="font-semibold">
                            {priceDifference > 0 ? "বেড়েছে" : priceDifference < 0 ? "কমেছে" : "অপরিবর্তিত"}
                        </span>
                        {" : "}
                        {formatBangla(Math.abs(priceDifference))} টাকা
                  </p>
                </div>
              </div>

              {/* Price Box */}
              <div className="flex items-center lg:justify-between lg:gap-1 rounded-2xl bg-[#f0f5f0] lg:px-7 lg:py-4  flex-col  justify-center gap-1 px-3 py-4">
                <p className="text-sm lg:text-base text-gray-500">আজকের দাম</p>

                <p className="text-xl lg:text-2xl font-bold leading-tight">
                   {formatBangla(product.today)}
                </p>

                <p className="text-sm lg:text-base text-gray-500">
                  টাকা / কেজি
                </p>

                <p className={`flex items-center gap-1 text-sm lg:text-base font-semibold text-red-500
                    ${pctStyles}`}>

                    {dir === "up" && product.change.pct > 0 ? (
                        <TiArrowSortedUp className="text-lg" />
                    ) : dir === "down" && product.change.pct < 0 ? (
                        <TiArrowSortedDown className="text-lg" />
                    ) : (
                        <TbMinus className="text-lg" />
                    )}

                    <span>{product.change.pct} %</span>

                </p>
                
              </div>
            </div>
          </div>
        </div>
    );
};

export default ProductDetailHeader;