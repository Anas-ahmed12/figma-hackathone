"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu, FiX } from 'react-icons/fi'; // Import the menu and close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for the toggle button

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle the state when the button is clicked
  };

  return (
    <>
      <header className="body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center relative">
          {/* Logo */}
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span className="text-3xl text-black font-bold">Hekto</span>
          </a>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden absolute top-1/2 right-5 transform -translate-y-1/2 text-3xl text-black p-2" // Centered vertically next to the logo
            onClick={toggleNavbar}
          >
            {isOpen ? <FiX /> : <FiMenu />} {/* Toggle between menu and close icon */}
          </button>

          {/* Navbar Links */}
          <nav
            className={`${
              isOpen ? 'block' : 'hidden'
            } md:flex md:mr-auto md:ml-24 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center`}
          >
            <Link href={"#"} className="hover:text-[#FB2E86] text-[#FB2E86] font-semibold mr-10 flex items-center">
              Home <IoIosArrowDown className="text-[17px]" />
            </Link>
            <Link href={"#"} className="hover:text-[#FB2E86] text-black font-semibold mr-12">Pages</Link>
            <Link href={"#"} className="hover:text-[#FB2E86] text-black font-semibold mr-12">Products</Link>
            <Link href={"#"} className="hover:text-[#FB2E86] text-black font-semibold mr-12">Blog</Link>
            <Link href={"#"} className="hover:text-[#FB2E86] text-black font-semibold mr-12">Shop</Link>
            <Link href={"#"} className="hover:text-[#FB2E86] text-black font-semibold mr-12">Contact</Link>
          </nav>

          {/* Search Input */}
          <div className="relative w-full md:w-auto hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-gray-200 px-6 py-2 rounded-md focus:outline-none"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <div className="h-10 w-10 flex justify-center items-center bg-[#FB2E86]">
                {/* Search Icon */}
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

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <nav className="flex flex-col items-center text-base">
            <Link href={"#"} className="hover:text-[#FB2E86] text-[#FB2E86] font-semibold py-2">
              Home <IoIosArrowDown className="text-[17px]" />
            </Link>
            <Link href={"#"} className="hover:text-[#FB2E86] text-black font-semibold py-2">Pages</Link>
            <Link href={"#"} className="hover:text-[#FB2E86] text-black font-semibold py-2">Products</Link>
            <Link href={"#"} className="hover:text-[#FB2E86] text-black font-semibold py-2">Blog</Link>
            <Link href={"#"} className="hover:text-[#FB2E86] text-black font-semibold py-2">Shop</Link>
            <Link href={"#"} className="hover:text-[#FB2E86] text-black font-semibold py-2">Contact</Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
