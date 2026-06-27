import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] lg:mt-0 lg:pt-2 mt-25 pt-10 md:mt-20 md:pt-8 lg:pb-0 pb-6 text-center transition-all">

      <div className="lg:text-[9vw] text-[13vw] uppercase lg:leading-[8.5vw] leading-[11vw]">The spark</div>
      <div className="lg:text-[9vw] text-[13vw] uppercase lg:leading-[8.5vw] leading-[11vw] flex items-center justify-center">
        Who
        <div className="h-[7vw] w-[16vw] rounded-full -mt-5 overflow-hidden ">
          <Video />
        </div>
      </div>
      <div className="lg:text-[9vw] text-[13vw] uppercase lg:leading-[8.5vw] leading-[11vw]">generates</div>
      <div className="lg:text-[9vw] text-[13vw] uppercase lg:leading-[8.5vw] leading-[11vw]">there</div>
      <div className="lg:text-[9vw] text-[13vw] uppercase lg:leading-[8.5vw] leading-[11vw]">creativity</div>
    </div>
  );
};

export default HomeHeroText;
