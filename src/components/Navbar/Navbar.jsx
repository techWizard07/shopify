import React from 'react'
import Logo from "../../assets/Logo.png"
import { IoSearch } from "react-icons/io5";
import { BsCart4  } from "react-icons/bs";
import DarkMode from '../../components/DarkMode';
import { IoMdArrowDropdown  } from "react-icons/io";

const Navbar = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Top Rated",
      link: "/#services",
    },
    {
      id: 3,
      name: "Kids Wear",
      link: "/#",
    },
    {
      id: 3,
      name: "Mens Wear",
      link: "/#",
    },
    {
      id: 3,
      name: "Electronics",
      link: "/#",
    },
    
  ];
  const DropdownLinks = [
    {
      id: 1,
      name: "Trending Products",
      link: "/#",
    },
    {
      id: 2,
      name: "Best Selling",
      link: "/#",
    },
    {
      id: 3,
      name: "Top Rated",
      link: "/#",
    },
  ];
  
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      
      {/* upper Navbar */}
      <div className='bg-primary/40 py-2'>
        <div className="container flex justify-between items-center">
          <div>
            <a href="#"
           className="font-bold text-2xl sm:text:3xl flex gap-2"
           >
              <img src={Logo} alt="logo" 
              className='w-10 uppercase'
              />
              Shopify
            </a>
          </div>
         
          <div className='flex justify-between items-center gap-4 '>
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="Search"  className="w-[200px] sm:w-[200px] group-hover:w-[300px] transistion-all duration-300 rounded-full border border-grey-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"/>
              <IoSearch className="text-grey-600 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"/>
            </div>
         
          {/* OrderButton */}
          <button onClick={()=> alert("Site is under construction so ordering not available!")}className="bg-gradient-to-r from-primary to-secondary transistion-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
            <span className='group-hover:block hidden transition-all duration-200'>Order</span>
            <BsCart4 className='text-xl text-white drop-shadow-sm cursor-pointer' />
          </button>
          {/* darkmode swith */}
          <div>
            <DarkMode/>
          </div>
        </div>
        </div>
      </div>
      {/* Lower Navbar */}
      <div className='flex justify-center'>
        <ul className='sm:flex hidden items-center'>
          {
            Menu.map((data)=>(
              <li key={data.id}>
                <a href="data.link" className='inline-block px-4 hover:text-primary duration-200'>{data.name}</a>
              </li>
            ))
          }
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2 group-hover:text-primary">
              Tranding Products
              <span><IoMdArrowDropdown className='transition-all duration-200 group-hover:rotate-180'/></span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] bg-white p-2
            rounded-md text-black shadow-md">
              <ul>
                {DropdownLinks.map((data)=>(
                <li key={data.id}>
                  <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">{data.name}</a>
                </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar