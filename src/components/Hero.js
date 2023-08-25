import React, { useEffect, useState } from "react";
// import mypic from "../img/myimg.png";
import { motion } from "framer-motion";
import { BsArrowDownCircle, BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { Tilt } from "react-tilt";
import "../App.css";
import Loader from "./Loader";
import { ContextData } from "../context/Context";
import { useParams } from "react-router-dom";

const Hero = () => {
  const { sortedData, } = ContextData();
  const { name } = useParams();
  console.log(name,"from use params")
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <motion.div
      initial={{ y: 950 }}
      animate={{ y: 0 }}
      transition={{ ease: [0.6, 0.26, 0.32, 0.9], duration: 0.1 }}
      className=" py-20 bg-slate-950 text-white min-h-screen mybg"
      id="home"
    >
      <div className="container mx-auto ">
        <div className="row flex md:flex-row flex-col justify-between items-center py-8 px-8">
          <div className="headingContent md:w-1/2 w-full flex flex-col justify-center items-center  px-8">
            <div className="content">
              <h1 className=" text-2xl text-gray-400 mx-2 my-2 uppercase">
                hi there
              </h1>
              <motion.h2
                initial={{
                  x: -100,
                  scale: 0.5,
                }}
                animate={{
                  x: 0,
                  scale: 1,
                }}
                transition={{ duration: 0.5 }}
                className={`md:text-8xl text-6xl fullname font-bold my-4 uppercase overflow-hidden `}
              >
                <span className="firstname">{sortedData.firstName}</span>{" "}
                <span className="lastname text-green-500 stroke-current bg-transparent">
                {sortedData.lastName}
                </span>{" "}
              </motion.h2>
              <h1 className="text-2xl capitalize outline-2 bg-transparent outline-offset-2 ">
                Experience Developer and Cloud Engineer{" "}
              </h1>
              <p className="text-zinc-500 mx-2 my-4 capitalize">
                a professional developer and cloud engineer with 2+ yrs of
                experience{" "}
              </p>
            
            </div>
            <div className="social">
              <ul className="list-none flex justify-center items-center">
                <Link href={"/"}>
                  <motion.li
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="text-3xl text-green-500 hover:text-green-600 mx-2"
                  >
                    <BsLinkedin />
                  </motion.li>{" "}
                </Link>
                <Link href={"/"}>
                  <motion.li
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="text-3xl text-green-500 hover:text-green-600 mx-2"
                  >
                    <BsGithub />
                  </motion.li>{" "}
                </Link>
                <Link href={"/"}>
                  <motion.li
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="text-3xl text-green-500 hover:text-green-600 mx-2"
                  >
                    <MdEmail />
                  </motion.li>{" "}
                </Link>
              </ul>
            </div>
          </div>
          {/* img section */}
          <motion.div
            // variants={container}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            className={`  Imagecontent2 flex justify-between items-center md:mt-0 mt-6`}
          >
            <div>
              <Tilt
                // options={defaultOptions}
                style={{ height: 380, width: 350 }}
              >
                <div className="imgbox border-2 border-zinc-500 p-2 shadow-lg ">
                  <img
                    src={sortedData.avatar}
                    alt="my img "
                    className="border border-zinc-600 "
                    width={400}
                    height={400}
                  />
                </div>
              </Tilt>
            </div>
          </motion.div>
        </div>
        <h1
          data-aos="zoom-in"
          data-aos-delay="800"
          className=" mynametext ease-in duration-200 uppercase transition-all md:text-8xl animate-pulse text-6xl text-zinc-600 text-center justify-items-stretch hover:text-green-500 hover:cursor-pointer  tracking-widest"
        >
          {sortedData.firstName+" "+sortedData.lastName}
        </h1>
      </div>
      <div className=" flex justify-center mt-6 mb-4">
        <Link to="experience" spy={true} smooth={true} duration={500}>
          <h1 className="text-3xl animate-bounce hover:cursor-pointer text-center text-green-500">
            <BsArrowDownCircle />
          </h1>
        </Link>
      </div>
    </motion.div>
    
  );
};

export default Hero;
