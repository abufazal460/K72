import React from "react";

const ProjectCard = (props) => {
  return (
    <>
      <div className="group lg:w-1/2 w-full h-full transition-[border-radius] hover:rounded-[60px] overflow-hidden relative bg-[#e5e5e5]">
        <img className="w-full h-full object-cover" src={props.image1} alt="" />
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 absolute top-0 left-0 h-full w-full bg-black/10 flex justify-center items-center">
          <h2 className="uppercase text-5xl font-[font2] border-2 -p-20 px-4 pt-3  rounded-full ">
            View The Projects
          </h2>
        </div>
      </div>
      <div className="group lg:w-1/2 w-full h-full transition-[border-radius] hover:rounded-[60px] overflow-hidden relative bg-[#e5e5e5]">
        <img className="w-full h-full object-cover" src={props.image2} alt="" />
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 absolute top-0 left-0 h-full w-full bg-black/10 flex justify-center items-center">
          <h2 className="uppercase text-5xl font-[font2] border-2 -p-20 px-4 pt-3  rounded-full ">
            View The Projects
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
