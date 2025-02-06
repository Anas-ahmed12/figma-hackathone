import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-[#F6F5FF] w-full h-64 flex flex-col justify-center px-5 md:px-52">
        <h1 className="text-3xl text-black font-bold">My Account</h1>
        <p className="text-sm mt-1 font-semibold">
        <Link href={"/"} className="hover:text-[#FB2E86]"> Home</Link>. Page . <span className="text-[#FB2E86]">My Account</span>
        </p>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen -mt-48 -mb-60">
        <div className="p-8 rounded-lg w-full max-w-md">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-black text-center mb-4">
            Login
          </h2>
          <p className="text-gray-400 text-center mb-6">
            Please login using account details below.
          </p>

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email Address"
            className="rounded border border-gray-300 text-gray-200 w-full py-2 px-4 mb-4 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none"
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            className="rounded border border-gray-300 text-gray-200 w-full py-2 px-4 mb-4 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none"
          />

          {/* Forgot Password Link */}
          <div className="flex justify-start mb-6">
            <a href="#" className="text-indigo-400 hover:underline text-sm">
              Forgot your password?
            </a>
          </div>

          {/* Login Button */}
          <button className="bg-[#FB2E86] hover:bg-indigo-700 text-white py-2 px-4 rounded w-full mb-4">
            Login
          </button>

          {/* Footer Text */}
          <p className="text-gray-400 text-center">
            {"Don’t"} have an Account?{" "}
            <a href="#" className="text-indigo-400 hover:underline">
              Create account
            </a>
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center items-center py-8">
        {/* Centered Image Container */}
        <div className="h-20 w-[900px] flex items-center justify-center mt-7">
          <Image
            src="/logo.png" // Aapka image path
            alt="Logo"
            width={900}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
