import Image from 'next/image';
import React from 'react';

const Logos = () => {
  return (
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
  );
};

export default Logos;
