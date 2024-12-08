// src/components/DiscountItem.tsx

import Image from "next/image";
import React from "react";

const DiscountItem: React.FC = () => {
  return (
    <section className="py-16 bg-white">
           <h2 className="text-blue-800 text-4xl font-bold mb-4 items-center text-center">
            Discount Item
          </h2>
          <div className="flex space-x-3 text-md text-gray-500 mb-6 text-center justify-center">
            <span className="underline font-bold cursor-pointer text-pink-500">Wood Chair</span>
            <span className=" font-bold cursor-pointer">Plastic Chair</span>
            <span className=" font-bold cursor-pointer">Sofa Collection</span>
          </div>
      <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-10 px-6">
        {/* Left Content */}
        <div className="flex-1">
          <h3 className="text-3xl font-bold text-blue-800  mb-2">
            20% Discount Of All Products
          </h3>
          <p className="mb-4 text-pink-500 font-bold">Eams Sofa Compact</p>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-500">
            <li>Material expose like metals</li>
            <li>Simple neutral colours</li>
            <li>Clear lines and geometric figures</li>
            <li>Material expose like metals</li>
          </ul>
          <button className="mt-8 bg-pink-500 text-white px-6 py-3 rounded shadow-md hover:bg-pink-600">
            Shop Now
          </button>
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <Image
            src="/discount.png"
            alt="Chair"
            width={500}
            height={500}
            className="rounded-full  w-full mx-auto bg-[#FCECF1]"
          />
        </div>
      </div>
    </section>
  );
};

export default DiscountItem;

