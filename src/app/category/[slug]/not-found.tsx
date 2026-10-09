import Link from "next/link";

const EmptyPage = () => {
  return (
    <div className="max-w-md w-full text-center">
      {/* Icon */}
      <div className="text-[6rem] leading-none select-none mb-4">🔍</div>

      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-900">
        ক্যাটাগরি পাওয়া যায়নি
      </h1>

      {/* Message */}
      <p className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed">
        এই ক্যাটাগরিতে এখন কোনো পণ্য নেই, অথবা লিংকটি সঠিক নয়। অনুগ্রহ করে হোম
        পেজে ফিরে যান।
      </p>

      {/* CTA Button */}
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center gap-2
                     bg-green-600 hover:bg-green-700 active:bg-green-800
                     text-white font-semibold px-6 py-3 rounded-lg
                     shadow-md hover:shadow-lg transition-all"
      >
        🏠 হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

export default EmptyPage;
