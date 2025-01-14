import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../commonSliderLayout/commonSlider.css";
function CommonSlider({ children }) {
  const settings = {
    dots: true,
    infinite: true,
    loop: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="sliderContainer">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default CommonSlider;
