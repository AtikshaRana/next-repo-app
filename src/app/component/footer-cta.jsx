"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function Footercta({data}) {
  // console.log(data);
  return (
    <section className="footerCta">
    <div className="img-wrap">
      <Image
        src={`https:${data.bgImage[0].image}`}
        height={1000}
        width={600}
        className="w-full h-full"
        alt="image"
      />
    </div>
    <div className="container">
      <div className="flex items-center relative">
        <div className="content w-2/5">
          <h3 className={`pb-2.5  text-white mt-32`}>{data.headline.replace('####', '')}</h3>
          <Link className={`text-black px-5 py-2 bg-white rounded-lg inline-block  mt-4 mb-8 mr-4`} href={`https://construction.autodesk.com/${data.button[0].linksTo.cached_url.replace('us/', '')}`} target="_blank">
            {data.button[0].text}
          </Link>
          <Link className={`text-black px-5 py-2 bg-white rounded-lg inline-block  mt-4 mb-8`} href={`https://construction.autodesk.com/${data.button[1].linksTo.cached_url.replace('us/', '')}`} target="_blank">
            {data.button[1].text}
          </Link>
        </div>
      </div>
    </div>
  </section>
  )
}
