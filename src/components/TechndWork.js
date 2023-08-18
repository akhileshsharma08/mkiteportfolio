import React from "react";
// import { ContextData } from "../context/Context";
import Skills from "./Skills";

const TechndWork = () => {
  // const {sortedData} = ContextData()
  return (
    <div>
      <div className="container py-12 mx-auto px-4">
        <div className="row flex justify-center md:flex-row flex-col-reverse items-center ">
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="md:w-1/2 w-full py-4 md:mb-0 mb-4 md:p-0 px-4 bg-yellow4 "
          >
            <h1
              className={`titles text-7xl text-center  mt-4 text-gray-700 -skew-y-6`}
            >
              My Expertise
            </h1>
          </div>
        </div>
        
        <Skills/>
      </div>
    </div>
  );
};

export default TechndWork;
