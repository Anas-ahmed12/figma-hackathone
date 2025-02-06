import Image from "next/image";
import Link from "next/link";
import React from "react";

const Grid = () => {
  const products = [
    { name: "Vel elit euismod", price: "$42.00", image: "/defult-1.png" },
    { name: "Ultricies condimentum", price: "$45.00", image: "/defult-2.png" },
    { name: "Vitea suspendisse sed", price: "$50.00", image: "/defult-3.png" },
    { name: "Sed at fermentum", price: "$55.00", image: "/defult-4.png" },
    { name: "Fusce pellentesque at", price: "$60.00", image: "/defult-5.png" },
    {
      name: "Vestibulum magna laoreet",
      price: "$65.00",
      image: "/defult-6.png",
    },
    { name: "sollicitudin omet orci", price: "$70.00", image: "/defult-7.png" },
    { name: "Ultrices mauris sit", price: "$75.00", image: "/defult-8.png" },
    { name: "Modern Watch", price: "$80.00", image: "/defult-9.png" },
    { name: "Modern Camera", price: "$85.00", image: "/defult-10.png" },
    { name: "Modern Earphones", price: "$90.00", image: "/defult-11.png" },
    { name: "Modern Bag", price: "$95.00", image: "/defult-12.png" },
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="bg-[#F6F5FF] w-full h-64 flex flex-col justify-center px-5 md:px-52">
        <h1 className="text-3xl text-black font-bold">Shop Grid Default</h1>
        <p className="text-sm mt-1 font-semibold">
        <Link href={"/"} className="hover:text-[#FB2E86]"> Home</Link> . Page .{" "}
          <span className="text-[#FB2E86]">Shop Grid Default</span>
        </p>
      </div>

      {/* Sort and Filter */}
      <div className="pt-12 pb-8 text-[#00003f] flex flex-wrap justify-between items-center px-5 md:px-52">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-[#151875]">
            Ecommerce Accessories & Fashion Item
          </h2>
          <p className="text-sm mt-1 font-semibold text-gray-400">
            About 9,620 results (0.62 seconds)
          </p>
        </div>

        {/* Sort Options */}
        <div className="flex flex-wrap items-center space-x-4 md:space-x-6">
          {/* Per Page */}
          <div className="flex items-center space-x-2">
            <label htmlFor="perPage" className="text-sm text-[#151875]">
              Per Page:
            </label>
            <input
              id="perPage"
              type="text"
              className="w-12 h-6 border border-gray-300 px-1"
            />
          </div>

          {/* Sort By */}
          <div className="flex items-center space-x-2">
            <label htmlFor="sortBy" className="text-sm text-[#151875]">
              Sort By:
            </label>
            <select
              id="sortBy"
              className="h-6 border border-gray-300 text-sm px-1 cursor-pointer"
            >
              <option value="best">Best Match</option>
              <option value="latest">Latest</option>
              <option value="popular">Popular</option>
            </select>
          </div>

          {/* View Options */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-[#151875]">View:</span>
            <div className="flex space-x-1">
              <div className="w-4 h-4 border border-[#00003f] bg-[#00003f]"></div>
              <div className="w-4 h-4 border border-[#00003f]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="py-10 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="relative rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition duration-300"
              >
                {/* Image */}
                <div className="w-full h-52 flex items-center justify-center overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-8 text-center">
                  <h3 className="text-lg font-bold text-[#151875]">
                    {product.name}
                  </h3>
                  <p className="text-lg font-bold text-gray-800 mt-2">
                    {product.price}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-transparent border-2 border-[#2F1AC4] text-white opacity-0 hover:opacity-100 flex items-center justify-center rounded-lg transition duration-300">
                  <button className="py-2 px-4 bg-white text-[#2F1AC4] font-bold rounded-md shadow-md">
                    View Details
                  </button>
                </div>
              </div>
            ))}
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
      </section>
    </div>
  );
};

export default Grid;
