import Image from 'next/image'
import React from 'react'

const Ubdate = () => {
  return (
    <div>
      <div className="relative w-full h-[450px] flex flex-col items-center justify-center bg-slate-600 overflow-hidden">
        {/* Image as Background */}
        <Image
          src={'/cover.jpeg'}
          alt="Cover Me"
          layout="fill" // Image container ko poora fill karegi
          objectFit="cover" // Image ko stretch hone se bachaye
          className="absolute bg-cover bg-center"
        />

        {/* Centered Content */}
        <div className="relative z-10 flex flex-col items-center gap-4">
          <h1 className="text-[#151875] text-3xl font-bold text-center">
            Get Latest Updates By Subscribing <br /> Our Newsletter
          </h1>
          <button className="bg-[#EC4899] text-white text-lg font-semibold px-6 py-2 rounded hover:bg-[#151875] hover:text-white mt-2">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ubdate;
