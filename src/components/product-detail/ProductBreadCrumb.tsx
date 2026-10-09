

import { FaChevronRight } from "react-icons/fa";


const ProductBreadCrumb = ({product}) => {
    return (
        <div>
            {/* Breadcrumb */}
          <div className="mb-5 flex flex-wrap items-center gap-2 text-base text-gray-600">
            <span>হোম</span>
            <FaChevronRight className="text-[10px]" />
            <span>চাল</span>
            <FaChevronRight className="text-[10px]" />
            <span>বাটাম সাইজ চাল</span>
          </div>

        </div>
    );
};

export default ProductBreadCrumb;