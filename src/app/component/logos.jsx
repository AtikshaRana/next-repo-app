import React from 'react'
import Styles from './logo.module.scss'
import Image from 'next/image';
import { Component } from "react";
import Slider from "react-slick";

export default function Logofunc({data}) {
    const logos = data.logos;
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
        <Slider {...settings}>
            {logos.map((lg, index) => (
                <div key={index} className={` h-15 ${Styles.logoWrap}`}>
                  <Image className='m-auto object-cover' width={150} height={150} src={`https:${lg.image}`} alt="image"/>
                </div>
            ))}
        </Slider>
    </div>                                                                                                
  )
}
  
