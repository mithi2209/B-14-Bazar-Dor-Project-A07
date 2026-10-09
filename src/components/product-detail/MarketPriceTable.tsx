import { formatBangla } from "@/lib/formatBangla";


const MarketPriceTable = ({product}) => {
    return (
        <div>

            {/* Price table */}
          <h2 className="mb-5 mt-6 text-lg lg:text-xl font-semibold text-gray-800">
            বাজারভিত্তিক আজকের দাম
          </h2>

          
          <div className="overflow-x-auto rounded-2xl border-2 border-[#F0F5EF]">
            <table className="table table-xs lg:table-md w-full">
              <thead>
                <tr className="text-gray-500 text-semibold text-sm lg:text-lg ">
                  <th className="whitespace-nowrap">বাজার</th>
                  <th className="whitespace-nowrap">বিভাগ</th>
                  <th className="whitespace-nowrap text-right">সর্বনিম্ন</th>
                  <th className="whitespace-nowrap text-right">সর্বোচ্চ</th>
                  <th className="whitespace-nowrap text-right">গড়</th>
                </tr>
              </thead>

              <tbody>


                



                {/* <tr className="hover:bg-[#f4f8f4] text-xs lg:text-sm font-medium text-gray-600">
                  <td className="whitespace-nowrap">মাছ বাজার</td>
                  <td className="whitespace-nowrap">সদরবাজার</td>
                  <td className="whitespace-nowrap text-right">৫৯ টাকা</td>
                  <td className="whitespace-nowrap text-right">৬৩ টাকা</td>
                  <td className="whitespace-nowrap text-right">৬৫ টাকা</td>
                </tr> */}




                {product.markets.map((market, index) => (
                    <tr
                        key={`${market.market}-${index}`}
                        className={`text-xs lg:text-sm font-medium text-gray-600
                            ${index % 2 === 0
                            ? "bg-[#f0f5f0]"
                            : "bg-white"}
                        `}
                    >
                    <td className="p-3 whitespace-nowrap">{market.market}</td>
                    <td className="p-3 whitespace-nowrap">{market.division}</td>

                    <td className="p-3 text-right whitespace-nowrap">
                    {formatBangla(market.min)} টাকা
                    </td>

                    <td className="p-3 text-right whitespace-nowrap">
                    {formatBangla(market.max)} টাকা
                    </td>

                    <td className="p-3 text-right whitespace-nowrap">
                    {formatBangla(
                        Math.round((market.min + market.max) / 2)
                    )} টাকা
                    </td>
          </tr>
        ))}
     



              </tbody>
            </table>
          </div>

            
        </div>
    );
};

export default MarketPriceTable;