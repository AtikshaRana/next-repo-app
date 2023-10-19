"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Intro({ data }) {
  console.log(data);
  return (
    <section>
      <div className="container">
        {data.component === "titleSubtitleDescriptionModule" && (
          <div className="intro text-center mx-auto w-4/5">
            <h2 className=" mb-5 opacity-70">{data.subtitle}</h2>
            <p>{data.description[0].markdown}</p>
          </div>
        )}
        {data.component === "box" &&
          data.content.map((text, index) => (
            <div key={index} className="intro text-center mx-auto w-4/5">
              <h2 className="mb-5 opacity-70">{text.subtitle}</h2>
              {text.description && <p>{text.description[0].markdown}</p>}
              <div className="imgWrap">
                {text.image && (
                  <Image
                    className=" mx-auto"
                    width={860}
                    height={400}
                    src={`https:${text.image[0].image}`}
                  />
                )}
              </div>
              <div className="flex justify-center mt-6">
                {text.component === "lifecycleModule" && (
                  <Link
                    className="bg-black px-5 py-2 text-white rounded-lg inline-block mt-4 mb-8"
                    href={`https://construction.autodesk.com/${text.cta[0].linksTo.cached_url.replace(
                      "us/",
                      ""
                    )}`}
                    target="_blank"
                  >
                    {text.cta[0].text}
                  </Link>
                )}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
