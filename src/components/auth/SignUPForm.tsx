"use client";


import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SignUPForm = () => {
  return (
    <div className="min-h-screen bg-[#f3f6f4] flex flex-col items-center justify-center py-16 px-4">

      {/* --- Header Section --- */}
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          অ্যাকাউন্ট তৈরি করুন
        </h1>
        <p className="text-gray-500 text-sm md:text-base lg:text-lg font-medium">
         বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>

      {/* --- Main Card --- */}
      <div className="card w-full max-w-110 bg-white shadow-sm border border-gray-100 rounded-2xl">
        <div className=" p-5">
          {/* Form */}
          <form className="space-y-4">
            {/* Name Input */}
            <div className="form-control w-full">
              <label className="label pt-0 pb-1">
                <span className="label-text font-semibold text-gray-700">
                  নাম
                </span>
              </label>
              <input
                type="text"
                placeholder="আপনার পূর্ণ নাম"
                className="input input-bordered w-full font-medium bg-white border-gray-300 focus:border-green-600 focus:outline-none rounded-lg text-sm h-11"
              />
            </div>

            {/* Email Input */}
            <div className="form-control w-full">
              <label className="label pt-0 pb-1">
                <span className="label-text font-semibold text-gray-700">
                  ইমেইল
                </span>
              </label>
              <input
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
                type="password"
                placeholder="কমপক্ষে ৮ অক্ষরের"
                className="input input-bordered font-medium w-full bg-white border-gray-300 focus:border-green-600 focus:outline-none rounded-lg text-sm h-11"
              />
            </div>

            {/* Confirm Password Input */}
            <div className="form-control w-full">
              <label className="label pt-0 pb-1">
                <span className="label-text font-semibold text-gray-700">
                  পাসওয়ার্ড নিশ্চিত করুন
                </span>
              </label>
              <input
                type="password"
                placeholder="আবার লিখুন"
                className="input input-bordered font-medium w-full bg-white border-gray-300 focus:border-green-600 focus:outline-none rounded-lg text-sm h-11"
              />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button className="btn bg-[#15803d] hover:bg-[#166534] border-none w-full text-white text-base font-medium rounded-md h-11 min-h-11 shadow-md shadow-green-200 ">
                অ্যাকাউন্ট তৈরি করুন
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="divider font-medium text-xs text-gray-400 my-6">অথবা</div>

          {/* Social Buttons */}
          <div className="flex flex-col gap-3 ">

            <button className="btn btn-outline flex-1 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 normal-case font-semibold text-sm rounded-lg min-h-11">

              <FcGoogle className="text-red-500 text-lg" />
              <span>Google দিয়ে সাইনআপ করুন</span>
            </button>

            <button className="btn btn-outline flex-1 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 normal-case font-semibold text-sm rounded-lg min-h-11">

              <FaGithub className="text-black text-lg" />
              <span>Github দিয়ে সাইনআপ করুন</span>
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-sm font-medium text-gray-600">
              অ্যাকাউন্ট আছে?{" "}
              <Link
                href="/signIn"
                className="text-[#15803d] font-semibold hover:underline"
              >
                সাইন ইন করুন
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="mt-8 text-center">
        <Link href="/" className="text-sm text-gray-400">← হোম পেজে ফিরে যান</Link>
      </div>
    </div>
  );
};

export default SignUPForm;
