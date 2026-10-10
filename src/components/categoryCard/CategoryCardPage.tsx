

import { IProductData } from "@/app/types/product";
import { formatBangla } from "@/lib/formatBangla";
import { MdKeyboardArrowDown } from "react-icons/md";
import ProductsCard from "../products/ProductsCard";
import CategoryNotFoundPage from "@/app/category/[slug]/not-found";

interface ICategory {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

interface CategoryCardPageProps {
  category: ICategory;
  categoryData: IProductData[];
}

const CategoryCardPage = ({category , categoryData }:CategoryCardPageProps) => {

  if(categoryData.length === 0){
    return <CategoryNotFoundPage></CategoryNotFoundPage>
  }

  return (

    <section className="min-h-screen bg-[#eff3f0] py-4 md:py-8 lg:py-20">

      <div className="px-4 md:px-5 lg:px-0 py-10 container mx-auto space-y-6 lg:space-y-10">

        {/* --- Header Card --- */}
        <div className="card bg-white  shadow-sm rounded-2xl p-4 md:p-6 border border-[#F0F5EF]">

          <div className="flex items-center gap-3">

            <div className=" flex flex-col items-center justify-center ">
                <span className="text-5xl">
                    {category.icon}
                </span>
              
            </div>
            <div>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                    {category.nameBn}
                </h1>
                <p className="text-xs md:text-sm lg:text-lg text-gray-500 mt-0.5 lg:mt-2" >
                    {formatBangla(categoryData.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
                </p>
            </div>
          </div>
        </div>

        {/* --- Sort Filter Bar --- */}
        <div className="card bg-white shadow-sm rounded-2xl p-3 md:p-4 lg:p-6  border border-[#F0F5EF] flex flex-row items-center justify-end gap-3">

          <span className="text-sm md:text-base lg:text-lg font-medium text-gray-600">সাজান</span>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn rounded-md btn-outline border-gray-300 text-gray-700 bg-white hover:bg-[#F0F5EF] hover:border-gray-400 hover:text-gray-600 gap-2 font-medium text-sm"
            >
              ডিফল্ট
              <MdKeyboardArrowDown size={16} />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32"
            >
              <li className="text-gray-700 font-medium">
                <a>ঢাকা</a>
              </li>
              <li className="text-gray-700 font-medium">
                <a>চট্টগ্রাম</a>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Section Title --- */}
        <div>
          <h2 className="text-sm md:text-lg lg:text-xl font-medium text-gray-600 mt-4 md:mt-10 lg:mt-16  ml-1">
            মোট {formatBangla(categoryData.length)}টি পণ্য ম্যানুয়াল হচ্ছে
          </h2>

          {/* --- Card Grid  --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mt-6 lg:mt-10">


                  { categoryData.map((product) => (
                    
                        <div key={product.id}>
                            <ProductsCard product={product} />
                           
                        </div>
                    ))
                }


          </div>

        </div>
      </div>
    </section>
  );
};

export default CategoryCardPage;
