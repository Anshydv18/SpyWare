import React from "react";
import MainBanner from "../../assets/Banner/MainBanner.jpg";
import Banner from "../../assets/Banner/Banner.jpg";
import Banner1 from "../../assets/Banner/Banner1.jpg";
import Banner2 from "../../assets/Banner/Banner2.jpg";
import "./HomeSwipper.css";
function HeroSwipper() {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={MainBanner} className="w-full px-4" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div>
            <h1 className="hollow-word text-5xl font-bold text-white absolute top-[35%] left-[30%]">
              Welcome to SpyHome
            </h1>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={Banner} className="w-full px-4" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={Banner1} className="w-full px-4" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={Banner2} className="w-full px-4" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSwipper;
