import BanerImg from '../../assets/women/women2.jpg'
import { MdHighQuality } from "react-icons/md";
import { FaShippingFast,FaRegMoneyBillAlt } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";

function WinterSale() {
  return (
    <div className=' dark:bg-gray-900 dark:text-white min-h-[550px] flex justify-center items-center py-1 sm:py-0'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                {/* image section */}
                <div data-aos="zoom-in" >
                    <img src={BanerImg} alt="" className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover' />
                </div>
                {/* text-detail-section */}

                <div>
                    <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold'>Summer Sale upto 45% Off</h1>
                    <p data-aos="fade-up" className='text-sm text-gray-500 tracking-wide leading-5 pt-[7px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque laboriosam quisquam temporibus nemo omnis enim debitis fugit ullam quam dolor? Esse sint eos quis laborum animi veritatis culpa iste neque?</p>
                    <div className="flex flex-col gap-4 pt-[10px]">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <MdHighQuality className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Products</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <FaShippingFast className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <FaRegMoneyBillAlt className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Easy Payment method</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <BiSolidOffer className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Get Offers</p>
              </div>
            </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WinterSale