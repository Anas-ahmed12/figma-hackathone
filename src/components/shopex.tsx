import Image from "next/image";
import React from "react";

const Shopex = () => {
  return (
    <div>
      <section className="text-gray-500 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-[#1E40B7]">
              What Shopex Offer!
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
                <h5 className="title-font font-medium text-1xl text-[#1E40B7]">
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
                <h5 className="title-font font-medium text-1xl text-[#1E40B7]">
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
                <h5 className="title-font font-medium text-1xl text-[#1E40B7]">
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
                <h5 className="title-font font-medium text-1xl text-[#1E40B7]">
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
    </div>
  );
};

export default Shopex;
