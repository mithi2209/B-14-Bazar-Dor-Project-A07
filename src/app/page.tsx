import AllProducts from "@/components/homeSection/AllProducts";
import BannerPage from "@/components/homeSection/BannerPage";
import FallingPriceProducts from "@/components/homeSection/FallingPriceProducts";
import RisingPriceProducts from '../components/homeSection/RisingPriceProducts';
import AllProductsDataFetch from '@/lib/page';


export default async function Home() {

  const products = await AllProductsDataFetch();
  return (
    <div className="bg-[#F0F5EF]">

      <BannerPage></BannerPage>
      <RisingPriceProducts products={products}></RisingPriceProducts>
      <FallingPriceProducts products={products}></FallingPriceProducts>
      <AllProducts></AllProducts>

    </div>
  );
}
