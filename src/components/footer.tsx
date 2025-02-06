import React from "react";
import { FaFacebook } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-[#EEEFFB]">
        <div className="container px-5 py-16 mx-auto mt-10 md:mt-24">
          <div className="flex flex-wrap md:text-left text-center order-first">

            {/* Left Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10 md:mb-0">
              <h1 className="title-font font-bold text-black tracking-widest text-3xl mb-3">
                Hekto
              </h1>
              {/* Input and Button */}
              <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start items-center gap-x-2">
                <div className="relative w-full md:w-52">
                  <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">
                    Enter Email Address
                  </label>
                  <input
                    type="text"
                    id="footer-field"
                    placeholder="Enter Email Address"
                    name="footer-field"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-xs outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="h-12 mt-7 bg-[#FB2E86] text-white px-6 rounded focus:outline-none hover:bg-red-600 transform hover:scale-105 transition duration-300 ease-in-out">
                  Sign-Up
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-4 md:text-left text-center">
                Contact Info
                <br className="lg:block hidden" />
                17 Princess Road, London, Greater London NW1, UK
              </p>
            </div>

            {/* Categories Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10 md:mb-0">
              <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none">
                {[
                  "Laptops & Computers",
                  "Cameras & Photography",
                  "Smart Phones & Tablets",
                  "Video Games & Consoles",
                  "Waterproof Headphones",
                ].map((category, index) => (
                  <li className="mb-2" key={index}>
                    <a className="text-gray-600 hover:text-gray-800">{category}</a>
                  </li>
                ))}
              </nav>
            </div>

            {/* Customer Care Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10 md:mb-0">
              <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
                Customer Care
              </h2>
              <nav className="list-none mb-10">
                {[
                  "My Account",
                  "Discount",
                  "Returns",
                  "Orders History",
                  "Order Tracking",
                ].map((link, index) => (
                  <li className="mb-2" key={index}>
                    <a className="text-gray-600 hover:text-gray-800">{link}</a>
                  </li>
                ))}
              </nav>
            </div>

            {/* Pages Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10 md:mb-0">
              <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
                Pages
              </h2>
              <nav className="list-none mb-10">
                {[
                  "Blog",
                  "Browse the Shop",
                  "Category",
                  "Pre-Built Pages",
                  "Visual Composer Elements",
                  "WooCommerce Pages",
                ].map((page, index) => (
                  <li className="mb-2" key={index}>
                    <a className="text-gray-600 hover:text-gray-800">{page}</a>
                  </li>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="bg-[#EEEFFb]">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2024 Hekto —
              <a
                href="https://twitter.com/knyttnev"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @Right Reserved
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <div className="text-3xl text-gray-900 cursor-pointer hover:text-blue-600 transition duration-300">
                <FaFacebook />
              </div>
              <div className="text-3xl ml-3 text-gray-900 cursor-pointer hover:text-pink-600 transition duration-300">
                <RxInstagramLogo />
              </div>
              <div className="text-3xl ml-3 text-gray-900 cursor-pointer hover:text-blue-700 transition duration-300">
                <FaLinkedin />
              </div>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
