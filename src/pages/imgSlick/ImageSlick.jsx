import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImageSlick = () => {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: true,
  };
  return (
    <div className="bg-white">
      <div className="slider-container w-screen px-[6em]  py-[3em]">
        <Slider {...settings}>
          <div className=" ">
            <img
              src="https://goomarket.vercel.app/assets/slider_img_2-ad43ef2a.jpg"
              alt=""
              className="h-[50vh] w-full "
            />
          </div>

          <div>
            <img
              src="https://goomarket.vercel.app/assets/slider_img_1-aa711fe6.jpg"
              alt=""
              className="h-[50vh] w-full "
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlick;
