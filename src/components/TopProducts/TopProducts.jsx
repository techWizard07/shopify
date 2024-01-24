import React from 'react'
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar,FaStarHalfAlt } from "react-icons/fa";
function TopProducts() {
    const ProductsData = [
        {
          id: 1,
          img: Img1,
          title: "Casual Wear",
          description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            delay:"200",
        },
        {
          id: 2,
          img: Img2,
          title: "Striped shirt",
          description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            delay:"400",
        },
        {
          id: 3,
          img: Img3,
          title: "Women shirt",
          description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            delay:"600",
        },
      ];

  return (
    <div className='dark:text-white dark:bg-gray-900 pt-[55px]'>
        <div className='container'>
        {/* header */}
        <div className='text-left mb-24'>
                <h2 data-aos="fade-up" className=' text-primary text-s pt-[25px]' >Top Selling Producta For You!</h2>
                <h1 data-aos="fade-up" data-aos-delay="100" className=' text-2xl font-bold'>Our Best Products</h1>
                <p data-aos="fade-up" data-aos-delay="200" className='text-s text-gray-400'>This products are our Best Products!!for Kids,Mens,Womens collect more Best Collection are available!</p>
            </div>
        
        {/* body */}
        <div
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center '>
            {ProductsData.map((data)=>(
                <div data-aos="zoom-in"
                data-aos-delay={data.delay}
                className='rounded-xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary  hover:text-white relative shadow-xl duration-300 group max-w-[300px]'>
                    {/* image section */}
                    <div className='h-[100px]'>
                        <img src={data.img} alt="" 
                        className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md '
                        />
                    </div>
                    {/* details Section */}
                    <div className='p-4 text-center'>
                    {/* star rating */}
                    <div className='w-full flex items-center justify-center gap-1'>
                    <FaStar className='text-yellow-500 dark:hover:text-white'/>
                    <FaStar className='text-yellow-500 dark:hover:text-white'/>
                    <FaStar className='text-yellow-500 dark:hover:text-white'/>
                    <FaStar className='text-yellow-500 dark:hover:text-white'/>
                    <FaStarHalfAlt  className='text-yellow-500 dark:hover:text-white'/>
                    </div>
                    <h1 className='text-xl font-bold'>
                    {data.title}
                    </h1>
                    <p className='text-gray-500 group:hover:text-white duration-300 text-sm line-clamp-3'>{data.description}</p>
                    <button onClick={()=> alert("Site is under construction so ordering not available!")}
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                //   onClick={handleOrderPopup}
                >
                  Order Now
                </button>
                    </div>
                </div>
                ))}
        </div>
    </div>
    </div>
  )
}

export default TopProducts