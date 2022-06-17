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

export default function TwoMore() {
  return (
    <>
    <div className="textSlide">
        <p>TOP PICKS OF THE WEEK</p>
    </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
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
        <SwiperSlide><img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/8a71a460-cd8f-4166-8ac5-b19407d23699.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/dd4d4e8a-b7e3-485e-8a8c-059f5ccab057.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/18ec06e5-4071-4a84-ba25-3e46632b6de0.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/ce6539a6-6bff-4f41-8554-4af80d8ffd07.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/dd4d4e8a-b7e3-485e-8a8c-059f5ccab057.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/18ec06e5-4071-4a84-ba25-3e46632b6de0.jpg" alt="" /></SwiperSlide>
        
      </Swiper>


      <div>
        <div className="textSlide">
          <p>THIS OR THAT</p>
        </div>
        <div className="TwoImage">
          <img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/2dfd09b7-d15c-4d7d-a2e3-fc2c2a7cbc0d.jpg" alt="" />
          <img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/1edc12f3-1ea2-46c3-a54e-57890e6a3bf9.png" alt="" />
        </div>

      </div>
    </>
  );
}
