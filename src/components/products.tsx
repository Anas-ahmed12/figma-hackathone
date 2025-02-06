'use client'
// components/CarDetails.jsx
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";

interface ProductsProps {
  name: string;
  price: number;
  oldPrice?: number; // Optional
  rating: number; // Rating out of 5
  description: string;
  colors: string[]; // Array of color codes
  image: string; // Path to the image
}

export default function Products({
  name,
  price,
  oldPrice,
  rating,
  description,
  colors,
  image,
}: ProductsProps) {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg flex flex-col md:flex-row items-center gap-6">
      {/* Image Section */}
      <div className="w-full md:w-1/3">
        <Image
          src={image}
          alt={name}
          width={300}
          height={200}
          className="h-[200px] w-[300px] object-cover"
        />
      </div>

      {/* Details Section */}
      <div className="flex-1">
        {/* Title and Colors */}
        <div className="flex items-center mb-4">
          <h2 className="text-xl font-bold text-[#111C85]">{name}</h2>
          <div className="flex items-center gap-2 ml-7">
            {colors.map((color, index) => (
              <span
                key={index}
                className="w-3 h-3 rounded-full mt-1"
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center gap-4 mb-2 -mt-5">
          <span className="text-md font-semibold text-[#111C85]">${price}</span>
          {oldPrice && (
            <span className="text-md font-semibold text-[#FF2AAA] line-through">
              ${oldPrice}
            </span>
          )}

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2 mt-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              className={`${
                index < rating ? "text-yellow-400" : "text-gray-300"
              } text-xl`}
            >
              ★
            </span>
          ))}
        </div>
        </div>

        {/* Description */}
        <p className="text-[#9295AA] mb-4 text-base -mt-2">{description}</p>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="text-white rounded-lg hover:bg-blue-600">
            🛒
          </button>
          <FaRegHeart className="text-black hover:text-red-500 transition-colors duration-300 " />

          <button className="text-gray-700 rounded-lg hover:bg-gray-300">
            🔍
          </button>
        </div>
      </div>
    </div>
  );
}
