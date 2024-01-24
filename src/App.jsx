import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from 'aos';
import "aos/dist/aos.css";
import TopProducts from './components/TopProducts/TopProducts';
import WinterSale from './components/WinterSale/WinterSale';
import Subscribe from './components/Subscribe/Subscribe';
import TopSelling from './components/TopSelling/TopSelling';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';

function App() {
  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  },[])
  return (
    <div>
      <Navbar/>
      <Hero />
      <Products/>
      <TopProducts />
      <WinterSale/>
      <Subscribe/>
      <TopSelling/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App