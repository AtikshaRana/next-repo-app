"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Style from "./banner.module.scss";
// import React, { useEffect, useState } from "react";

export default function Banner({ data }) {
  let cachedUrl = data.button[0].linksTo.cached_url.replace("us/", "");
  return (
    <section className="hero-banner">
      <div className="img-wrap">
        <Image
          src={`https:${data.backgroundImage}`}
          height={1000}
          width={600}
          className="w-full h-full"
          alt="image"
        />
      </div>
      <div className="container">
        <div className="flex-wrap flex items-center relative">
          <div className="content lg:w-2/5  w-full">
            <span className={Style.subheading}>{data.alertText}</span>
            <h1 className={`pb-2.5 ${Style.mainheading}`}>{data.title}</h1>
            <p className={`text-white ${Style.description}`}>
              {data.description}
            </p>
            <Link className={`text-black px-5 py-2 bg-white rounded-lg inline-block  mt-4 mb-8`} href={`https://construction.autodesk.com/${cachedUrl}`} target="_blank">
              {data.button[0].text}
            </Link>
            <div className="StarRating flex">
            <Image src={`https:${data.appLinks[0].content[0].image}`} height={100}width={100} alt="img"/>
            <p className="text-white text-sm ml-2">{data.appLinks[0].content[1].content[0].text}</p>
            </div>
          </div>
          <div className={`w-3/5 xl:relative ${Style.videoContainer}`}>
            <video autoPlay playsInline loop muted>
            <source src="https://construction.autodesk.com/static/hero-out-vp9-transparent-8d7dbb4a520c8e9ef308d80a03569771.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
