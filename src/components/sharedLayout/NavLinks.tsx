
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export interface INavLinks{
    id: string
    slug: string
    nameBn: string
    icon: string
}

interface NavLinksProps {
  data: INavLinks[];
}


const NavLinks =({ data }: NavLinksProps) => {
     const pathname = usePathname();


    // const data:INavLinks[] = await AllCategoriesData();
    


    return (
        <div className="py-2 border-t border-[#F0F5EF] ">

           <div className="container mx-auto px-4 md:px-5 lg:px-0 flex justify-center lg:justify-start items-center flex-wrap gap-2 md:gap-5">

                {
                   data.map((navLink: INavLinks) =>{
                    const isActive = 
                    pathname === `/category/${navLink.id}` ||
                    pathname === `/category/${navLink.slug}`;


                        return (
                        <Link 
                            key={navLink.id} 
                            href={`/category/${navLink.slug}`}

                             className={`flex items-center gap-0.5 rounded-md  px-2 py-1 transition ${
                                    isActive
                                    ? "text-white bg-green-700 "
                                    : "text-black "
                                }`}
                                >

                                <p  className="text-sm lg:text-lg font-medium lg:font-semibold ">
                                        <span className="mr-1">{navLink.icon}</span>
                                        {navLink.nameBn}
                                </p>

                        </Link>
                        )



                    })     
                  
                }
           </div>
        </div>
    );
};

export default NavLinks;