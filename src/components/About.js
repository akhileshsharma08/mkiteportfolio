import React from "react";
import TechndWork from "./TechndWork";
import { ContextData } from "../context/Context";
import { Teams } from "./Teams";

const About = () => {
  const { sortedData } = ContextData();
  return (
    <>
      <div className="exp-section py-8 bg-slate-900 text-white" id="experience">
        <div className="container my-4 mx-auto">
          <div className="row flex justify-center md:flex-row flex-col items-center mx-auto my-8">
            <div className="md:w-1/2 w-full text-center">
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className={`titles text-7xl text-center  mt-4 text-gray-700 -skew-y-6`}
              >
                Experience
              </h1>
              <div className="flex justify-center items-center">
                <div
                  data-aos="fade-up"
                  data-aos-delay="600"
                  className="mx-4 mb-2"
                >
                  <h2 className="text-green-500 font-semibold">
                    <span className="text-5xl">{sortedData.experience}+ </span>{" "}
                  </h2>
                  <p>years of experience</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="700">
                  <p>
                    <span className="text-green-500 text-5xl font-semibold">
                      {sortedData.projects}
                    </span>{" "}
                  </p>
                  <p>projects</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full md:p-0 p-4">
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="text-gray-500 font-bold my-2 capitalize"
              >
                Problem Solver
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="600"
                className="capitalize my-2 text-xl "
              >
                i enjoying solving problems with clean scalable solutions.i have
                genuine passion of aspiring dvelopment.{" "}
              </p>
              <p
                data-aos="fade-up"
                data-aos-delay="700"
                className=" text-gray-500 capitalize font-semibold"
              >
                i have strong foundation in frontend development wit
                reactJs,NextJs ,also have experience in cloud operations with
                devops mdthodology.
              </p>
            </div>
          </div>
          <TechndWork />
          <Teams/>
        </div>
      </div>
    </>
  );
};

export default About;
