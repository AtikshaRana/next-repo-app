"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Coltwo({index , data}) {
    // console.log(data);
    let cachedUrl = data.highlights[0].link[0].linksTo.cached_url.replace("us/", "");
    const background = {
        background : data.backgroundColor.color || 'auto',
    }
  return (
    <section className='colTwoRowsWithImage' style={background}>
        <div className="container">
            <div className={`row flex ${index % 2 === 0 ? '' : ' flex-row-reverse'}`}  >
                <div className="text-wrap w-2/4">
                    <h3>{data.highlights[0].title}</h3>
                    <p>{data.highlights[0].description}</p>
                    <Link className={`bg-black px-5 py-2 text-white rounded-lg inline-block  mt-4 mb-8`}  href={`https://construction.autodesk.com/${cachedUrl}`} target="_blank" > 
                    {data.highlights[0].link[0].text}
                    </Link>
                </div>
                <div className="imgWrap w-2/4">
                    <Image src={`https:${data.image[0].image}`} height={300} width={500} alt="image"/>
                </div>
            </div>
        </div>
    </section>
  )
}
