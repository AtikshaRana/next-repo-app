"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Lifecycle({data}) {
    let cachedUrl = data.cta[0].linksTo.cached_url.replace("us/", "");
  return (
    <section >
      {data.component === "lifecycleModule" && 
       <div className="container">
          <div className="imgWrap">
            <Image className=" mx-auto" width={860} height={400} src={`https:${data.image[0].image}`}/>
          </div>
          <div className="flex justify-center mt-6">
          <Link className={`bg-black px-5 py-2 text-white rounded-lg inline-block  mt-4 mb-8`}  href={`https://construction.autodesk.com/${cachedUrl}` } target="_blank" >{data.cta[0].text}</Link >
          </div>
       </div>
      }
    </section>
  );
}
8