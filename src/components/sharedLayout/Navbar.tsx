"use client";

import Image from "next/image";
import Link from "next/link";
import NavLogo from "@/images/logo-icon.png";
import ProfilePage from "@/app/profile/page";
import SignInPage from "@/app/signIn/page";
import SignUpPage from "@/app/signUp/page";
import NavLinks from "./NavLinks";
import Marquee from "./Marquee";


const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="bg-white sticky top-0  ">
      <nav className="container py-5 px-4 md:px-5 lg:px-0 mx-auto flex justify-between items-center gap-3  ">
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
            <p className="mt-1 text-[10px] md:text-xs lg:text-xl">{date}</p>
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
        
      

      <NavLinks></NavLinks>
      <Marquee></Marquee>
    </header>
   

    
  );
};

export default Navbar;
