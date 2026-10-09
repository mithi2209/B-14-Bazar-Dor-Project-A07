import Link from "next/link";


const ProductDetailPage = () => {
    return (
        <div>
              <main className="min-h-screen bg-[#f1f6f1] px-4 py-5 text-[#26352a] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Breadcrumb */}
        <nav className="mb-5 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-green-700">
            হোম
          </Link>
          <span>›</span>
          <Link href="/category/chal" className="hover:text-green-700">
            চাল
          </Link>
          <span>›</span>
          <span className="text-gray-700">{product.nameBn}</span>
        </nav>

        {/* Product header */}
        <section className="mb-4 flex flex-col justify-between gap-5 rounded-xl border border-[#e4ebe4] bg-white p-5 sm:flex-row sm:items-center sm:px-7">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-2xl sm:h-14 sm:w-14">
              {product.image}
            </div>

            <div>
              <h1 className="text-xl font-bold sm:text-2xl">
                {product.nameBn}
              </h1>
              <p className="mt-1 text-xs text-gray-500">
                {product.category} · প্রতি {product.unit}
              </p>
              <p className="mt-2 text-xs text-gray-500">
                বাংলাদেশের বাজারের আজকের দাম
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-5 rounded-xl bg-[#f1f6f1] px-4 py-3 sm:min-w-28 sm:flex-col sm:items-start sm:gap-1">
            <span className="text-xs text-gray-500">আজকের দাম</span>
            <span className="text-2xl font-bold">
              {formatPrice(product.today)}
            </span>
            <span className="text-xs text-gray-500">
              টাকা / {product.unit}
            </span>
            <span className="text-xs font-semibold text-red-600">
              ▲ {product.change.pct}%
            </span>
          </div>
        </section>

        {/* Price summary */}
        <section className="mb-4 rounded-xl border border-[#e4ebe4] bg-white p-4 sm:p-6">
          <h2 className="mb-4 text-sm font-bold">
            দামের সাম্প্রতিক তথ্য
          </h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <PriceCard
              title="গতকালের দাম"
              price={product.yesterday}
              color="green"
            />
            <PriceCard
              title="গত সপ্তাহের দাম"
              price={product.lastWeek}
              color="red"
            />
            <PriceCard
              title="গত মাসের দাম"
              price={product.lastMonth}
              color="green"
            />
          </div>
        </section>

        {/* Market table */}
        <section className="rounded-xl border border-[#e4ebe4] bg-white p-4 sm:p-6">
          <div className="mb-4">
            <h2 className="text-sm font-bold">
              বাজারভিত্তিক আজকের দাম
            </h2>
            <p className="mt-1 text-xs text-gray-500">
              বিভিন্ন বাজারের দামের তুলনা
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-y border-gray-100 text-gray-500">
                  <th className="px-3 py-3 text-left font-medium">বাজারের নাম</th>
                  <th className="px-3 py-3 text-left font-medium">বিভাগ</th>
                  <th className="px-3 py-3 text-right font-medium">সর্বনিম্ন</th>
                  <th className="px-3 py-3 text-right font-medium">সর্বোচ্চ</th>
                  <th className="px-3 py-3 text-right font-medium">গড়</th>
                </tr>
              </thead>

              <tbody>
                {markets.map((market) => (
                  <tr
                    key={market.market}
                    className="border-b border-gray-100 transition hover:bg-[#f3f8f2]"
                  >
                    <td className="whitespace-nowrap px-3 py-3 font-medium">
                      {market.market}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 text-gray-500">
                      {market.division}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 text-right">
                      {formatPrice(market.min)} টাকা
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 text-right">
                      {formatPrice(market.max)} টাকা
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 text-right font-semibold">
                      {formatPrice(Math.round((market.min + market.max) / 2))} টাকা
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            সব দাম প্রতি {product.unit} হিসেবে দেখানো হয়েছে।
          </p>
        </section>

        {/* Back link */}
        <div className="py-6">
          <Link
            href="/"
            className="text-sm font-semibold text-green-800 hover:text-green-600"
          >
            ← সব পণ্যে ফিরে যান
          </Link>
        </div>
      </div>
    </main>
        </div>
    );
};

export default ProductDetailPage;