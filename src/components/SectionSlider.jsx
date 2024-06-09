import React, { Component } from "react";
import Slider from "react-slick";
import Card from "./Card";

class SectionSlider extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }

  next = () => {
    this.sliderRef.current.slickNext();
  };

  prev = () => {
    this.sliderRef.current.slickPrev();
  };

  render() {
    const { title, data } = this.props;

    const settings = {
      draggable:true,
      speed: 200,
      slidesToShow: Object.values(data).length<6 ? Object.values(data).length : 6,
      slidesToScroll: 6,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
      infinite: false,
    };

    return (
      <div className="my-8 w-full">
        <div className="flex flex-row gap-4 mb-4 items-center ">
          <div className="h-[40px] w-[20px] bg-black" />
          <div className="font-extrabold sm:text-3xl text-xl">{title}</div>
          <div className="flex gap-2">
            <button
              onClick={this.prev}
              className="h-[40px] w-[40px] bg-black flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#ffffff"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={this.next}
              className="h-[40px] w-[40px] flex items-center justify-center bg-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#ffffff"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        {data ? (
          <div className="slider-container">
            <Slider ref={this.sliderRef} {...settings}>
              {Object.values(data).map((v, i) => {
                return <Card data={v} index={i} key={title+'slide'+i} />;
              })}
            </Slider>
          </div>
        ) : null}
      </div>
    );
  }
}

export default SectionSlider;
