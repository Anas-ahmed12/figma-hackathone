import Image from "next/image";
import React from "react";

const blogPosts = [
  {
    id: 1,
    author: "SaberAli",
    date: "21 August,2020",
    title: "Top essential Trends in 2021",
    description:
      "More of this less hello samlande lied much over tightly circa horse taped mightly",
    imgSrc: "/blog-1.jpeg",
  },
  {
    id: 2,
    author: "Surfuxion",
    date: "21 August,2020",
    title: "Top essential Trends in 2021",
    description:
      "More of this less hello samlande lied much over tightly circa horse taped mightly",
    imgSrc: "/blog-2.jpeg",
  },
  {
    id: 3,
    author: "SaberAli",
    date: "21 August,2020",
    title: "Top essential Trends in 2021",
    description:
      "More of this less hello samlande lied much over tightly circa horse taped mightly",
    imgSrc: "/blog-3.jpeg",
  },
];

const Leatestblog: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-40 py-12">
      <h1 className="text-center text-3xl sm:text-4xl font-bold text-blue-900 mb-8">
        Latest Blog
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-md shadow-md p-4 w-full sm:w-[300px] md:w-[300px] md:h-[420px]"
          >
            {/* Blog Image */}
            <div className="relative h-40 w-full">
              <Image
                src={post.imgSrc}
                alt={post.title}
                layout="fill" // Parent container ka space fill karega
                objectFit="cover" // Styling ko intact rakhega
                className="rounded-md"
              />
            </div>

            {/* Blog Content */}
            <div className="mt-4">
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <span className="text-[#1E3A8A]">{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h2 className="text-lg font-semibold mt-2 text-[#1E3A8A]">
                {post.title}
              </h2>
              <p className="text-[12px] text-gray-500 mt-2 font-medium">
                {post.description}
              </p>
              <button className="text-blue-500 underline mt-4">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leatestblog;
