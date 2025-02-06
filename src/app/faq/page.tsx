import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  // Data for dynamic content (headings and paragraphs)
  const contentData = [
    {
      heading: "What is your return policy?",
      paragraph:
        "Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange.",
    },
    {
      heading: "Do you ship internationally?",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
    },
    {
      heading: "How can I track my order?",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
    },
    {
      heading: "What payment methods do you accept?",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="bg-[#F6F5FF] w-full h-64 flex flex-col justify-center px-5 md:px-52">
        <h1 className="text-3xl text-black font-bold">FAQ</h1>
        <p className="text-sm mt-1 font-semibold">
          <Link href={"/"} className="hover:text-[#FB2E86]">
            Home
          </Link>{" "}
          . Page . <span className="text-[#FB2E86]">FAQ</span>
        </p>
      </div>

      {/* Content Section */}
      <div className="container mx-auto mt-10 px-5 md:px-0 flex flex-col md:flex-row items-center gap-8">
        {/* Left Section */}
        <div className="w-full md:w-5/12 p-6 bg-white rounded-lg">
          <h1 className="text-[28px] font-bold text-[#1d3178] text-center md:text-left mb-8">
            General Information
          </h1>

          {contentData.map((item, index) => (
            <div key={index} className="mb-6">
              <h2 className="font-bold text-[#1d3178] text-lg pt-2">
                {item.heading}
              </h2>
              <p className="text-gray-400 font-semibold text-sm mt-2">{item.paragraph}</p>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="w-full md:w-5/12 bg-[#f8f8fd] p-6 rounded-lg">
          <h1 className="text-[28px] font-bold text-[#1d3178] text-center md:text-left mb-8">
            Ask a Question
          </h1>
          <form className="space-y-6">
            {/* Input 1 */}
            <input
              type="text"
              placeholder="Your name"
              className="w-full h-12 border border-gray-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            {/* Input 2 */}
            <input
              type="text"
              placeholder="Subject"
              className="w-full h-12 border border-gray-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            {/* Textarea */}
            <textarea
              placeholder="Type your message"
              className="w-full h-32 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
            ></textarea>
            {/* Submit Button */}
            <button
              type="submit"
              className=" w-32 h-12 bg-pink-500 text-white font-semibold rounded-sm hover:bg-pink-600 transition duration-300"
            >
              Send Mail
            </button>
          </form>
        </div>
      </div>
      <div className="w-full flex justify-center items-center py-8">
      {/* Centered Image Container */}
      <div className="h-20 w-[1000px] flex items-center justify-center mt-10">
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
  );
};

export default Page;
