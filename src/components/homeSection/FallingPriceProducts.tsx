
import { TiArrowSortedDown } from "react-icons/ti";
import { IProductData } from '@/app/types/product';
import ProductsCard from '../products/ProductsCard';

interface Props {
  products: IProductData[];
}

const FallingPriceProducts = ({ products }:Props) => {

   const fallingProducts = products.filter((product) =>
        product.change?.dir === "up" &&
        Number(product.change.pct) > 0
    )
    .sort(
      (a, b) =>
        Number(a.change.pct) - Number(b.change.pct)
    )
    .slice(0, 6);

  return (
    <div className=" container mx-auto">
                
      <div className="flex justify-center items-center lg:justify-start gap-1 pb-2 pt-10">
        <TiArrowSortedDown 
            className="text-green-700 text-2xl lg:text-3xl font-semibold" />
          <h2 className="text-2xl md:text-[26px] lg:text-3xl font-semibold">আজ দাম কমেছে</h2>
      </div>




        {fallingProducts.length >0 ? (

            <div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  px-4 md:px-5 lg:px-0 py-3 md:py-6 lg:py-5 container mx-auto">

                  { fallingProducts.map((product) => (
                    
                      <div key={product.id}>
                          <ProductsCard product={product} />
                            
                        </div>))
                  }
              </div>
                    )
                    :
                    (
                    <p className="rounded-xl bg-white p-5  text-gray-500 text-center text-3xl">
                        বর্তমানে দাম কমেছে এমন কোনো পণ্য নেই।
                    </p>
                    )

                }

      
    </div>
  );
};

export default FallingPriceProducts;
