"use client";

import Link from "next/link";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { authClient } from "./../../lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SignInRequiredToast from "./SignInRequiredToast";

const SignInFormPage = () => {
  const [isSigning, setIsSigning] = useState(false);

  const router = useRouter();


  //email sign in
  const handleOnSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(e.target);

    const userData = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    // const name = String(formData.get("name") ?? "");
    // const email = String(formData.get("email") ?? "");

    // const email = formData.get("email") as string;
    // const password = formData.get("password") as string;

    
    setIsSigning(true);
    try {
      const { data, error } = await authClient.signIn.email({
        ...userData,
      });

      if (error) {
        toast.error(error.message);
      }

      if (!data) {
        toast.error("Sign in failed. Please try again.");
        return;
      }
      toast.success("Sign in successfully!");

      form.reset();
      router.push("/");
      // router.replace("/");
      // router.refresh();
    } 
    catch {
      toast.error("Sign in failed. Please try again.");
    }
     finally {
      setIsSigning(false);
    }
  };

  // Google sign in
  const handleGoogleSignIn = async () => {
    setIsSigning(true);
    try {
      const { error } = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });

      if (error) {
        toast.error("Google sign in failed!");
        setIsSigning(false);
      }
    } catch {
      toast.error("Google sign in failed.");
      setIsSigning(false);
    }
  };

  // github sign in
  const handleGithubSignIn = async () => {
    setIsSigning(true);

    try {
      const { error } = await authClient.signIn.social({
        provider: "github",
        callbackURL: "/",
      });

      if (error) {
        toast.error("Github sign in failed .");
        setIsSigning(false);
      }
    } catch {
      toast.error("GitHub sign in failed.");
      setIsSigning(false);
    }
  };

  // Separate authentication loading page


  return (
    <>

    {/* to show toast */}
    <SignInRequiredToast></SignInRequiredToast>

      {/* sign in div */}
      <div className="min-h-screen bg-[#f3f6f4] flex flex-col items-center justify-center py-12 px-4">
        {/* --- Header Section --- */}
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            সাইন ইন করুন
          </h1>
          <p className="text-gray-500 text-sm md:text-base lg:text-lg font-medium">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>

        {/* --- Main Card --- */}
        <div className="card w-full max-w-110 bg-white shadow-sm border border-gray-100 rounded-2xl">
          <div className=" p-5">
            {/* Form */}
            <form onSubmit={handleOnSubmit} className="space-y-4">
              {/* Email Input */}
              <div className="form-control w-full">
                <label className="label pt-0 pb-1">
                  <span className="label-text font-semibold text-gray-700">
                    ইমেইল
                  </span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="input input-bordered font-medium w-full bg-white border-gray-300 focus:border-green-600 focus:outline-none rounded-lg text-sm h-11"
                />
              </div>

              {/* Password Input */}
              <div className="form-control w-full">
                <label className="label pt-0 pb-1">
                  <span className="label-text font-semibold text-gray-700">
                    পাসওয়ার্ড
                  </span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="কমপক্ষে ৮ অক্ষরের"
                  className="input input-bordered font-medium w-full bg-white border-gray-300 focus:border-green-600 focus:outline-none rounded-lg text-sm h-11"
                />
              </div>

              {/* Submit Button */}
              <div className="form-control mt-6">
                <button
                  type="submit"
                  disabled={isSigning}
                  className="flex items-center justify-center gap-2 btn bg-[#15803d] hover:bg-[#166534] border-none w-full text-white text-base font-medium rounded-md h-11 min-h-11 shadow-md shadow-green-200 "
                >
                {
                  isSigning &&(
                    <span className="loading loading-dots loading-xs"></span>
                  )
                }

                {
                  isSigning? "সাইন ইন করা হচ্ছে..." : "সাইন ইন করুন"
                }
                  
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="divider font-medium text-xs text-gray-400 my-6">
              অথবা
            </div>

            {/* Social Buttons */}
            <div className="flex flex-col gap-3 ">
              <button
                type="button"
                disabled={isSigning}
                onClick={handleGoogleSignIn}
                className="btn btn-outline flex-1 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 normal-case font-semibold text-sm rounded-lg min-h-11"
              >
                <FcGoogle className="text-red-500 text-lg" />
                <span>Google দিয়ে সাইনআপ করুন</span>
              </button>

              <button
                type="button"
                disabled={isSigning}
                onClick={handleGithubSignIn}
                className="btn btn-outline flex-1 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 normal-case font-semibold text-sm rounded-lg min-h-11"
              >
                <FaGithub className="text-black text-lg" />
                <span>Github দিয়ে সাইনআপ করুন</span>
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center mt-6">
              <p className="text-sm font-medium text-gray-600">
                অ্যাকাউন্ট নেই?{" "}
                <Link
                  href="/signUp"
                  className="text-[#15803d] font-semibold hover:underline"
                >
                  সাইন আপ করুন
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-8 text-center">
          <Link href="/" className="text-sm lg:text-base font-semibold px-4 md:px-5 text-gray-400">
            ← হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignInFormPage;
