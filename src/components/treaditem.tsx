import Image from 'next/image';
import React from 'react';

const Treaditem = () => {
  const products = [
    {
      name: 'Cantilever chair',
      code: 'Y523201',
      price: '$42.00',
      image: '/trend-1.png', // Replace with actual image paths
    },
    {
      name: 'Cantilever chair',
      code: 'Y523201',
      price: '$42.00',
      image: '/trend-2.png',
    },
    {
      name: 'Cantilever chair',
      code: 'Y523201',
      price: '$42.00',
      image: '/trend-3.png',
    },
    {
      name: 'Cantilever chair',
      code: 'Y523201',
      price: '$42.00',
      image: '/trend-4.png',
    },
  ];

  return (
    <section className="py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#1E40B7] mb-16 mt-5">
          Trending Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition duration-300"
              style={{ width: '270px', height: '361px' }}
            >
              {/* Product Image */}
              <div className="w-full h-52 flex items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={270} // Explicit width
                  height={208} // Explicit height
                  className="object-contain"
                />
              </div>

              {/* Product Details */}
              <div className="mt-12 text-center">
                <h3 className="text-lg font-semibold text-[#FB2E86]">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.code}</p>
                <p className="text-lg font-bold text-gray-800 mt-2">
                  {product.price}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-transparent border-2 border-[#2F1AC4] text-white opacity-0 hover:opacity-100 flex items-center justify-center rounded-xl transition duration-300">
                <button className="py-2 px-4 bg-white text-[#2F1AC4] font-bold rounded-md shadow-md">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treaditem;
