import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FiPhoneOutgoing } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { FaUserMd } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";

const Top = () => {
  return (
    <div>
      <footer className="text-gray-400 bg-[#7E33E0] body-font">
  <div className="container px-5 py-1 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
    <MdOutlineMail className='text-xl' />
      <span className="ml-3 text-1xl">mhhasanul@gmail.com</span>
    </a>
    
    <p className="text-md text-white sm:ml-4 sm:pl-16 sm:py-2 sm:mt-0 mt-4 flex">
    <FiPhoneOutgoing  className='mt-1 font-semibold mr-3'/>
    (12345)67890
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <ul className='flex gap-5 text-white text-sm'>
            <li className='flex items-center'>English <IoIosArrowDown className='text-[17px]'/> </li>
            <li className='flex items-center'>USD <IoIosArrowDown className='text-[17px]'/> </li>
            <li className='flex items-center'>login <FaUserMd className='text-[13px] ml-1'/> </li>
            <li className='flex items-center'>Wishlist <FaRegHeart className='text-[13px] ml-1'/> </li>
            <li><MdShoppingCartCheckout  className=' text-[22px]'/></li>

        </ul>
    </span>
  </div>
</footer>

    </div>
  )
}

export default Top
