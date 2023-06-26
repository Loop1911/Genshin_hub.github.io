import "./ImageSlider.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import slide_image1 from "../assets/Monstadt1.jpg";
import slide_image2 from "../assets/Liyue.jpg";
import slide_image3 from "../assets/Inazuma.jpg";
import slide_image4 from "../assets/Sumeru.jpg";

function ImageSlider() {
  return (
    <div className="container">
      <h1 className="heading">ALL THE NATIONS ACROSS TEVYAT </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image1} alt="slide_image" />
          <p>MONSTADT</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image2} alt="slide_image" />
          <p>LIYUE</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image3} alt="slide_image" />
          <p>INAZUMA</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image4} alt="slide_image" />
          <p>SUMERU</p>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}
export default ImageSlider;
