import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="lg:w-[1vw] w-0"></div>
        <div className="xl:w-[25vw] lg:w-[35%] md:w-[50%] sm:w-[80%]  w-full">
          <p id="first-line" className="lg:py-10 lg:px-10 px-4 py-4 font-[font2] lg:mb-0 mb-5 text-sm ">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72
            is an agency that carefully considers every action to nurture the
            brand. Tomorrow, in 5 months, and in 5 years. We seek out the
            friction that creates the spark to generate emotion. To ensure an
            honest relationship, we are unfiltered; we say what needs to be
            said, we do what needs to be &nbsp; done.
          </p>
        </div>
      </div>
      <div className="font-[font2] flex items-center justify-center gap-5">
        <Link
          className="text-[6vw] rounded-full px-[4vw] leading-[6vw] pt-2 flex border-3 font-extrabold border-white uppercase transition-all duration-300 ease-in hover:text-[#D3FD50] hover:border-[#D3FD50]"
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className="text-[6vw] rounded-full px-[4vw] leading-[6vw] pt-2 flex border-3 font-extrabold border-white uppercase transition-all duration-300 ease-in hover:text-[#D3FD50] hover:border-[#D3FD50]"
          to="/agence"
        >
          Agency
        </Link>
      </div>
    </>
  );
};

export default HomeBottomText;
