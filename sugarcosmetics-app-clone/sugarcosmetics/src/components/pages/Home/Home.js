import Reffer from './Slider/Reffer';
import React from 'react'
import Slider from './Slider/Slider'
import TestSlide from "./Slider/TestSlide";
// import Reffer from "./Slider/Reffer"
// <<<<<<< HEAD
import OneMore from './Slider/OneMore'
import TwoMore from './Slider/TwoMore'
import VideoSlide from './Slider/VideoSlide'
import ThreeImage from './Slider/ThreeImage'
import FourMore from './Slider/FourMore'
import Delivery from './SlideHome';
import SlideOne from './SlideOne';

export default function Home() {
  return (
    <div>

    <Slider/>
    <Reffer/>
    <TestSlide/>
    <OneMore/>
    <VideoSlide/>
    <TwoMore/>
    <ThreeImage/>
    <Delivery/>
    <SlideOne/>
    <FourMore/>

    </div>
  )
  }
// export default function Home() {
//   return (
//     <>
//       <div style={ {height:"2500px"} }>
//         <Slider />
//         <TestSlide  />
//         <Reffer />
//       </div>
//     </>
//   );
// }


