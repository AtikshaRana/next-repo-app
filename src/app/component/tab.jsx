"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Tab({ data }) {
  const tabData = data.tabs;
  const [activeTab, setActiveTab] = useState(0);
  const [liHeights, setLiHeights] = useState([]);
  const [top, setTop] = useState([]);
  // console.log(data);
  const ulRef = useRef(null);

  useEffect(() => {
    // Calculate and store the heights of all list items when the component mounts
    if (ulRef.current) {
      const listItems = ulRef.current.querySelectorAll('li');
      const heights = Array.from(listItems).map((li) => li.clientHeight);
      setLiHeights(heights);
    }
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setTop(index * liHeights[activeTab] + (index * 8))
  };

  const bordrHeight = {
    height: liHeights[activeTab] || 'auto',
    top: `${top}px` || 'auto',
  };

  return (
    <section className="tab-with-content">
      <div className="container">
        <div className="flex">
          <div className="w-1/4 link-wrap">
            <ul className="w-1/4" ref={ulRef}>
              {tabData.map((tab, index) => (
                <li
                  key={index}
                  className={`px-2 py-1 mb-2 text-black tab-links ${
                    index === activeTab ? 'border-left' : ''
                  }`}
                  onClick={() => handleTabClick(index)}>
                  <span className="cursor-pointer">{tab.title}</span>
                </li>
              ))}
              <span className={`sideBorder ${tabData[activeTab].index !== " " ? 'bordrHeight ': ''}`} style={bordrHeight}></span>
            </ul>
            <div className="btnWrap">
            <Link
                  className="cta flex items-center mt-6" href={`https://construction.autodesk.com/${data.cta[0].link.cached_url.replace(
                    'us/',
                    ''
                  )}`}
                  target="_blank">
                    <span className="rightArrow pr-2">
                    <Image
                  width={22}
                  height={22}
                  src={`https:${tabData[activeTab].content[0].highlights[0].link[0].icon[0].image}`}
                  alt="image"/>
                    </span>
                    <span>
                      {data.cta[0].textToHyperlink}
                    </span>
                </Link>
            </div>

          </div>
          <div className="tab-content w-3/4">
            <div className="flex">
              <div className="content w-2/4 px-10 py-10">
                <h3 className="text-left">
                  {tabData[activeTab].content[0].highlights[0].title}{' '}
                </h3>
                <p className="text-left">
                  {tabData[activeTab].content[0].highlights[0].description}{' '}
                </p>
                <Link
                  className="cta flex items-center" href={`https://construction.autodesk.com/${tabData[activeTab].content[0].highlights[0].link[0].link.cached_url.replace(
                    'us/',
                    ''
                  )}`}
                  target="_blank">
                    <span className="rightArrow pr-2">
                    <Image
                  width={22}
                  height={22}
                  src={`https:${tabData[activeTab].content[0].highlights[0].link[0].icon[0].image}`}
                  alt="image"/>
                    </span>
                    <span>
                      {tabData[activeTab].content[0].highlights[0].link[0].textToHyperlink}
                    </span>
                </Link>
              </div>
              <div className="img-wrap w-2/4">
                <Image
                  width={400}
                  height={250}
                  src={`https:${tabData[activeTab].content[0].image[0].image}`}
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tab;
