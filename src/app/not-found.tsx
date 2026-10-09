import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="bg-[#F0F5EF] min-h-screen flex items-center justify-center px-4 py-16 ">
      <div className="max-w-lg w-full text-center">
        {/* Illustration / Emoji */}
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 bg-green-600/10 blur-3xl rounded-full" />
          <div className="relative text-[7rem] sm:text-[9rem] leading-none select-none">
            🛒
          </div>
        </div>

        {/* Big 404 */}
        <h1 className="text-7xl sm:text-8xl font-black text-green-600 tracking-tight">
          ৪০৪
        </h1>

        {/* Heading */}
        <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">
          পেজটি খুঁজে পাওয়া যায়নি
        </h2>

       
        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
          >
            <span>🏠</span>
            <span>হোম পেজে ফিরে যান</span>
          </Link>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all"
          >
            <span>📦</span>
            <span>সব পণ্য দেখুন</span>
          </Link>
        </div>

        {/* Divider + Footer hint */}
        <div className="mt-12 flex items-center justify-center gap-3 text-xs text-gray-400">
          <span className="h-px w-8 bg-gray-300" />
          <span>🛒 বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে</span>
          <span className="h-px w-8 bg-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
