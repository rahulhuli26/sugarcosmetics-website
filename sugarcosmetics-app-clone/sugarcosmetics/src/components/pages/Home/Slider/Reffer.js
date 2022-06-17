import React from "react";
import "./Slider.scss";
import SlideHome from '../SlideHome'
import SlideOne from "../SlideOne.jsx";
// import TestSlide from "./TestSlide";



export default function Reffer() {
  return (
    <div className="mainDiv">
      <div className="distance"></div>
      <div className="reffetText">
        <p>REFER YOUR FRIENDS</p>
      </div>
      <div>
        <img
          src={
            "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/f53f2d67-ea43-4959-abca-eba6d87fd598.jpg"
          }
          alt="refer"
          className="feferImage"
          srcset=""
        />
      </div>

      <div>
        <p className="PRIMING">METTLE PRIMING BALM</p>
      </div>

      <SlideHome />

      <div className="youTube">
        <iframe
          width="1024"
          height="352.7px"
          src="https://www.youtube.com/embed/_TTJmiTiiOQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <SlideOne />
        {/* <TestSlide  /> */}
      </div>
    </div>
  );
}
