import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.scss";

// import required modules
import {  Navigation } from "swiper";

export default function OneMore() {
  return (
    <>
     <div className="distance">
        
        </div>
     
        <p className="hotDeals">HOT DEALS</p>
      <Swiper
       slidesPerView={3}
       spaceBetween={10}
       slidesPerGroup={3}
       loop={true}
       loopFillGroupWithBlank={true}
       // pagination={{
       //   clickable: true,
       // }}
       navigation={true}
       modules={[ Navigation]}
       className="mySwiper"
      >
        <SwiperSlide><img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/5273604b-7d68-4815-823e-7c9d9cc5f6e4.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://d32baadbbpueqt.cloudfront.net/37f0de63-c052-447c-9f98-dacceede39e1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/aa0b42d7-b80b-4262-99a9-f69243f10dc5.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/c007ac4f-5a1f-4100-aa60-863adaabb679.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/6f7977f1-8744-4a93-a656-a6f94a140d33.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/e4977309-1625-432c-b6ed-9ab4cb6596d5.jpg" alt="" /></SwiperSlide>
       
      </Swiper>

        <div className="textSlide">

          <p>ULTIMATE MAKEUP QUIZ</p>
        </div>
        <div>
          <img src="https://d32baadbbpueqt.cloudfront.net/55b14ff1-ff6e-4af7-bbb6-9dbe8771037f.jpg" className=" myimage" alt="" />
        </div>


    </>
  );
}
