import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className="text-gray-400 bg-[#F2F0FF] body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          
          {/* Image Section */}
          <div className="md:-mt-[280px] md:-ml-[200px] sm:-mt-[180px] sm:-ml-[100px]">
            <Image src="/heropic2.png" alt="hero" width={400} height={500} />
          </div>

          {/* Text Section */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className='font-bold text-[#FB2E86]'>Best Furniture For Your Castle....</p>
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-bold text-black">
              New Furniture Collection
              <br className="hidden lg:inline-block" />
              Trends in 2020
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
              <br />
              in phasellus non in justo..
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-[#FB2E86] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Shop now
              </button>
            </div>
          </div>

          {/* Additional Image Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/heropic.png"
              width={600}
              height={1000}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
