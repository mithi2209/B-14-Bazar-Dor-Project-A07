import Image from "next/image";
import Link from "next/link";

import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import { TbMinus } from "react-icons/tb";
import { IProductDataProps } from "@/app/types/product";

interface ProductCardProps {
  product: IProductDataProps;
}

const ProductsCard = ({ product }: ProductCardProps) => {
  const { dir } = product.change;
  // Set badge styles according to the trend direction
  const pctStyles =
    dir === "down"
      ? "bg-[#f5f0f5] text-green-700"
      : dir === "up"
      ? "bg-red-50 text-red-600"
      : "bg-gray-100 text-gray-600";

  return (
    <Link href={`/product/${product.id}`}>
      <div className="card w-full bg-white rounded-[2rem] shadow-md border-2 border-gray-200 py-8 px-6  hover:border-green-600">
        {/* Header: Icon and Title */}
        <div className="flex items-center gap-4 mb-5">
          {/* Icon Box */}
          <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl shadow-sm border border-gray-100">
            {product.image}
          </div>

          {/* Text Info */}
          <div className="flex flex-col">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
              {product.nameBn}
            </h2>
            <p className="text-[13px] lg:text-lg text-gray-500 font-medium">
              প্রতি কেজি
            </p>
          </div>
        </div>

        {/* Body: Label and Price/Trend */}
        <div className="flex flex-col">
          <span className="text-gray-600 text-[14px] lg:text-lg font-medium mb-1">
            আজকের দাম
          </span>

          <div className="flex justify-between items-center">
            {/* Price */}
            <div className="text-[22px] lg:text-2xl font-bold text-gray-900">
              {product.today}
            </div>

            {/* pct Badge */}
            <button
              className={`inline-flex items-center justify-center rounded-full px-2.5 py-2 gap-1 font-semibold text-xs lg:text-base ${pctStyles}`}
            >
              {dir === "up" && product.change.pct > 0 ? (
                <TiArrowSortedUp className="text-lg" />
              ) : dir === "down" && product.change.pct < 0 ? (
                <TiArrowSortedDown className="text-lg" />
              ) : (
                <TbMinus className="text-lg" />
              )}

              <span>{product.change.pct} %</span>

              {/* Upward Arrow SVG */}
              {/* <TiArrowSortedUp className="text-lg"></TiArrowSortedUp>
              {product.change.pct} % */}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductsCard;
