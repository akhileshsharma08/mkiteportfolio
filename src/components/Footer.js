
import React from "react";
import Logo from '../img/Logo.svg'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
    const icon = {
        hidden: {
          opacity: 0,
          pathLength: 0,
          fill: "rgba(220, 255, 136, 0)"
        },
        visible: {
          opacity: 1,
          pathLength: 1,
          fill: "rgba(0, 255, 0, 1)"
        }
      };
      return (
        <>
          <footer className="text-white body-font bg-slate-900 border-green-500  border-t-2 py-4">
            <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
              <Link href={'/'} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <img src={Logo} width={180} height={80} alt="logo"/>
                <span className="ml-3 text-xl"></span>
              </Link>
              <p className="text-sm text-gray-50 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                © {new Date().getFullYear()} Monsterbrains developed by —
                <a
                  href="/"
                  className="text-gray-600 ml-1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  Akhilesh
                </a>
              </p>
            </div>
          </footer>
        </>
      );
}

export default Footer