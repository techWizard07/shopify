import React from 'react'
import FooterLogo from '../../assets/Logo.png'
import footerPattern from '../../assets/website/footer-pattern.jpg'
import { LiaCopyrightSolid } from "react-icons/lia";
import {
    FaGithub ,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
  } from "react-icons/fa";

  const FooterLinks = [
    {
      title: "Home",
      link: "/#",
    },
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Contact",
      link: "/#contact",
    },
    {
      title: "Blog",
      link: "/#blog",
    },
  ];

const BannerImg={
    backgroundImage:`url(${footerPattern})`,
    backgroundPosition:'bottom',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    height:'100%',
    width:"100%",
};

function Footer() {

  return (
    
<div className='text-white mb-20' style={BannerImg}>
<div className='container'>
     <div className='grid md:grid-cols-3 pb-44 pt-5'>
        {/* Company Deatils */}
        <div className='px-4 py-8'>
        <h1
        className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 items-center gap-3'
        >
            <img src={FooterLogo} className='max-w-[50px]' alt="" />
            Shopify</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti inventore sequi officia beatae consequatur rei</p>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}

            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="https://www.instagram.com/wizard__js/">
                  <FaInstagram className="text-3xl hover:text-pink-600" />
                </a>
                <a href="https://github.com/techWizard07">
                  <FaGithub  className="text-3xl hover:text-black hover:bg-white hover:rounded-full" />
                </a>
                <a href="https://www.linkedin.com/in/akash122021/">
                  <FaLinkedin className="text-3xl hover:text-blue-500" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Thiruvaur Tamilnadu</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt  />
                  <p>+91 8870405300</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <LiaCopyrightSolid className='text-xl' />
                  <p>akashv122120@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer