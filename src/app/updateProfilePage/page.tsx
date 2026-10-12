"use client";

import Image from "next/image";
import userImg from "@/images/Avatar.png";
import { BsArrowReturnLeft } from "react-icons/bs";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { toast } from "react-toastify";
import { MdModeEditOutline } from "react-icons/md";
import { useState } from "react";
import { router } from "better-auth/api";



const UpdateProfilePage = () => {



  const { data: session } = authClient.useSession();
  const user = session?.user;

  // sign out
  const handleSignOut = async () => {
    await authClient.signOut();
    toast.info("Sign out successfully");
    
  };

  // toggle btns for edit
  const [show, setShow] = useState(false);

  const handleShowForm = () => {
    setShow(!show);
  };

  // update profile

  const handleUpdateProfile = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(e.target);
    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
    };

    await authClient.updateUser({
      ...newUserData,
      
    });

    if(newUserData){
      toast.success('Name updated successfully');
      form.reset();

    }
   
  };

  return (
    <div className="min-h-screen bg-[#f3f6f4]  py-10 lg:py-36 px-4 md:px-8">
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

            {/* Right Side: Logout Button */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleShowForm}
                className="btn btn-outline border-green-700 text-green-700 hover:bg-green-50 hover:border-green-500 hover:text-green-500 normal-case font-semibold rounded-lg px-4 h-10 min-h-10 border-2"
              >
                <MdModeEditOutline className="text-lg" />
                এডিট প্রোফাইল
              </button>

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

        {/* --- Update Form Card --- */}

        {show && (
          <div className="w-full bg-white shadow-sm border border-gray-100 rounded-xl">
            <div className="card-body p-6 md:p-8">
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-6">
                তথ্য
              </h3>

              <form className="space-y-6" onSubmit={handleUpdateProfile}>
                {/* Name Input */}
                <div className="form-control w-full">
                  <label className="label pt-0 pb-2">
                    <span className="label-text text-sm lg:text-lg font-medium text-gray-700">
                      নাম
                    </span>
                  </label>

                  <input
                    name="name"
                    type="text"
                    className="input input-bordered w-full bg-white border-gray-200 focus:border-green-600 focus:outline-none rounded-lg text-sm h-12"
                  />
                </div>

                {/* Submit Button */}
                <div className="form-control mt-2">
                  <button
                    type="submit"
                    className="btn bg-[#15803d] hover:bg-[#166534] border-none text-white text-base font-medium rounded-lg h-12 min-h-12 w-full"
                  >
                    আপডেট
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}


      </div>
      {/* Footer Text */}
      <div className="mt-8 text-center">
        <Link href="/" className="text-sm lg:text-lg text-gray-400">
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
