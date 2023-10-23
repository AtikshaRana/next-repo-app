"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Tab({ data }) {
  const tabData = data.tabs;
  const [activeTab, setActiveTab] = useState(0);
  const [liHeights, setLiHeights] = useState([]);
  const [top, setTop] = useState([]);
  const ulRef = useRef(null);
  useEffect(() => {
    if (ulRef.current) {
      const listItems = ulRef.current.querySelectorAll('li');
      listItems.forEach((li, index) => {
        ScrollTrigger.create({
          trigger: li,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => {
            setActiveTab(index);
          },
          onLeaveBack: () => {
            if (index > 0) {
              setActiveTab(index - 1);
            }
          },
          markers: true, // Enable markers for debugging
        });
      });

      // Create a ScrollTrigger for the entire section
      const section = document.querySelector('.tab-with-content');
      const sectionEnd = section.offsetTop + section.offsetHeight;
      
      ScrollTrigger.create({
        trigger: '.tab-with-content',
        start: '10% 10%',
        end: `+=${sectionEnd}px`, // Adjust as needed
        markers: true, // Enable markers for debugging
      });
    }
  }, []);

  useEffect(() => {
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
  const ttp = (activeTab * liHeights[activeTab] + (activeTab * 8))
  const bordrHeight = {
    height: liHeights[activeTab] || 'auto',
    top: `${ttp}px` || 'auto',
  };
  const [sectionTop, setSectionTop] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const section = document.getElementsByClassName('tab-with-content')[0];
  //   if (section) {
  //     const sectionPosition = section.getBoundingClientRect();
  //     const newSectionHeight = sectionPosition.y;
  //     const top = sectionPosition.top;
  //     setSectionTop(top);
  //     setSectionHeight(newSectionHeight);
  //     if (window.scrollY > 0) {
  //       console.log(sectionTop);
  //     }
  //     if (sectionHeight < 124) {
  //       console.log("djhnka");
  //       setActiveTab(0);
  //       setTop(0 * liHeights[activeTab] + (0 * 8));
  //     } else if (sectionHeight > 124 && sectionHeight < 248) {
  //       setActiveTab(1);
  //       setTop(1 * liHeights[activeTab] + (1 * 8));
  //     } else if (sectionHeight > 248 && sectionHeight < 372) {
  //       setActiveTab(2);
  //       setTop(2 * liHeights[activeTab] + (2 * 8));
  //     }else if (sectionHeight > 372 && sectionHeight < 496) {
  //       setActiveTab(3);
  //       setTop(3 * liHeights[activeTab] + (3 * 8));
  //     }else if (sectionHeight > 496 && sectionHeight < 520) {
  //       setActiveTab(4);
  //       setTop(4 * liHeights[activeTab] + (4 * 8));
  //     }
  //     console.log(sectionPosition);
  //     console.log(sectionHeight);
  //   };

  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [sectionTop]);
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
              <span className={`sideBorder ${tabData[activeTab].index !== "" ? 'bordrHeight ': ''}`} style={bordrHeight}></span>
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
          <div className="flex-wrap w-3/4 rel">
            {tabData.map((content, index) => {{
            return <div key={index}  className={`tab-content ${index === activeTab ? "active" : "" }`}>
              <div className={`flex content-wrap`}>
                <div className="content w-2/4 px-10 py-10">
                  <h3 className="text-left">
                    {content.content[0].highlights[0].title}
                  </h3>
                  <p className="text-left">
                    {content.content[0].highlights[0].description}{' '}
                  </p>
                  <Link
                    className="cta flex items-center" href={`https://construction.autodesk.com/${content.content[0].highlights[0].link[0].link.cached_url.replace(
                      'us/',
                      ''
                    )}`}
                    target="_blank">
                      <span className="rightArrow pr-2">
                      <Image
                    width={22}
                    height={22}
                    src={`https:${content.content[0].highlights[0].link[0].icon[0].image}`}
                    alt="image"/>
                      </span>
                      <span>
                        {content.content[0].highlights[0].link[0].textToHyperlink}
                      </span>
                  </Link>
                </div>
                <div className="img-wrap w-2/4">
                  <Image
                    width={400}
                    height={250}
                    src={`https:${content.content[0].image[0].image}`}
                    alt="image"
                  />
                </div>
              </div>
            </div>
            }})
            }
          </div>
        </div>
      </div>
    </section>
  );
}

// function Tab({ data }) {
//   const tabData = data.tabs;
//   const [activeTab, setActiveTab] = useState(0);
//   const ulRef = useRef(null);

//   useEffect(() => {
//     if (ulRef.current) {
//       const listItems = ulRef.current.querySelectorAll('li');

//       listItems.forEach((li, index) => {
//         ScrollTrigger.create({
//           trigger: li,
//           start: 'top center',
//           onEnter: () => setActiveTab(index),
//         });
//       });
//     }
//   }, []);

//   return (
//     <section className="tab-with-content">
//       <div className="container">
//         <div className="flex">
//           <div className="w-1/4 link-wrap">
//             <ul className="w-1/4" ref={ulRef}>
//               {tabData.map((tab, index) => (
//                 <li
//                   key={index}
//                   className={`px-2 py-1 mb-2 text-black tab-links ${
//                     index === activeTab ? 'border-left' : ''
//                   }`}
//                 >
//                   <span className="cursor-pointer">{tab.title}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="flex-wrap w-3/4 rel">
//             {tabData.map((content, index) => (
//               <div
//                 key={index}
//                 className={`tab-content ${index === activeTab ? 'active' : ''}`}
//               >
//                 <div className="flex content-wrap">
//                   <div className="content w-2/4 px-10 py-10">
//                     <h3 className="text-left">
//                       {content.content[0].highlights[0].title}
//                     </h3>
//                     <p className="text-left">
//                       {content.content[0].highlights[0].description}{' '}
//                     </p>
//                   </div>
//                   <div className="img-wrap w-2/4">
//                     <img
//                       width={400}
//                       height={250}
//                       src={`https:${content.content[0].image[0].image}`}
//                       alt="image"
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
export default Tab;
