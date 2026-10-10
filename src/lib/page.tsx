import CategoryNotFoundPage from "@/app/category/[slug]/not-found";
import { IProductData } from "@/app/types/product";



const AllProductsDataFetch = async() => {

   try{
        const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");

       
        const data = await res.json();
        return(data);
     }
     catch (error) {
        console.error("Product API error:", error);
        return [];
     }
    
};

export default AllProductsDataFetch;



export const AllCategoriesData = async() =>{

      try{
        const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories");


          
        const data = await res.json();
        return(data);
     }
     catch (error) {
        console.error("Product API error:", error);
        return [];
     }

};



export const  ProductsByCategoryFetch = async(

  slug: string
): Promise<IProductData[]>   =>{ 
   
      const response = await fetch(
         `https://openapi.programming-hero.com/api/bazardor/products?category=${slug}`
      );

  const data: IProductData[] = await response.json();

  return data;
}
