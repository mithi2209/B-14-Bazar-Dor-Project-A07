
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { IProductData } from "@/app/types/product";


const ProductBreadCrumb = (product:IProductData) => {
    return (
        <div>
            {/* Breadcrumb */}
          <div className="mb-5 flex flex-wrap items-center gap-2 text-base lg:text-lg font-medium text-gray-600 pt-6 pb-3">
            <Link href="/" className="hover:text-green-700 ">হোম</Link>

            <FaChevronRight className="text-[10px] text-green-700" />

           <Link  href={`/category/${product.category}`} 
            className="hover:text-green-700">
                {product.categoryNameBn}
            </Link>

            <FaChevronRight className="text-[10px] text-green-700" />

            <span  className="text-green-700">{product.nameBn}</span>
          </div>

        </div>
    );
};

export default ProductBreadCrumb;