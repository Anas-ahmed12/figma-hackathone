import Image from "next/image";
import Link from "next/link";
import React from "react";

const Grid = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-[#F6F5FF] w-full h-64 flex flex-col justify-center px-5 md:px-52">
        <h1 className="text-3xl text-black font-bold">Contact Us</h1>
        <p className="text-sm mt-1 font-semibold">
        <Link href={"/"} className="hover:text-[#FB2E86]"> Home</Link> . Page . <span className="text-[#FB2E86]">Contact us</span>
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold text-[#1D1D87]">
            Information About us
          </h2>
          <p className="text-gray-500 leading-relaxed mb-6 pt-5 text-sm font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
          {/* Dots */}
          <div className="flex space-x-2">
            <div className="w-6 h-6 bg-[#FB2E86] rounded-full"></div>
            <div className="w-6 h-6 bg-[#8B48FF] rounded-full"></div>
            <div className="w-6 h-6 bg-[#23A6F0] rounded-full"></div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-3xl font-bold text-[#1D1D87] -mb-4 ml-5">
            Contact Way
          </h2>
          {/* Placeholder content */}
          <div className="text-gray-600 leading-relaxed mb-6">
            <div className="max-w-5xl mx-auto px-5 py-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Item 1 */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#5E37FF] rounded-full"></div>
                <div>
                  <p className="text-gray-500 text-sm font-semibold">
                    Tel: 877-67-88-99
                  </p>
                  <p className="text-gray-500 text-sm font-semibold">
                    E-Mail: shop@store.com
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#FB2E86] rounded-full"></div>
                <div>
                  <p className="text-gray-500 text-sm font-semibold">
                    Support Forum
                  </p>
                  <p className="text-gray-500 text-sm font-semibold">
                    For over 24hr
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#FFB265] rounded-full"></div>
                <div>
                  <p className="text-gray-500 text-sm font-semibold">
                    20 Margaret st, London
                  </p>
                  <p className="text-gray-500 text-sm font-semibold">
                    Great britain, 3NM98-LK
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#00D8FF] rounded-full"></div>
                <div>
                  <p className="text-gray-500 text-sm font-semibold">
                    Free standard shipping
                  </p>
                  <p className="text-gray-500 text-sm font-semibold">
                    on all orders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <section className="text-gray-400 -mt-12 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-[#1D1D87] mb-4">
                  Get In Touch
                </h2>
                <p className="text-gray-400 text-sm font-semibold leading-relaxed mb-10 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mattis neque ultrices tristique amet erat vitae eget dolor los
                  vitae lobortis quis bibendum quam.
                </p>
              </div>
              <div className="flex flex-wrap -mx-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className=" mb-4 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mx-2 flex-1"
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  className="rounded border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4 mx-2 flex-1"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="rounded border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4 mx-2 flex-1"
                />
                <textarea
                  placeholder="Type Your Message"
                  className="rounded border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4 mx-2 w-full h-32"
                ></textarea>
                <button className="bg-[#fb2e86] hover:bg-[#1D1D87] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2">Send Mail</button>
              </div>
            </div>
            <Image
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="/contact.png"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Grid;
