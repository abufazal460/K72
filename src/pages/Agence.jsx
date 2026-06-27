import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imagesDivRef = useRef(null);
  const imagesRef = useRef(null);

  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  ];

  useGSAP(() => {
    gsap.to(imagesDivRef.current, {
      scrollTrigger: {
        trigger: imagesDivRef.current,
        start: "top 20%",
        end: "top -165%",
        pin: true,
        pinSpacing: true,
        // pinReparent: true,
        pinType: "transform",
        anticipatePin: 1,
        invalidateOnRefresh: true,
        scrub: 1,
        onUpdate: (elem) => {
          let imagesIndex;
          if (elem.progress < 1) {
            imagesIndex = Math.round(elem.progress * imageArray.length);
          } else {
            imagesIndex = imageArray.length - 1;
          }

          imagesRef.current.src = imageArray[imagesIndex];
        },
      },
    });
  }, []);
  return (
    <>
      <div className="section1 relative py-1 bg-[#ffffff] text-black">
        <div
          ref={imagesDivRef}
          className="absolute overflow-hidden  w-[15vw] h-[20vw] rounded-2xl top-[12vw] left-[30vw]"
        >
          <img
            ref={imagesRef}
            className="rounded-2xl h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt="no images"
          />
        </div>

        <div className="relative font-[font2]">
          <div className="mt-[50vh]">
            <h1 className="text-[20vw] leading-none uppercase text-center lg:px-20 px-0">
              Sixty-seventh Twelve
            </h1>
          </div>
          <div className="lg:pl-[40%] p-3">
            <p className="lg:text-5xl text-xl leading-none">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Our curiosity fuels our creativity. We remain humble and say no to
              big egos, even yours. A brand is alive. It has values, a
              personality, a history. If we forget that, we might achieve good
              short-term results, but we'll kill it in the long run. That's why
              we're committed to providing perspective, to building influential
              brands.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 lg:h-screen h-full w-screen lg:mt-25 bg-[#ffffff] text-black px-3 lg:px-0">
        <div className="flex lg:justify-center justify-between lg:h-[50vh] h-[40vh]">
          <div className="w-[30%]  h-full  flex items-center">
            <h1 className="font-[font2] text-lg">Expertise</h1>
          </div>
          <div className="w-[60%]  h-full flex items-center">
            <h1 className="px-10 leading-6 font-[font2] text-lg text-black">
              Strategy <br /> Advertisement <br /> Branding Design <br />{" "}
              Content
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap lg:justify-center justify-between  lg:h-[50vh] h-[80vh] w-full">
          <div className="lg:w-[30%] md:w-[30%] w-full lg:h-full h-[20vh]">
            <p className="font-[font2] text-lg lg:pr-20 pr-0  leading-6">
              Our projects are born in humility, grow in curiosity and live
              thanks to creativity in all its forms.
            </p>
          </div>
          <div className="lg:w-[30%] md:w-[30%] w-full lg:h-full h-[20vh]">
            <p className="font-[font2] text-lg lg:px-10 px-0  leading-6">
              Our creative process thrives in an environment where talent is
              encouraged to explode. Where we feel free to be the best version
              of ourselves.
            </p>
          </div>
          <div className="lg:w-[30%] md:w-[30%] w-full lg:h-full h-[20vh]">
            <p className="font-[font2] text-lg lg:px-25 px-0 leading-6">
              Our culture is openness to others. Period. The entire crew
              participates in building an agency we are proud of.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agence;
