import React, { useEffect, useState } from "react";
import { TechIcons } from "./Techicons";
import { defaultSkills } from "./Techicons";

const Skills = () => {
  const [mycategory, setMyCategory] = useState("");
  // console.log(mycategory, "cate");
  const [techskill, setTechskill] = useState([]);

  useEffect(() => {
    const updatedSkill = TechIcons.filter((item) => {
      return item.category === `${mycategory}`;
    });
    setTechskill(updatedSkill);
  }, [mycategory]);

  return (
    <div className="bg-slate-900  py-16">
      <div className="mainbox flex justify-center items-center flex-col">
        <div className="md:w-1/2 w-full my-4">
          <ul
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-green-500 flex justify-center md:flex-row items-center flex-wrap mb-4"
          >
            <li
              onClick={() => {
                setMyCategory("frontend");
              }}
              className={`bg-gray-700 text-center px-2 flex rounded-full font-bold justify-center items-center w-32 h-32 py-1 mb-4 mx-4 border hover:outline-green-500 hover:bg-green-500 hover:text-white ${
                mycategory === "frontend" ? "bg-green-500 text-white" : ""
              }`}
            >
              Front-End
            </li>
            <li
              onClick={() => {
                setMyCategory("backend");
              }}
              className={`bg-gray-700 text-center px-2 flex rounded-full font-bold justify-center items-center w-32 h-32 py-1 mb-4 mx-4 border hover:outline-green-500 hover:bg-green-500 hover:text-white ${
                mycategory === "backend" ? "bg-green-500 text-white" : ""
              }`}
            >
              Back-End
            </li>
            <li
              onClick={() => {
                setMyCategory("other");
              }}
              className={`bg-gray-700 text-center px-2 flex rounded-full font-bold justify-center items-center w-32 h-32 py-1 mb-4 mx-4 border hover:outline-green-500 hover:bg-green-500 hover:text-white ${
                mycategory === "other" ? "bg-green-500 text-white" : ""
              }`}
            >
              Other
            </li>
          </ul>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="md:w-1/2 w-full py-5 rounded"
        >
          <div className="skillbox flex  justify-center items-center flex-wrap">
            {(techskill.length === 0 ? defaultSkills : techskill).map((ele) => (
              <div className="box mx-2" key={ele.id}>
                <div
                  data-aos="fade-up"
                  data-aos-delay="600"
                  className="flex mb-2  h-16 w-16 rounded-full bg-white overflow-hidden p-2"
                >
                  <img
                    src={ele.imgUrl}
                    alt={ele.name}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
