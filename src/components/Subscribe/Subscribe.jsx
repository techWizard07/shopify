import React from 'react'
import Banner from '../../assets/website/orange-pattern.jpg'
import { FaArrowRightLong } from "react-icons/fa6";

function Subscribe() {
const BannerImg={
    backgroundImage:`url(${Banner})`,
    backgroundPosition:'center',
    backgroundRepeat:'cover',
    backgroundSize:'cover',
    height:'100%',
    width:"100%"
};

    return (
    <div data-aos="zoom-in"
    className='bg-gray-100 dark:bg-gray-800 text-white dark:text-black'
    style={BannerImg}
    >
        <div className='container backdrop-blur-sm py-10'>
            <div className='space-y-6 max-w-xl mx-auto  '>
                <h1 className='sm:text-left !text-center text-3xl font-semibold '>
                Get Notify About New Arrivals!!
                </h1>
                <div className='flex'>
                <input data-aos="fade-up" type="text" placeholder='Enter Your email' className='w-full p-3'/>
                <FaArrowRightLong className='pl-[15px] text-6xl font-bold mt-[10px]  hover:text-yellow-200 duration-100'/>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Subscribe