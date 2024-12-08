import Link from 'next/link'
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <>
    <header className=" body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <span className=" text-3xl text-black font-bold">Hekto</span>
    </a>
    <nav className="md:mr-auto md:ml-24 md:py-1 md:pl-4  flex flex-wrap items-center text-base justify-center">
      <Link href={"#"} className=" hover:text-[#FB2E86] text-[#FB2E86] font-semibold mr-10 flex items-center">Home <IoIosArrowDown className='text-[17px]'/></Link>
      <Link href={"#"} className=" hover:text-[#FB2E86] text-black font-semibold mr-12">Pages</Link>
      <Link href={"#"} className=" hover:text-[#FB2E86] text-black font-semibold mr-12">Products</Link>
      <Link href={"#"} className=" hover:text-[#FB2E86] text-black font-semibold mr-12">blog</Link>
      <Link href={"#"} className=" hover:text-[#FB2E86] text-black font-semibold mr-12">Shop</Link>
      <Link href={"#"} className=" hover:text-[#FB2E86] text-black font-semibold mr-12">Contact</Link>
    </nav>
    <div className="relative w-full md:w-auto">
  <input
    type="text"
    placeholder="Search"
    className="hidden md:block w-full border border-gray-200 px-6 py-2 rounded-md focus:outline-none"
  />
  <div className="absolute inset-y-0 right-0 flex items-center ">
    <div className="h-10 w-10 flex justify-center items-center bg-[#FB2E86]">
      {/* React Icon for Search */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="white"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M9.5 17A7.5 7.5 0 119.5 2a7.5 7.5 0 010 15z"
        />
      </svg>
    </div>
  </div>
</div>

  </div>
</header>

    </>
  )
}

export default Navbar
