import  { AllCategoriesData } from "@/lib/page";
import CategoryCardPage from "@/components/categoryCard/CategoryCardPage";
import { IProductData } from "@/app/types/product";
import { notFound } from "next/navigation";
import ProductByCategory from './page';
import { ProductsByCategoryFetch } from '../../../lib/page';


// Category type
interface ICategory {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

interface CategoryProps {
  params: Promise<{ slug: string }>;
}

type SortOption = "default" | "low" | "high";


const CategoriesProduct = async ({ params }: CategoryProps) => {
    
  const { slug } = await params;

    const categories:ICategory[] = await AllCategoriesData();

    const category = categories.find(
      (item) => item.slug === slug
    );

    if (!category) {
      notFound();
    }


    const categoryData = await ProductsByCategoryFetch(slug);

  // const allProducts:IProductData[] = await AllProductsDataFetch();

  // const productByCategory =  allProducts.filter(
  //   (product) => product?.category === category?.slug
  // );


  return (
    <div>

        <CategoryCardPage
          category={category} 

         categoryData={categoryData}

        ></CategoryCardPage>
      
    </div>
  );
};

export default CategoriesProduct;
