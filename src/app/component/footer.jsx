"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer({ data }) {
  return (
    <footer>
      <div className="container">
        <div className="wrap flex justify-between w-full">
          {data.menus.map((menu, index) => {
            return (
              <ul key={index} className=" w-44">
                <h5 className={` text-white mb-8`}>
                  {menu.heading[0].textToHyperlink}
                </h5>
                {menu.menu1.map((list, index) => (
                  <li key={index} className={` text-white mb-3 ${list.icon.length > 0 ? 'flex items-center' : ''}` }>
                    {list.icon.length > 0 && (
                         <div className="iconWrap mr-2"><Image
                          src={`https:${list.icon[0].image}`}
                          height={18}
                          width={18}
                          alt="image"
                        />
                      </div>
                    )}
                    <Link
                      className=" text-white"
                      href={`https://construction.autodesk.com/${list.link.cached_url}`}
                      target="_blank">
                      {list.textToHyperlink}
                    </Link>

                  </li>
                ))}
              </ul>
            );
          })}
        </div>
        <div className="flex mt-5 items-end">
            <div className="rightText w-8/12 pr-2">
                <span className="text-sm">Privacy Settings | Privacy/Cookies | Autodesk Privacy | Legal | Report Noncompliance | Do Not Sell My Personal Data | © 2023 Autodesk, Inc. All rights reserved</span>
            </div>
            <div className="shareIcon flex w-2/5 ml-36 items-center">
                {data.socialLinks.map((links, index)=>{
                    return <div key={index} className="iconWrap mr-3">
                       <Link
                      className=" text-white"
                      href={links.link.cached_url}
                      target="_blank">
                        <Image
                          src={`https:${links.contentToHyperlink[0].image}`}
                          height={24}
                          width={24}
                          alt="image"
                        />
                    </Link>
                    </div>
                })}
            </div>
        </div>
      </div>
    </footer>
  );
}
