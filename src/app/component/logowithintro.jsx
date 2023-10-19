"use client";
import React from 'react'
import Image from 'next/image';
import { Component } from "react";
import Slider from "react-slick";
import Styles from './logo.module.scss'

export default function Logowithintro({ data }) {
    let logos = data.logos;
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 0,
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
    <section className='logoWithCOntent pb-0'>
        <div className="container">
          <h5 className=' text-black text-center font-semibold text-xl'>{data.description.replace(/####|\*\*/g, "")}</h5>
          <div className={`flex p-9 ${Styles.logosWrap}`}>
          <Slider {...settings}>
            {logos.map((lg, index) => (
                <div className={`w-1/4 ${Styles.logoWrap}`}>
                  <Image className=' object-cover' width={120} height={100} src={`https:${lg.image}`} alt="image"/>
                </div>
            ))}
          </Slider>
          </div>
        </div>
    </section>
  )
}
