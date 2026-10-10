
import { notFound } from "next/navigation";
import AllProductsDataFetch from "@/lib/page";
import { IProductData } from "@/app/types/product";
import ProductDetailHeader from "@/components/product-detail/ProductDetailHeader";
import ProductPriceSummary from "@/components/product-detail/ProductPriceSummary";
import ProductBreadCrumb from "@/components/product-detail/ProductBreadCrumb";
import MarketPriceTable from "@/components/product-detail/MarketPriceTable";


interface IProductDetailDataProps {
  params: Promise<{
    id: number;
  }>;
}

const ProductDetailPage = async ({ params }: IProductDetailDataProps) => {
  
  const { id } = await params;

  const productData = await AllProductsDataFetch();

  const product = productData.find(
    (product: IProductData) => Number(product.id) === Number(id),
  );

  if (!product){
     notFound();
  }


  return (
    <div>
      {/* Heading */}
      <div className=" bg-[#f0f5f0] py-5 text-[#26332a] px-4 md:px-5 lg:px-0">
        <div className=" container mx-auto w-full  ">
          {/* Breadcrumb */}

          <ProductBreadCrumb {...product} />
          <ProductDetailHeader {...product}></ProductDetailHeader>
        
        </div>
      </div>

      {/* main part table */}
      <div className=" bg-[#f0f5f1] py-6 lg:py-16 lg:px-0 md:px-5 px-4">

        <div className="mx-auto container rounded-2xl border border-[#e5ece6] bg-white/80 lg:py-10 px-4 md:px-5 py-6 lg:px-7">
       
        <ProductPriceSummary {...product}></ProductPriceSummary>
        <MarketPriceTable {...product}></MarketPriceTable>
         
        </div>
      </div>


    </div>
  );
};

export default ProductDetailPage;
