import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slidersdashboard.css";

// import required modules
import { Mousewheel, Pagination, Autoplay } from "swiper";

const SlidersDashboard = () => {
  return (
    <div>

        <h2 className='section_title'>Komunitas Python Unas</h2>

            <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
            mousewheel={true}
            pagination={{
            clickable: true,
            }}
            modules={[Mousewheel, Pagination, Autoplay]}
            className="swiper_dashboard"
        >

            <SwiperSlide>
            <img src="/props/kampus1.jpg" className='img_slider'/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="/props/kampus2.jpg" className='img_slider'/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="/props/kampus3.jpg" className='img_slider'/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="/props/kampus4.jpg" className='img_slider'/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" className='img_slider'/>
            </SwiperSlide>
            </Swiper>
    </div>
  )
}

export default SlidersDashboard