
"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { toast } from "react-toastify";





    //  Update profile handle button 

    const handleUpdateProfile = 
        async (e: React.SubmitEvent<HTMLFormElement>) => {

        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(e.target);
        const newUserData = Object.fromEntries(formData.entries()) as {
        name: string;
        };

        const checkingName = newUserData.name.trim();

            if (!checkingName) {
            toast.error("Name cannot contain any spaces");
            return;
            }

            const { error } = await authClient.updateUser({
            name: checkingName,
            });

            if (error) {
            toast.error(error.message);
            return;
            }

            toast.success("Name updated successfully");
            form.reset();
    
    };


const UpdateProfileForm = () => {
        
    return (
    <div className=" bg-[#f3f6f4] px-4 md:px-5 pt-16 pb-16 md:pt-26 md:pb-26 lg:pt-36 lg:pb-40">

      <div className="max-w-200 mx-auto ">

          {/* --- Header Section --- */}
          <div className="mb-6">
            <h1 
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 lg:text-left text-center">
              আপডেট প্রোফাইল
            </h1>
            <p 
              className="text-gray-500 text-sm md:text-base text-center lg:text-left">
              আপনার অ্যাকাউন্ট তথ্য এখানে দেখুন
            </p>
          </div>

          {/* update form */}
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
                    className="btn bg-[#15803d] hover:bg-[#166534] border-none text-white text-base font-medium rounded-lg h-12 min-h-12 w-full">
                    আপডেট
                  </button>
                </div>
            </form>
          </div>
        </div>
        {/*  */}

      </div>
      
     
      {/* Footer Text */ }
        <div className="mt-8 text-center">
          <Link href="/" className="text-sm lg:text-base font-semibold text-gray-400">
            ← হোম পেজে ফিরে যান
          </Link>
        </div> 

    </div>
    );
};

export default UpdateProfileForm;