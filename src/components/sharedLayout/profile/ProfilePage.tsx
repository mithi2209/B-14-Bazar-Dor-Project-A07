
"use client";

import Link from "next/link";
import Image from "next/image";
import userImg from "@/images/Avatar.png";
import { BsPersonFill } from "react-icons/bs";
import { BsArrowReturnLeft } from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { authClient } from '@/lib/auth-client';
import UserRegisterBtn from '@/components/sharedLayout/userRegisterBtn/UserRegisterBtn';
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


const ProfilePage = () => {

  const router = useRouter();

    const { data: session } = authClient.useSession();
    const user = session?.user;

    // sign out
  const handleSignOut = async() =>{

    await authClient.signOut();
     toast.info("Sign out successfully");
      router.replace("/");
      router.refresh();

  }

  return (
    <div>

      { user ? (

        <div>
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
                  {user.name}
                </p>
              </li>

              <li>
                <p className="pt-0 text-sm  text-gray-500 font-medium">
                  {user.email}
                </p>
              </li>

              <li>
                <Link
                  href="/updateProfilePage"
                  className="text-sm lg:text-base font-medium "
                >
                  <BsPersonFill className="text-slate-500" /> আমার প্রোফাইল
                </Link>
              </li>

                <li className="text-red-500 font-medium text-sm lg:text-base ">
                  <button onClick={handleSignOut}>
                    <BsArrowReturnLeft />
                    সাইন আউট
                  </button>
                </li>
            </ul>
          </div>

          <div className="md:flex hidden items-center gap-3">
            {/* avatar */}
            <div className="avatar rounded-md">
              <div className="w-32 lg:w-46">
                <Image
                  className=""
                  alt="user image"

                  src={user?.image || userImg}
                  width={128}
                  height={128}
                />
              </div>
            </div>

            {/* large device Dropdown */}
            <div className="dropdown dropdown-center">
              <div tabIndex={0} role="button" className="text-base font-medium">
                <span className="flex items-center gap-1  ">

                  <p className="text-sm md:text-base lg:text-lg font-medium    lg:font-semibold">
                    {user.name}
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
                   {user.name}
                  </p>
                </li>

                <li>
                  <p className="pt-0 text-sm  text-gray-500 font-medium">
                    {user.email}
                  </p>
                </li>

                <li>
                  <Link
                    href="/myProfilePage"
                    className="text-sm lg:text-base font-medium "
                  >
                    <BsPersonFill className="text-slate-500" /> আমার প্রোফাইল
                  </Link>
                </li>

                <li className="text-red-500 font-medium text-sm lg:text-base ">
                  <button onClick={handleSignOut}>
                    <BsArrowReturnLeft />
                    সাইন আউট
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <UserRegisterBtn></UserRegisterBtn>
      )}

    </div>
  );
};

export default ProfilePage;