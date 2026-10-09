
"use client";
import Image from "next/image";
import heroImg from "@/images/bazar-hero.png"


const BannerPage = () => {

      const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });


    return (
        <div className=" container mx-auto my-14 px-4 md:px-5 lg:px-0 ">

            <div className=" bg-white rounded-4xl shadow-lg  px-6 py-6 lg:py-10 lg:px-10 flex  flex-col-reverse items-center justify-between gap-6 md:flex-row border border-[#F0F5EF]">

                {/* Left Content */}
                <div className="w-full min-w-0 md:flex-1">
                <span className="inline-block rounded-full bg-[#dff2e5] px-3 py-1.5 text-xs font-medium text-green-700 sm:text-sm">
                    {date}
                </span>

                <h1 className="mt-4 text-2xl font-bold leading-snug text-[#202b23] sm:text-3xl md:text-3xl lg:text-4xl">
                    আজকের বাজারের দাম এক নজরে
                </h1>

                <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:mt-4 sm:text-base sm:leading-7">
                    চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
                    বাজারভিত্তিক বিস্তৃত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং দামের
                    পরিবর্তন এক জায়গায়।
                </p>

                <a
                    href="#all-products"
                    className="btn mt-5 min-h-10 h-10 border-0 bg-[#078b43] p-2 lg:p-5 text-sm text-white rounded-lg drop-shadow-sm hover:bg-green-500 sm:mt-7 sm:px-6"
                >
                    সব পণ্য দেখুন
                </a>
                </div>

                {/* right part */}

                <div className="flex w-full items-center justify-center md:w-[35%]">
                    
                    <Image
                    
                        className=""
                        width={400}
                        height={400}
                        src={heroImg}
                        alt="banner image">

                    </Image>
               
                </div>

            </div>
            
        </div>
    );
};

export default BannerPage;