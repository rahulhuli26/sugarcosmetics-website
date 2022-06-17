// 


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.scss"


// import required modules
import {  Navigation } from "swiper";

export default function VideoSlide() {
  return (
    <>

      <div className="textSlide">
        <p>SUGAR STREAMING</p>
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
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
        <SwiperSlide><video playsInline  loop muted autoPlay src="https://cdn4.fireworktv.com/medias/2022/4/22/1650623566-berqzfil/watermarked/540/MettlePrimingBalm-Vertical.mp4"></video></SwiperSlide>
        <SwiperSlide><video loop muted autoPlay src="https://cdn4.fireworktv.com/medias/2022/1/18/1642490844-ureajzhm/watermarked/540/FaceLiftlikeKendallJenner.mp4"></video></SwiperSlide>
        <SwiperSlide><video loop muted autoPlay src="https://cdn4.fireworktv.com/medias/2022/2/15/1644905324-hgvtazeo/watermarked/540/KoreanBeautyHack-JAMSU.mp4"></video></SwiperSlide>
        <SwiperSlide><video loop muted autoPlay src="https://cdn4.fireworktv.com/medias/2022/3/9/1646836364-eixsrdot/watermarked/540/275182554_2096939307119931_4496228888503996313_n.mp4"></video></SwiperSlide>
        <SwiperSlide><video loop muted autoPlay src="https://cdn4.fireworktv.com/medias/2022/3/9/1646835858-lvtrfujp/watermarked/540/InShot_20220309_184811595.mp4"></video></SwiperSlide>
        <SwiperSlide><video loop muted autoPlay src="https://cdn4.fireworktv.com/medias/2022/2/4/1643955080-zfievyxo/watermarked/540/TissuePaperEyeshadowHack.mp4"></video></SwiperSlide>
        <SwiperSlide><video loop muted autoPlay src="https://cdn4.fireworktv.com/medias/2021/11/1/1635767024-pedhjtzf/watermarked/540/EasywaytoMattifyLipstick7.mp4"></video></SwiperSlide>
        <SwiperSlide><video loop muted autoPlay src="https://cdn4.fireworktv.com/medias/2022/3/9/1646836997-qhfletip/watermarked/540/GlamSmokeyEyelook.mp4"></video></SwiperSlide>
        <SwiperSlide><video loop muted autoPlay src="https://cdn4.fireworktv.com/medias/2022/3/9/1646836728-bkvwtnrc/watermarked/540/InShot_20220309_183351048.mp4"></video></SwiperSlide>
   
        <SwiperSlide><video loop muted autoPlay src="https://cdn4.fireworktv.com/medias/2022/5/4/1651658297-iejpnryc/watermarked/540/12d8fa48b8a847f08b08937f64d12e2e.mp4"></video></SwiperSlide>
        <SwiperSlide><video loop muted autoPlay src="https://cdn4.fireworktv.com/medias/2022/5/4/1651663467-tqubndxo/watermarked/540/InShot_20220504_164824147.mp4"></video></SwiperSlide>
        <SwiperSlide><video loop muted autoPlay src="https://cdn4.fireworktv.com/medias/2022/5/4/1651657914-hpckfdtb/watermarked/540/Videoshop_2021-05-19_21-22-11.mp4"></video></SwiperSlide>
        <SwiperSlide><video loop muted autoPlay src="https://cdn4.fireworktv.com/medias/2022/4/30/1651342203-wnqistjz/watermarked/540/EffortlesslyExpressive9-16.mp4"></video></SwiperSlide>
        <SwiperSlide><video loop muted autoPlay src="https://cdn4.fireworktv.com/medias/2022/1/18/1642490662-qrlyukpb/watermarked/540/HowtoBaketheRightWay.mp4"></video></SwiperSlide>
        <SwiperSlide><video loop muted autoPlay src="https://cdn4.fireworktv.com/medias/2022/2/4/1643956359-clqnsktd/watermarked/540/SunkissedLookTutorial.mp4"></video></SwiperSlide>
        <SwiperSlide><video loop muted autoPlay src="https://cdn4.fireworktv.com/medias/2022/2/15/1644906634-nshmulgo/watermarked/540/FoundationHacks.mp4"></video></SwiperSlide>
      </Swiper>
    </>
  );
}
