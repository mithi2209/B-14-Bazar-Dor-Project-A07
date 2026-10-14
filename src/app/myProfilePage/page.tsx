

"use client";

import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import userImg from "@/images/Avatar.png";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { BsArrowReturnLeft } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";





const MyProfilePage = () => {

const router = useRouter();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  // sign out
  const handleSignOut = async () => {
    await authClient.signOut();
    toast.info("Sign out successfully");
      router.replace("/");
      router.refresh();
    
  };

  // toggle btns for edit
  // const [show, setShow] = useState(false);

  // const handleShowForm = () => {
  //   setShow(!show);
  // };

 


  return (
    <div className=" bg-[#f3f6f4] px-4 md:px-5 pt-16 pb-16 md:pt-26 md:pb-26 lg:pt-36 lg:pb-40">
      <div className="max-w-200 mx-auto">
        {/* --- Header Section --- */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 lg:text-left text-center">
            আমার প্রোফাইল
          </h1>
          <p className="text-gray-500 text-sm md:text-base text-center lg:text-left">
            আপনার অ্যাকাউন্ট তথ্য এখানে দেখুন
          </p>
        </div>

        {/* --- User Info Card --- */}
        <div className="card w-full bg-white shadow-sm border border-gray-100 rounded-xl mb-6">
          <div className="card-body p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Left Side: Avatar & Info */}
            <div className="flex items-center gap-4">
              {/* Avatar Image (Placeholder used) */}

              <div className="avatar rounded-md">
                <div className="w-32 lg:46 rounded-lg bg-gray-200 overflow-hidden">
                  <Image
                    width={50}
                    height={50}
                    src={user?.image || userImg}
                    alt="Profile image"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-lg md:text-xl font-bold text-gray-900">
                  {user?.name}
                </h2>
                <p className="text-gray-500 text-sm md:text-base">
                  {user?.email}
                </p>
              </div>
            </div>

            {/* Right Side: update and Logout Button */}
            <div className="flex items-center gap-2">
              <Link href={"/updateProfileForm"}>
                <button
                  // onClick={handleShowForm}
                  className="btn btn-outline border-green-700 text-green-700 hover:bg-green-50 hover:border-green-500 hover:text-green-500 normal-case font-semibold rounded-lg px-4 h-10 min-h-10 border-2">

                  <MdModeEditOutline className="text-lg" />
                    আপডেট প্রোফাইল
                </button>
              </Link>

              <button
                onClick={handleSignOut}
                className="btn btn-outline border-red-400 text-red-500 hover:bg-red-50 hover:border-red-300 hover:text-red-600 normal-case font-semibold rounded-lg px-4 h-10 min-h-10 border-2"
              >
                <BsArrowReturnLeft className="text-lg" />
                সাইন আউট
              </button>
            </div>
          </div>
        </div>

       
        


      </div>
      {/* Footer Text */}
      <div className="mt-8 text-center">
        <Link href="/" className="text-sm lg:text-base font-semibold text-gray-400">
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
      
    </div>
  );
};

export default MyProfilePage
