

import Link from "next/link";
import { ICategory } from './CategoryCardPage';
import { FaChevronRight } from "react-icons/fa";
import { formatBanglaWords } from "../../lib/formatBanglaWords.ts"




 interface CategoryProps {
    category: ICategory;
}

const CategoryBreadCrumb = ({category}:CategoryProps) => {

  

    return (
        <div className="mb-5 flex flex-wrap items-center gap-2 text-base lg:text-lg font-medium text-gray-600 pt-6 pb-3">

            <Link href="/" className="hover:text-green-700 ">হোম</Link>

            <FaChevronRight className="text-[10px] text-green-700" />

           <span   
            className="hover:text-green-700">
                {formatBanglaWords(category.slug)}
                
            </span>

            <FaChevronRight className="text-[10px] text-green-700" />

            <span  className="text-green-700">{category.nameBn}</span>
          </div>

    );
};

export default CategoryBreadCrumb;