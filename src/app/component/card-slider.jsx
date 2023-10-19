"use client";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Styles from "./slider.module.scss";

export default function Cardslider({ data }) {
  const carouselData = data.quotes;
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  useEffect(() => {
    prevRef.current = document.querySelector(
      ".quoteCarousel .slick-initialized .slick-prev"
    );
    nextRef.current = document.querySelector(
      ".quoteCarousel .slick-initialized .slick-next"
    );
  }, []);
  const handleNext = () => {
    if (nextRef.current) {
      nextRef.current.click();
    }
  };
  const handlePrev = () => {
    if (prevRef.current) {
      prevRef.current.click();
    }
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <section className="quoteCarousel pb-0">
      <div className="container">
        <div className={Styles.slidesWrapper}>
          <Slider {...settings}>
            {carouselData.map((data, index) => (
              <div key={index} className={`content flex`}>
                <div className="imgWrap w-1/4">
                  <Image
                    width={200}
                    height={200}
                    src={`https:${data.authorImage[0].image}`}
                    alt="image"
                  />
                </div>
                <div className="textWrap w-3/4 pl-2">
                  <h3 key={index}>{data.quote}</h3>
                  <div className="flex w-full justify-between">
                    <div className="logo  w-52">
                      <Image
                        width={200}
                        height={60}
                        src={`https:${data.companyLogo[0].image}`}
                        alt="image"
                      />
                    </div>
                    <div className="bottomContent">
                      <span className="name">
                        {data.authorName
                          .replace(/\*\*/g, " ")
                          .replace(/ \*\*/g, " ")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <button className={`mr-4 ${Styles.prevBtn}`} onClick={handlePrev}>
          Previous
        </button>
        <button className={Styles.nextBtn} onClick={handleNext}>
          Next
        </button>
      </div>
    </section>
  );
}
// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
