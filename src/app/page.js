

import Image from 'next/image';
import Tab from './component/tab';
// import bannerData from "../app/component/bannerData.json"
import Banner from './component/banner';
import Logowithintro from './component/logowithintro';
import Lifecycle from './component/lifecycle';
import Intro from './component/intro';
import Coltwo from './component/col-two';
import Cardslider from './component/card-slider';
import Footercta from './component/footer-cta';
import Dummy from './component/dummy';
// import Slider from './component/slider';

export default async function Home() {
  const response = await fetch("https://construction.autodesk.com/page-data/index/page-data.json");
  const data = await response.json()
  const footer = data.result.data.bottomNav.content;
  const story = data.result.data.story.content;
  const parsedFooter = JSON.parse(footer);
  const parsedStory = JSON.parse(story);
  const pageContent = parsedStory.body;
  // console.log(parsedFooter);
  const bannerData = pageContent.filter((banner) => banner.component === "heroFrame");
  // const logoData = pageContent.filter((data) => data.component === "customerLogosModule");
  // const intro = pageContent.filter((data) => data.component === "titleSubtitleDescriptionModule");
  // const lifecycle = pageContent.filter((data) => data.component === "lifecycleModule");
  

  return (
    <div>
      <Banner data={bannerData[0]}/>
      <Dummy data={pageContent}/>

      <div className='page-content'>
      {/* <Logowithintro data={logoData[0]}/> */}
      {/* <Lifecycle data={lifecycle[0]}/> */}
      {/* <Intro data={intro.slice(1, 2)[0]}/> */}
      {pageContent.map((data, index) => {
        if (data.component === "customerLogosModule") {
          return <Logowithintro key={index} data={data}/>
        }
        else if (data.component === "titleSubtitleDescriptionModule" || (data.component === "box"  && data.content.length === 5)) {
          return <Intro key={index} data={data}/>
        }
        else if (data.component === "lifecycleModule") {
          return <Lifecycle key={index} data={data} />;
        }
        else if (data.component === "twoColHighlightsWithImage") {
          return <Coltwo key={index} index={index} data={data} />;
        }
        else if (data.component === "tabsModule") {
          return <Tab key={index} data={data} />;
        }
         else if (data.component === "quoteCarousel") {
          return <Cardslider key={index} data={data}/>
        }
        else if (data.component === "ctaBannerModule") {
          return <Footercta key={index} data={data} />;
        }
         else {
          return null;
        }
      })}
      </div>
    </div>
  )
}

