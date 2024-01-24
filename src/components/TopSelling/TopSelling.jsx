import React from 'react'
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

function TopSelling() {
    const ProductsData = [
        {
          id: 1,
          img: Img1,
          title: "Women Ethnic",
          rating: 5.0,
          color: "white",
          aosDelay: "300",
        },
        {
          id: 2,
          img: Img2,
          title: "Women western",
          rating: 4.5,
          color: "Red",
          aosDelay: "500",
        },
        {
          id: 3,
          img: Img3,
          title: "Goggles",
          rating: 4.7,
          color: "brown",
          aosDelay: "700",
        },
        {
          id: 4,
          img: Img4,
          title: "Printed T-Shirt",
          rating: 4.4,
          color: "Yellow",
          aosDelay: "900",
        },
        {
          id: 5,
          img: Img2,
          title: "Fashin T-Shirt",
          rating: 4.5,
          color: "Pink",
          aosDelay: "1000",
        },
      ];
      
  return (
    <div className='dark:text-white dark:bg-gray-900'>
        {/* Header */}
        <div >
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <h2 data-aos="fade-up" className=' text-primary text-xl pt-[25px]' >Top Selling Products!!</h2>
                <h1 data-aos="fade-up" data-aos-delay="100" className=' text-3xl font-bold pt-[25px]'>High-Demand Products</h1>
                <p data-aos="fade-up" data-aos-delay="200" className='text-s text-gray-500 pt-[25px]'>This products are Top Selling clothes!!for Kids,Mens,Womens collect most trendy Collection are available!</p>
            </div>
        </div>
        {/* Body */}
        <div>
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
            {/* card-section */}
            {ProductsData.map((data)=>(
            <div key={data.id} 
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            className='space-y-3'
            >
                <img src={data.img} alt="" data-aos="fade-up" className="h-[220px] w-[150px] object-cover rounded-md "/>
            <div>
                <h3 className='font-semibold'>{data.title}</h3>
                <p className='text-s text-gray-500'>{data.color}</p>
                <div className='flex items-center gap-2'><FaStar className='text-yellow-500'/>
                <span className='text-gray-400 text-sm'>{data.rating}</span>
                </div>
            </div></div>
            ))
            }
            {/* <div className='text-center'><button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4  rounded-lg"> View All</button></div> */}
        </div>
        </div>
    </div>
  )
}

export default TopSelling
