
import React  from "react";

import { SiGooglehome } from "react-icons/si";
import { TbCertificate2 } from "react-icons/tb";
import { MdOutlineContacts } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
// import { ContextData } from "../context/Context";
import '../App.css'
import { ContextData } from "../context/Context";
import { useParams } from "react-router-dom";

const Navbar = () => {
  const {sortedData}= ContextData()
  const {name} = useParams()
    return (
        <header className="text-white body-font bg-slate-950 fixed w-full top-0 z-10  ">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link
              // href={"/"}
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            >
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg> */}
              <span
                className={`md:visible invisible navtitle ml-3 md:text-2xl text-lg text-white hover:text-green-500`}
              >
                {name} @ Monsterbrains
              </span>
            </Link>
            <nav className="md:ml-auto flex flex-wrap items-center font-normal justify-center text-2xl">
              <Link
                // href={"/"}
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="mr-5 hover:text-green-500"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <SiGooglehome />
                </motion.div>
              </Link>
              <Link
                // href={"/experience"}
                to="experience"
                spy={true}
                smooth={true}
                duration={500}
                className="mr-5 hover:text-green-500"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <TbCertificate2 />
                </motion.div>
              </Link>
              <Link
                // href={"/contact"}
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="mr-5 hover:text-green-500"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <MdOutlineContacts />
                </motion.div>
              </Link>
            </nav>
          </div>
        </header>
      );
}

export default Navbar