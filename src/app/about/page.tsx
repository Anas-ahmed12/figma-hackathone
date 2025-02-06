"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const Page = () => {
  const [activeCircle, setActiveCircle] = useState(0);

  return (
    <div>
      {/* Header Section */}
      <div className="bg-[#F6F5FF] w-full h-64 flex flex-col justify-center px-5 md:px-52">
        <h1 className="text-3xl text-black font-bold">About Us</h1>
        <p className="text-sm mt-1 font-semibold">
          <Link href={"/"} className="hover:text-[#FB2E86]">
            {" "}
            Home
          </Link>{" "}
          . Page . <span className="text-[#FB2E86]">About Us</span>
        </p>
      </div>
      {/* header2 */}

      <section className="text-gray-400 body-font md:ml-80">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/aboutpic.png"
              width={500}
              height={500}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center md:-ml-20">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#151875]">
              Know About Our Ecomerce <br />
              Business, History
            </h1>
            <p className="mb-8 leading-relaxed text-sm font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque <br /> ultrices mattis aliquam, malesuada diam est.
              Malesuada sem tristique <br /> amet erat vitae eget dolor
              lobortis. Accumsan faucibus vitae lobortis quis <br /> bibendum
              quam.
            </p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <a href="/contact">
                <button className="inline-flex text-white bg-[#FB2E86] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Feature section */}

      <section className="text-gray-500 body-font -mt-20">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-3xl font-bold title-font mb-4 text-black">
              Our Features
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 text-center justify-center">
            {/* Card 1 */}
            <div className="p-4 md:w-80 sm:w-1/2 w-full group">
              <div className="border-2 border-gray-100 shadow-lg px-4 py-6 rounded-lg relative">
                <Image
                  src={"/shopex-1.png"}
                  alt="Offer"
                  width={60}
                  height={80}
                  className="items-center justify-center m-auto"
                />
                <h5 className="title-font font-semibold pb-3 pt-2  text-xl text-[#1E40B7]">
                  Free Delivery
                </h5>
                <p className="leading-relaxed font-medium text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.
                </p>
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-transparent border-2 border-[#2F1AC4] text-white opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-xl transition duration-300"></div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-4 md:w-80 sm:w-1/2 w-full group">
              <div className="border-2 border-gray-100 shadow-lg px-4 py-6 rounded-lg relative">
                <Image
                  src={"/shopex-2.png"}
                  alt="Offer"
                  width={60}
                  height={80}
                  className="items-center justify-center m-auto"
                />
                <h5 className="title-font font-semibold pb-3 pt-2  text-xl text-[#1E40B7]">
                  100% Cash Back
                </h5>
                <p className="leading-relaxed font-medium text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.
                </p>
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-transparent border-2 border-[#2F1AC4] text-white opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-xl transition duration-300"></div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-4 md:w-80 sm:w-1/2 w-full group">
              <div className="border-2 border-gray-100 shadow-lg px-4 py-6 rounded-lg relative">
                <Image
                  src={"/shoex-3.png"}
                  alt="Offer"
                  width={60}
                  height={80}
                  className="items-center justify-center m-auto"
                />
                <h5 className="title-font font-semibold pb-3 pt-2  text-xl text-[#1E40B7]">
                  Quality Product
                </h5>
                <p className="leading-relaxed font-medium text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.
                </p>
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-transparent border-2 border-[#2F1AC4] text-white opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-xl transition duration-300"></div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-4 md:w-80 sm:w-1/2 w-full group">
              <div className="border-2 border-gray-100 shadow-lg px-4 py-6 rounded-lg relative">
                <Image
                  src={"/shopex-4.png"}
                  alt="Offer"
                  width={60}
                  height={80}
                  className="items-center justify-center m-auto"
                />
                <h5 className="title-font font-semibold pb-3 pt-2 text-xl text-[#1E40B7]">
                  24/7 Support
                </h5>
                <p className="leading-relaxed font-medium text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.
                </p>
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-transparent border-2 border-[#2F1AC4] text-white opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-xl transition duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* comment section */}

      <div className="flex flex-col items-center justify-center min-h-screen -mt-72 -mb-52">
        <h1 className="text-4xl font-bold mb-12">Our Client Say!</h1>
        {/* Profile Images */}
        <div className="flex space-x-2 mb-8">
          <div
            className="group relative"
            onMouseEnter={() => setActiveCircle(0)}
          >
            <Image
              src="/about-2.jpeg"
              alt="Person 1"
              className="w-16 h-16 rounded object-cover transform transition-transform duration-300 group-hover:-translate-y-2"
              width={100}
              height={100}
            />
          </div>
          <div
            className="group relative"
            onMouseEnter={() => setActiveCircle(1)}
          >
            <Image
              src="/about-3.jpeg"
              alt="Selina Gomez"
              className="w-16 h-16 rounded object-cover transform transition-transform duration-300 group-hover:-translate-y-2 -mt-3"
              width={100}
              height={100}
            />
          </div>
          <div
            className="group relative"
            onMouseEnter={() => setActiveCircle(2)}
          >
            <Image
              src="/about-4.jpeg"
              alt="Person 3"
              className="w-16 h-16 rounded object-cover transform transition-transform duration-300 group-hover:-translate-y-2"
              width={100}
              height={100}
            />
          </div>
        </div>
        {/* Name and Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-1">Selina Gomez</h2>
        <p className="text-xs text-gray-500 font-semibold mb-6">
          Ceo At Webzoy Digital
        </p>
        {/* Description */}
        <p className="text-center text-gray-500 text-sm font-semibold max-w-2xl mb-10">
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Non duis
          ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim
          nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam
          lacus volutpat praesent.
        </p>
        {/* Pagination */}
        <div className="flex space-x-2">
          <span
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              activeCircle === 0 ? "bg-pink-500" : "bg-gray-300"
            }`}
          />
          <span
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              activeCircle === 1 ? "bg-pink-500" : "bg-gray-300"
            }`}
          />
          <span
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              activeCircle === 2 ? "bg-pink-500" : "bg-gray-300"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
