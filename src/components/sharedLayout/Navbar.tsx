

import Image from "next/image";
import Link from "next/link";
import NavLogo from "@/images/logo-icon.png";
import SignInPage from "@/app/signIn/page";
import SignUpPage from "@/app/signUp/page";
import NavLinks, { INavLinks } from "./NavLinks";
import MarqueePage from "./Marquee";
import CurrentDate from "./CurrentDate";
import { AllCategoriesData } from "@/lib/page";


const Navbar = async() => {

    const data: INavLinks[] = await AllCategoriesData();

    
  return (
    <header className="">
      <nav className=" container py-5 px-4 md:px-5 lg:px-0 mx-auto flex justify-between items-center gap-3  ">
        {/* Part-1 */}
        <div className=" flex justify-start items-center gap-2">
          <div className="bg-green-700 p-3 rounded-xl w-10 md:w-12">
                <Link href="/">
                    <Image
                        className=""
                        src={NavLogo}
                        alt="Logo"
                        width={50}
                        height={50}
                        />
                </Link>
          </div>
          <div>
            <h2 className="text-base md:text-lg lg:text-xl font-semibold lg:font-bold">
              বাজার দর
            </h2>
            <CurrentDate></CurrentDate>
          </div>
        </div>

        
        {/* part-2 */}
        {/* SIGN IN AND SIGN UP BTN */}
        <div className="flex items-center gap-1 lg:gap-3">
            <SignInPage></SignInPage>
            <SignUpPage></SignUpPage>
        </div>

        {/*  dropdownMenu */}
        {/* <ProfilePage></ProfilePage> */}
       

      </nav>
        
      

      <NavLinks data={data}></NavLinks>
      <MarqueePage  />
    </header>
 

    
  );
};

export default Navbar;
