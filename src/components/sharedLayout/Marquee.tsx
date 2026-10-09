import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
interface IHeadline {
  id: number;
  nameBn: string;
  categoryIcon: string;
  unit: string;
  today: number;
  change: {
    dir: "up" | "down" | "same";
    pct: number;
  };
}

const MarqueePage = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );

  const data: IHeadline[] = await res.json();

  return (
    <div className="border-t border-[#F0F5EF] border-b-2  ">
      <MarqueeText duration={20} direction="right">
        {data.slice(0, 10).map((headlines) => {
          const pct = headlines.change.pct;

          return (
            <ul
              key={headlines.id}
              className=" flex items-center mx-2 border-r-2 border-[#F0F5EF] py-2"
            >
              <li>
                {headlines.categoryIcon}
                <span className="mx-2 font-semibold text-sm lg:text-base">
                  {headlines.nameBn}
                </span>
              </li>
              <li>
                <span className="mr-2 text-sm lg:text-base">
                  {headlines.today} টাকা/কেজি
                </span>
              </li>
              <li
                className={`text-sm lg:text-base mr-2

                  ${
                      headlines.change.dir === "up"
                      ? "text-red-700"
                      : headlines.change.dir === "down"
                      ? "text-green-700"
                      : "text-black"
                      }`}>
                        
                {
                    headlines.change.dir === "up" && headlines.change.pct > 0 ? (
                    <span className="flex justify-center items-center">
                        <IoMdArrowDropup className="text-xl lg:text-3xl " />
                        {Math.abs(pct)}%
                    </span>
                    )
                    : headlines.change.dir === "down" &&
                    headlines.change.pct < 0 ? (
                    <span className="flex justify-center items-center">
                        <IoMdArrowDropdown className="text-xl lg:text-3xl " />
                        {Math.abs(pct)}%
                    </span>
                    ) 
                    :(
                    <span>{headlines.change.pct}%</span>
                    )
                }
              </li>

            </ul>
            
          );
        })}
      </MarqueeText>
    </div>
  );
};

export default MarqueePage;
