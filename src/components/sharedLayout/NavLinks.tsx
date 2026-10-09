

import Link from "next/link";



interface INavLinks{
    id: string
    slug: string
    nameBn: string
    icon: string
}


const NavLinks = async() => {



    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories');

    const data:INavLinks[] = await res.json();
    


    return (
        <div className="py-4  border-t border-[#F0F5EF] ">

           <div className="container mx-auto px-4 md:px-5 lg:px-0 flex justify-center lg:justify-start items-center flex-wrap gap-2 md:gap-5">

                {
                    data.map(navLink => 
                        
                    <Link 
                        key={navLink.id} 
                        href={`/category/${navLink.id}`}
                        className={"flex items-center gap-1" }>

                        <span>{navLink.icon}</span>
                        <p className="text-black text-sm lg:text-lg font-medium lg:font-semibold">{navLink.nameBn}</p>

                    </Link>)
                }
           </div>
        </div>
    );
};

export default NavLinks;