"use client";
import React, {  useState } from "react";
import { motion} from "framer-motion";

import { Typewriter } from "react-simple-typewriter";
// import { ContextData } from "../context/Context";
import { useParams } from "react-router-dom";

const Loader = () => {
  const [ setLoading] = useState(true);
  // const{sortedData} = ContextData()
  const {name} = useParams()
  return (
    <motion.div
      onAnimationComplete={() => setLoading(false)}
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5, easeIn: [0.22, 10.36, 1], delay: 3.5 }}
      className="slide-out text-white py-20 text-4xl min-h-screen z-10 bg-slate-900 flex justify-center items-center"
    >
      <div className="container mx-auto flex justify-center items-center flex-col">
        <h1 className=" text-2xl text-gray-400 mx-2 my-2 uppercase">
          hi there{" "}
          {/* {sortedData.firstName} */}
        </h1>
        <h2
          className={`loadertext md:text-8xl text-6xl font-bold my-4 uppercase overflow-hidden `}
        >
          <span className="lastname capitalize text-green-500 stroke-current bg-transparent">
            <Typewriter
              words={[`${name}`]}
              loop={1}
              cursor
              cursorStyle="_<"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={500}
             
            />
          </span>{" "}
        </h2>
        <h1 className="text-2xl capitalize outline-2 bg-transparent outline-offset-2 ">
          Welcomes you
        </h1>
        {/* <div className="bg-white rounde-full w-32 h-32 overflow-hidden rounded-full  mx-2 my-4 capitalize">
          <img src={skull} width={250} height={250} alt="skull logo" />
          <video
     style={{ maxWidth: "10%", width: "80px", margin: "0 auto" }}
     playsInline
     loop
     muted
     alt="All the devices"
     src={reactVideo}
     ref={videoEl}
   />
        </div> */}
      </div>
    </motion.div>
  );
};

export default Loader;
