import Link from "next/link";

const ProductNotFoundPage = () => {

  return (

    <div className="bg-[#F0F5EF] min-h-screen w-full text-center py-30 lg:py-80  mx-auto px-4 lg:px-0  ">
      {/* Icon */}
      <div className="text-6xl lg:text-[6rem] leading-none select-none mb-4">
        🔍
      </div>

      {/* Heading */}
      <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
        পণ্যটির তথ্য পাওয়া যায়নি
      </h1>

      {/* Message */}
      <p className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed">
        এই পণ্য তথ্যটি পাওয়া যায়নি, অথবা লিংকটি সঠিক নয়। অনুগ্রহ করে সকল পণ্যর
        পেজে ফিরে যান।
      </p>

      {/* CTA Button */}
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center gap-2
                      bg-green-700 hover:bg-green-600 active:bg-green-800
                      text-white font-semibold px-6 py-3 rounded-lg
                      shadow-md hover:shadow-lg transition-all"
      >
        🏠 সব পণ্য
      </Link>
    </div>
  );
};

export default ProductNotFoundPage;
