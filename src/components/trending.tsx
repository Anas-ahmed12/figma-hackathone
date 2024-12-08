import Image from 'next/image'
import React from 'react'

const Trending = () => {
  return (
    <div>
      <section className="text-gray-400 bg-[#F1F0Ff] body-font">
        <div className="container mx-auto flex px-5 py-24 flex-col md:flex-row items-center justify-center">
          {/* Image Container - Responsive */}
          <div className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 md:ml-44">
            <Image src={'/trendback.png'} alt='Trending' width={600} height={500} className='relative w-full' />
            <Image src={'/trendsofa.png'} alt='Trending' width={600} height={500} className='absolute top-0 left-0 w-full' />
          </div>

          {/* Content Container - Responsive */}
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start items-center text-center md:text-left md:pl-16 lg:pl-24">
            <h1 className="title-font sm:text-3xl text-3xl mb-4 font-bold text-[#151875]">
              Unique Features Of Latest &<br className="hidden lg:inline-block" />
              Trending Products
            </h1>
            <ul className="space-y-3">
              <li>All frames constructed with hardwood solids and laminates</li>
              <li>Reinforced with double wood dowels, glue, screw-nails corner blocks, and machine nails</li>
              <li>Arms, backs, and seats are structurally reinforced</li>
            </ul>
            <div className="flex justify-center md:justify-start mt-6">
              <button className="inline-flex text-white bg-[#FB2E86] border-0 h-[40px] pt-2 font-medium px-6 focus:outline-none hover:bg-indigo-600 text-sm rounded-sm">
                Add To Cart
              </button>
              <p className='mt-2 font-bold text-[#151875] ml-5'>B&B Italian Sofa</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Trending
