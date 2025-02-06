import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgCalendarDates } from "react-icons/cg";
import { WiDirectionDownLeft } from "react-icons/wi";

const Page = () => {
  const recentPosts = [
    {
      id: 1,
      title: "It is a long established fact",
      date: "Aug 09 2020",
      image: "/bblog-1.jpeg", // Replace with actual image path
    },
    {
      id: 2,
      title: "Another interesting fact",
      date: "Aug 10 2020",
      image: "/bblog-2.jpeg", // Replace with actual image path
    },
    {
      id: 3,
      title: "Yet another established fact",
      date: "Aug 11 2020",
      image: "/bblog-3.jpeg", // Replace with actual image path
    },
    {
      id: 4,
      title: "Learning is fun with facts",
      date: "Aug 12 2020",
      image: "/bblog-4.jpeg", // Replace with actual image path
    },
  ];
// const featuredPosts =[
//   {
//     id: 5,
//     title: "Another interesting fact",
//     date: "Aug 10 2020",
//     image: "/top-1.png", // Replace with actual image path
//   },
//   {
//     id: 6,
//     title: "Yet another established fact",
//     date: "Aug 11 2020",
//     image: "/top-2.png", // Replace with actual image path
//   },
//   {
//     id: 7,
//     title: "Learning is fun with facts",
//     date: "Aug 12 2020",
//     image: "/top-3.png", // Replace with actual image path
//   },
// ]
  return (
    <>
    <div>
      {/* Header Section */}
      <div className="bg-[#F6F5FF] w-full h-64 flex flex-col justify-center px-5 md:px-52">
        <h1 className="text-3xl text-black font-bold">Blog Page</h1>
        <p className="text-sm mt-1 font-semibold">
          <Link href={"/"} className="hover:text-[#FB2E86]">
            Home
          </Link>
          . Page . <span className="text-[#FB2E86]">Blog Page</span>
        </p>
      </div>

      {/* Main Section */}
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center lg:flex-nowrap">
          {/* Image Section */}
          <div className="ml-0 lg:ml-56 lg:-mr-20 w-full lg:w-auto">
            <Image
              src="/blog1.jpeg"
              alt="blog"
              width={700}
              height={500}
              className="w-full h-auto"
            />
            <div className="flex items-center gap-4 p-2 text-[#5E37F2] flex-wrap justify-center lg:justify-start">
              {/* Icon and Title */}
              <div className="flex items-center gap-2">
                <div className="h-10 flex items-center justify-center">
                  <WiDirectionDownLeft className="text-red-600 text-4xl lg:text-5xl" />
                </div>
                <span className="text-[12px] font-semibold text-[#2A2251] bg-[#ffe7f9] px-4 py-1 lg:px-6">
                  Surf Auxion
                </span>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <CgCalendarDates className="text-2xl text-orange-500" />
                </div>
                <span className="text-[12px] font-semibold text-[#2A2251] bg-[#ffe7f9] px-4 py-1 lg:px-6">
                  Aug 09 2020
                </span>
              </div>
            </div>

            <h1 className="text-2xl font-bold text-[#2A2251] pb-4">
              Mauris at orci non vulputate diam tincidunt nec.
            </h1>
            <p className="text-sm font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              facilisis quis auctor pretium ipsum, eu rutrum. Condimentum <br />
              eu malesuada vitae ultrices in in neque, porta dignissim.
              Adipiscing purus, cursus vulputate id id dictum at.
            </p>
            <a href="#">
              <p className="mt-4 text-sm font-medium text-[#2A2251] hover:text-orange-500">
                Read More
              </p>
            </a>
          </div>

          {/* Sidebar Section */}
          <div className="w-full lg:w-80 mx-auto p-4 mt-10 lg:mt-0">
            {/* Search Section */}
            <div className="mb-6 md:-mt-28">
              <label
                htmlFor="search"
                className="block text-2xl font-bold text-[#151875] mb-4"
              >
                Search
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search For Posts"
                className="w-full p-2 border bg-transparent border-gray-400 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            {/* Categories Section */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[#151875] mb-4">
                Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm">
                  Hobbies (14)
                </span>
                <span className="bg-gray-200 text-gray-800 px-4 py-1 rounded-full text-sm">
                  Women (21)
                </span>
                <span className="bg-gray-200 text-gray-800 px-4 py-1 rounded-full text-sm">
                  Hobbies (14)
                </span>
                <span className="bg-gray-200 text-gray-800 px-4 py-1 rounded-full text-sm">
                  Women (21)
                </span>
                <span className="bg-gray-200 text-gray-800 px-4 py-1 rounded-full text-sm">
                  Hobbies (14)
                </span>
                <span className="bg-gray-200 text-gray-800 px-4 py-1 rounded-full text-sm">
                  Women (21)
                </span>
              </div>
            </div>

            {/* Recent Posts Section */}
            <div>
              <h3 className="text-lg font-semibold text-[#151875] mb-4">
                Recent Post
              </h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex items-center">
                    <Image
                      src={post.image}
                      alt={`Thumbnail for ${post.title}`}
                      className="w-12 h-12 rounded-md object-cover mr-4"
                      width={48}
                      height={48}
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        {post.title}
                      </p>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

{/* // section two///////////////////////////////// */}

      
    {/* Main Section */}
    <section className="text-gray-400 body-font -mt-40">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center lg:flex-nowrap ">
        {/* Image Section */}
        <div className="ml-0 lg:ml-56 lg:-mr-20 w-full lg:w-auto">
          <Image
            src="/bbb-1.jpeg"
            alt="blog"
            width={500}
            height={500}
            className="w-full h-auto"
          />
          <div className="flex items-center gap-4 p-2 text-[#5E37F2] flex-wrap justify-center lg:justify-start">
            {/* Icon and Title */}
            <div className="flex items-center gap-2">
              <div className="h-10 flex items-center justify-center">
                <WiDirectionDownLeft className="text-red-600 text-4xl lg:text-5xl" />
              </div>
              <span className="text-[12px] font-semibold text-[#2A2251] bg-[#ffe7f9] px-4 py-1 lg:px-6">
                Surf Auxion
              </span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 flex items-center justify-center">
                <CgCalendarDates className="text-2xl text-orange-500" />
              </div>
              <span className="text-[12px] font-semibold text-[#2A2251] bg-[#ffe7f9] px-4 py-1 lg:px-6">
                Aug 09 2020
              </span>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-[#2A2251] pb-4">
            Mauris at orci non vulputate diam tincidunt nec.
          </h1>
          <p className="text-sm font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            facilisis quis auctor pretium ipsum, eu rutrum. Condimentum <br />
            eu malesuada vitae ultrices in in neque, porta dignissim.
            Adipiscing purus, cursus vulputate id id dictum at.
          </p>
          <a href="#">
            <p className="mt-4 text-sm font-medium text-[#2A2251] hover:text-orange-500">
              Read More
            </p>
          </a>
        </div>

        {/* Sidebar Section */}
        <div className="w-full lg:w-80 mx-auto p-4 mt-10 lg:mt-0">

          {/* Recent Posts Section */}
          <div>
            <h3 className="text-lg font-semibold text-[#151875] mb-6 md:-mt-[460px]">
              Sale Product
            </h3>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex items-center">
                  <Image
                    src={post.image}
                    alt={`Thumbnail for ${post.title}`}
                    className="w-12 h-12 rounded-md object-cover mr-4"
                    width={48}
                    height={48}
  
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {post.title}
                    </p>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="text-lg font-semibold text-[#151875] mb-6 mt-6 ">
              Sale Product
            </h3>
          </div>
        </div>
      </div>
    </section>
      
    </div>






  </>
  );
};

export default Page;
