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

export default function FourMore() {
  return (
    <>
    <div className="textSlide">
        <p>
        EXPLORE
        </p>
    </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/5a14d6cc-2414-4cc8-bf2b-11f881c756c6.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/16951257-44d5-4b7e-81cb-55628f498d94.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/8028cf4f-a5d5-4896-b4c6-5cae8da64b26.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/3fd3b743-7482-48aa-b08c-e2945f4e55ee.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/887ac04a-d449-4793-b6ef-f7dfddf1a214.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/3fd3b743-7482-48aa-b08c-e2945f4e55ee.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/44351c32-e291-4ef3-9b12-c8570d2d369e.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/f521d4d5-bf2c-462c-8897-e7e375c6301f.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/5a14d6cc-2414-4cc8-bf2b-11f881c756c6.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/8028cf4f-a5d5-4896-b4c6-5cae8da64b26.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/5a14d6cc-2414-4cc8-bf2b-11f881c756c6.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/16951257-44d5-4b7e-81cb-55628f498d94.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/887ac04a-d449-4793-b6ef-f7dfddf1a214.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/3fd3b743-7482-48aa-b08c-e2945f4e55ee.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/44351c32-e291-4ef3-9b12-c8570d2d369e.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/f521d4d5-bf2c-462c-8897-e7e375c6301f.jpg" alt="" /></SwiperSlide>
       
      </Swiper>

      <div className="read">
        <p className="loadMore">READ MORE ABOUT SUGAR COSMETICS</p>

      </div>
    </>
  );
}


{/* <div class="swiper-button-next"></div>
<div class="swiper-button-prev"></div>
<div class="swiper-pagination"></div> */}