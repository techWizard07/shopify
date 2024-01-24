import React from 'react'
import Slider from 'react-slick';
function Testimonial() {
    var settings={
        dots:true,
        arrows:false,
        infinite:true,
        speed:500,
        slidesToScrool:1,
        autoplay:true,
        autoplaySpeed:2000,
        cssEase:"linear",
        pauseOnHover:true,
        pauseOnFocus:true,
        responsive: [
            {
              breakpoint: 10000,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
              },
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        };
    const TestimonialData = [
        {
          id: 1,
          name: "Victor",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: "https://picsum.photos/101/101",
        },
        {
          id: 2,
          name: "Satya Nadella",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: "https://picsum.photos/102/102",
        },
        {
          id: 3,
          name: "Virat Kohli",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: "https://picsum.photos/104/104",
        },
        {
          id: 5,
          name: "Sachin Tendulkar",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: "https://picsum.photos/103/103",
        },
      ];
  return (
    <div className='py-10 mb-10 dark:bg-gray-900 dark:text-white'>
        <div className='container'>
        {/* header-section */}
        <div >
            
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <h2 data-aos="fade-up" className=' text-primary text-xl pt-[25px]' >customers around the world</h2>
                <h1 data-aos="fade-up" data-aos-delay="100" className=' text-3xl font-bold pt-[25px]'>What Our Customers Says!!</h1>
                <p data-aos="fade-up" data-aos-delay="200" className='text-s text-gray-500 pt-[25px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam architecto quisquam atque iste, error quis molestiae doloremque non molestias maxime in. 
                </p>
            </div>
            {/* cards */}
            <div data-aos="zoom-in">
                <Slider {...settings}>
                {TestimonialData.map((data)=>(
                    <div>
                    <div
                    key={data.id}
                    className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  dark:bg-gray-800 bg-primary/20'
                    >
                        <div className='mb-4'>
                            <img src={data.img} alt=""  className='rounded-full w-20 h-20'/>
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                            <div className='spcae-y-3'>
                            <p 
                            className='text-xs text-gray-500'
                            >{data.text}</p>
                            <h1 className='text-xl font-bold text-black.80 dark:text-light'>{data.name}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                ))}
                </Slider>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Testimonial