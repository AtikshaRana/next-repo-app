"use client";
import React from 'react'
import Image from 'next/image';
import { Component } from "react";
import Slider from "react-slick";
import Styles from './logo.module.scss'
import Logofunc from './logos';

// export function Logofunc({logos}){
//   {logos.map((lg, index) => (
//     <div key={index} className={`${Styles.logoWrap}`}>
//       <Image className=' object-cover' width={120} height={100} src={`https:${lg.image}`} alt="image"/>
//     </div>
// ))}
// }

import { useEffect, useState } from 'react';

export default function Logowithintro({ data }) {
  const logos = data.logos;
  const [isMobile, setIsMobile] = useState(false);

  // Use a useEffect to check the screen width when the component mounts
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 991);
    };

    // Add an event listener to listen for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize initially to set the correct state based on the initial width
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const setting = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <section className='logoWithCOntent md:pb-0'>
      <div className="container">
        <h5 className=' text-black text-center font-semibold text-xl'>
          {data.description.replace(/####|\*\*/g, '')}
        </h5>
        {isMobile ? (
            <Logofunc data={data} />
          ) : (
            <div className={`flex p-9 ${Styles.logosWrap}`}>
         
              {logos.map((lg, index) => (
                <div key={index} className={`${Styles.logoWrap}`}>
                <Image className=' object-cover' width={120} height={100} src={`https:${lg.image}`} alt="image"/>
                </div>
                
            ))}
            </div>
          )}
      
      </div>
    </section>
  );
}
