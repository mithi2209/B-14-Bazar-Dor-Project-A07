import AllProducts from "@/components/homeSection/AllProducts";
import BannerPage from "@/components/homeSection/BannerPage";
import FallingPriceProducts from "@/components/homeSection/FallingPriceProducts";


export default function Home() {
  return (
    <div className="bg-[#F0F5EF]">

      <BannerPage></BannerPage>
      <FallingPriceProducts></FallingPriceProducts>
      <AllProducts></AllProducts>

    </div>
  );
}
