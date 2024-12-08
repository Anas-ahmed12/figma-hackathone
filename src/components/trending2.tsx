import Image from 'next/image'
import React from 'react'

const Trending2 = () => {
  return (
    <div>
      <section className="text-gray-400 body-font">
  <div className="container px-5 pt-7 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-[29%] md:ml-28">
        <div className="h-full bg-[#FFF6FB] bg-opacity-40 rounded-lg overflow-hidden relative shadow-lg">
          <h1 className='text-2xl font-bold text-blue-800 pl-6 pt-8'>23% off in all products</h1>
          <p className='pl-6 font-bold text-[#FB2E86]'>Shop Now</p>
          <div className='h-[1px] w-20 ml-6 bg-[#FB2E86]'></div>
          <Image src={'/part-1.png'} alt='Sofa' width={220} height={200}  className="ml-52"/>
        </div>
      </div>
      <div className="p-4 lg:w-[29%]">
        <div className="h-full bg-[#a1acb3] bg-opacity-40 rounded-lg overflow-hidden relative shadow-lg">
          <h1 className='text-2xl font-bold text-blue-800 pl-6 pt-8'>23% off in all products</h1>
          <p className='pl-6 font-bold text-[#FB2E86]'>View Collection</p>
          <div className='h-[1px] w-28 ml-6 bg-[#FB2E86]'></div>
          <Image src={'/part-2.png'} alt='Sofa' width={250} height={300}  className="ml-16"/>
        </div>
      </div>
      <div className="p-4 lg:w-96">
      <div className="h-full bg-opacity-40  pb-24 rounded-lg overflow-hidden text-center relative shadow-lg">
        <div>
        <Image src={"/part-3.png"} alt='sofa' height={280} width={300}/> 
        </div>
        <div>
        <Image src={"/part-4.png"} alt='sofa' height={280} width={300} className='mt-7'/> 
        </div>
        <div>
        <Image src={"/part-5.png"} alt='sofa' height={280} width={300} className='mt-7'/> 
        </div>
         </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Trending2
