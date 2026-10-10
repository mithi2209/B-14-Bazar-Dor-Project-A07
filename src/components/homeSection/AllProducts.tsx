
import AllProductsDataFetch from "@/lib/page";
import { IProductData} from "@/app/types/product";
import ProductsCard from "../products/ProductsCard";



const AllProducts = async () => {
    
    const productData: IProductData[] = await AllProductsDataFetch()

    return (
        <div className="container mx-auto" id="all-products">

           <div className="text-center lg:text-left gap-1  ">
                
                <h2 className=" text-2xl lg:text-3xl font-semibold">সব পণ্য</h2>
                <p className="text-slate-500 font-medium text-sm md:text-base lg:text-lg mt-2 lg:mt-4">মোট ৩৩টি পণ্য দেখানো হচ্ছে</p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  px-4 md:px-5 lg:px-0 py-8 lg:py-10 container mx-auto">
                {  productData.map((product) => (
                    
                        <div key={product.id}>
                            <ProductsCard product={product} />
                           
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllProducts;