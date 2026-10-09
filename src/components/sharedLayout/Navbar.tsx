"use client";

import Image from "next/image";
import NavLogo from "@/images/logo-icon.png";
import Link from "next/link";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { BsArrowReturnLeft } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <section className=" bg-white py-5">
      <nav className="container px-4 md:px-5 lg:px-0 mx-auto flex justify-between items-center gap-3">
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

        {/* small Device dropdownMenu */}
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className=" h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />{" "}
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm right-2 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
       
              <li>
                <p className="text-sm lg:text-lg font-medium lg:font-semibold pb-0">
                  Rezwan Ahmed
                </p>
              </li>

              <li>
                <p className="pt-0 text-sm  text-gray-500 font-medium">
                  rezwanahmed@gmail.com
                </p>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="text-sm lg:text-base font-medium "
                >
                  <BsPersonFill className="text-slate-500" /> আমার প্রোফাইল
                </Link>
              </li>
              <li>
                <Link
                  href="/sign-out"
                  className="text-red-500 font-medium text-sm lg:text-base  "
                >
                  <BsArrowReturnLeft />
                  সাইন আউট
                </Link>
              </li>
        
       
          </ul>
        </div>


        {/* large Device dropdownMenu */}
        <div className="md:flex hidden items-center gap-3">
          {/* avatar */}
          <div className="avatar rounded-md">
            <div className="w-32 lg:w-46">
              <img
                className=""
                alt="Tailwind-CSS-Avatar-component"
                src="https://img.daisyui.com/images/profile/demo/superperson@192.webp"
              />
            </div>
          </div>

          {/* Dropdown */}
          <div className="dropdown dropdown-center">
            <div tabIndex={0} role="button" className="text-base font-medium">
              <span className="flex items-center gap-1  ">
                <p className="text-sm md:text-base lg:text-lg font-medium    lg:font-semibold">
                  Rezwan Ahmed
                </p>
                <MdOutlineArrowDropDown className="text-lg text-slate-500" />
              </span>
            </div>

            <ul
              tabIndex={-1}
              className="dropdown-content menu bg-base-100 rounded-2xl z-1 w-52 lg:w-60 py-3 shadow-md border right-0 md:right-24 top-10 lg:right-0 border-gray-300"
            >
              <li>
                <p className="text-sm lg:text-lg font-medium lg:font-semibold pb-0">
                  Rezwan Ahmed
                </p>
              </li>

              <li>
                <p className="pt-0 text-sm  text-gray-500 font-medium">
                  rezwanahmed@gmail.com
                </p>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="text-sm lg:text-base font-medium "
                >
                  <BsPersonFill className="text-slate-500" /> আমার প্রোফাইল
                </Link>
              </li>
              <li>
                <Link
                  href="/sign-out"
                  className="text-red-500 font-medium text-sm lg:text-base  "
                >
                  <BsArrowReturnLeft />
                  সাইন আউট
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </nav>
    </section>
  );
};

export default Navbar;
