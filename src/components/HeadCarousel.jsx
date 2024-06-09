import React from "react";
import Slider from "react-slick";
import CarSlide from "./CarSlide";

function HeadCarousel(props) {
  const { results } = props.data;

  const settings = {
    draggable:true,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container mb-6 shadow-lg relative">
      <Slider {...settings}>
        {results
          ? Object.values(results).map((v, i) => {
              return <CarSlide key={"slide" + i} rank={i+1} data={v} />;
            })
          : () => {
              return (
                <div className="bg-slate-800 animate-pulse aspect-video lg:aspect-[16/4]" />
              );
            }}
      </Slider>
    </div>
  );
}

export default HeadCarousel;
