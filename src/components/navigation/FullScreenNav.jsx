import React, { useContext, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { NavbarContext } from "../../context/NavContext";

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null);
  const fullScreenRef = useRef(null);

  const [navOpen, setNavOpen] = useContext(NavbarContext);

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to("#fullscreennav", {
      display: "block",
    });

    tl.to(".stair", {
      delay: 0.2,
      height: "100%",
      stagger: {
        amount: -0.3,
      },
    });

    tl.to(".links", {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3,
      },
    });
    tl.to(".navlink", {
      opacity: 1,
    });
    tl.to(".cross", {
      x: 0,
      opacity: 1,
    });
  }
  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to(".cross", {
      opacity: 0,
      x: 40,
    });
    tl.set(".links", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1,
      },
    });

    tl.to(".stair", {
      height: 0,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".navlink", {
      opacity: 0,
    });
    tl.to("#fullscreennav", {
      display: "none",
    });
  }

  useGSAP(
    function () {
      if (navOpen) {
        gsapAnimation();
      } else {
        gsapAnimationReverse();
      }
    },
    { dependencies: [navOpen] },
  );
  return (
    <div
      id="fullscreennav"
      ref={fullScreenRef}
      className="fixed top-0 left-0 w-full h-screen overflow-hidden hidden z-[999]"
    >
      <div className="h-screen fixed top-0 left-0 w-full flex">
        <div className="stair h-0 w-1/5 bg-black"></div>
        <div className="stair h-0 w-1/5 bg-black"></div>
        <div className="stair h-0 w-1/5 bg-black"></div>
        <div className="stair h-0 w-1/5 bg-black"></div>
        <div className="stair h-0 w-1/5 bg-black"></div>
      </div>
      <div className="relative" ref={fullNavLinksRef}>
        <div className="navlink flex w-full items-start justify-between">
          <div className="lg:p-3 p-2">
            <div className="lg:w-36 w-24">
              <svg
                className="w-full"
                xmlns="http://www.w3.org/2000/svg"
                // width="103"
                // height="44"
                fill="white"
                viewBox="0 0 103 44"
              >
                <path
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
              </svg>
            </div>
          </div>
          <div
            className="cross lg:h-30 h-50 lg:w-30 w-15 relative cursor-pointer pt-2 translate-x-40 opacity-0"
            onClick={() => setNavOpen(false)}
          >
            <div className="cross-elem lg:h-40 h-18 w-[2.2px] -rotate-50 origin-top absolute bg-white"></div>
            <div className="cross-elem lg:h-40 h-18 w-[2.2px]  right-0 rotate-50 origin-top absolute bg-white"></div>
            <div></div>
          </div>
        </div>
        <div id="all-lins" className="py-5">
          <div
            style={{ transform: "rotateX(90deg)" }}
            className="links relative opacity-0 border-y-1 leading-none border-[#747775]"
          >
            <h1 className="font-[font2] text-[9vw] uppercase tracking-tight leading-[0.7] pt-6 text-center">
              Projets
            </h1>
            <div className="move absolute flex top-0 bg-[#D3FD50] text-black">
              <div className="moveX flex items-center">
                <h2 className="font-[font2] whitespace-nowrap px-10 text-[9vw] uppercase tracking-tight leading-[0.7] pt-6 text-center">
                  To see everything
                </h2>
                <img
                  className="h-22 w-60 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt=""
                />
                <h2 className="font-[font2] whitespace-nowrap px-10 text-[9vw] pr-10 uppercase tracking-tight leading-[0.7] pt-6 text-center">
                  To see everything
                </h2>
                <img
                  className="h-22 w-60 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="font-[font2] whitespace-nowrap px-10 text-[9vw] uppercase tracking-tight leading-[0.7] pt-6 text-center">
                  To see everything
                </h2>
                <img
                  className="h-22 w-60 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt=""
                />
                <h2 className="font-[font2] whitespace-nowrap px-10 text-[9vw] uppercase tracking-tight leading-[0.7] pt-6 text-center">
                  To see everything
                </h2>
                <img
                  className="h-22 w-60 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="links relative border-y-1 leading-none border-[#747775]">
            <h1 className="font-[font2] text-[9vw] uppercase tracking-tight leading-[0.7] pt-6 text-center">
              Agence
            </h1>
            <div className="move absolute flex top-0 bg-[#D3FD50] text-black">
              <div className="moveX flex items-center">
                <h2 className="font-[font2] whitespace-nowrap px-10 text-[9vw] uppercase tracking-tight leading-[0.7] pt-6 text-center">
                  To know everything
                </h2>
                <img
                  className="h-22 w-60 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec"
                  alt=""
                />
                <h2 className="font-[font2] whitespace-nowrap px-10 text-[9vw] pr-10 uppercase tracking-tight leading-[0.7] pt-6 text-center">
                  To know everything
                </h2>
                <img
                  className="h-22 w-60 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="font-[font2] whitespace-nowrap px-10 text-[9vw] uppercase tracking-tight leading-[0.7] pt-6 text-center">
                  To know everything
                </h2>
                <img
                  className="h-22 w-60 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt=""
                />
                <h2 className="font-[font2] whitespace-nowrap px-10 text-[9vw] uppercase tracking-tight leading-[0.7] pt-6 text-center">
                  To know everything
                </h2>
                <img
                  className="h-22 w-60 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="links relative border-y-1 leading-none border-[#747775]">
            <h1 className="font-[font2] text-[9vw] uppercase tracking-tight leading-[0.7] pt-6 text-center">
              Contact
            </h1>
            <div className="move absolute flex top-0 bg-[#D3FD50] text-black">
              <div className="moveX flex items-center">
                <h2 className="font-[font2] whitespace-nowrap px-10 text-[9vw] uppercase tracking-tight leading-[0.7] pt-6 text-center">
                  To send a
                </h2>
                <img
                  className="h-22 w-60 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt=""
                />
                <h2 className="font-[font2] whitespace-nowrap px-10 text-[9vw] pr-10 uppercase tracking-tight leading-[0.7] pt-6 text-center">
                  To send a
                </h2>
                <img
                  className="h-22 w-60 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="font-[font2] whitespace-nowrap px-10 text-[9vw] uppercase tracking-tight leading-[0.7] pt-6 text-center">
                  To send a
                </h2>
                <img
                  className="h-22 w-60 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt=""
                />
                <h2 className="font-[font2] whitespace-nowrap px-10 text-[9vw] uppercase tracking-tight leading-[0.7] pt-6 text-center">
                  To send a
                </h2>
                <img
                  className="h-22 w-60 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="links relative border-y-1 leading-none border-[#747775]">
            <h1 className="font-[font2] text-[9vw] uppercase tracking-tight leading-[0.7] pt-6 text-center">
              Blogue
            </h1>
            <div className="move absolute flex top-0 bg-[#D3FD50] text-black">
              <div className="moveX flex items-center">
                <h2 className="font-[font2] whitespace-nowrap px-10 text-[9vw] uppercase tracking-tight leading-[0.7] pt-6 text-center">
                  Read the articles
                </h2>
                <img
                  className="h-22 w-60 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a"
                  alt=""
                />
                <h2 className="font-[font2] whitespace-nowrap px-10 text-[9vw] pr-10 uppercase tracking-tight leading-[0.7] pt-6 text-center">
                  Read the articles
                </h2>
                <img
                  className="h-22 w-60 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="font-[font2] whitespace-nowrap px-10 text-[9vw] uppercase tracking-tight leading-[0.7] pt-6 text-center">
                  Read the articles
                </h2>
                <img
                  className="h-22 w-60 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt=""
                />
                <h2 className="font-[font2] whitespace-nowrap px-10 text-[9vw] uppercase tracking-tight leading-[0.7] pt-6 text-center">
                  Read the articles
                </h2>
                <img
                  className="h-22 w-60 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
