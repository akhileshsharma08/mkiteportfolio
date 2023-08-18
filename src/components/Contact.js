import React from "react";
import { BsArrowRight ,  BsArrowDownCircle,
  BsLinkedin,
  BsGithub,} from "react-icons/bs";
  import {MdEmail} from 'react-icons/md'
import { Link } from "react-router-dom";
// import { Oswald, Satisfy } from "next/font/google";

// const satisfy = Satisfy({
//   subsets: ["latin"],
//   weight: "400",
// });
// const oswald = Oswald({
//   subsets: ["latin"],
//   weight: "400",
// });

const Contact = () => {
    return (
        <div className="bg-slate-950 text-white px-12 py-20 contactfield" id="contact">
            <h1 data-aos="fade-up" data-aos-delay="500" className={` titles text-center py-8 text-8xl text-gray-600 `}>Enquiry</h1>
          <div className="   flex justify-center items-center md:flex-row flex-col">
            <div></div>
            <div data-aos="fade-up" data-aos-delay="600" className="flex justify-center items-center md:w-1/2 w-full my-4 text-center ">
              <h1 className={` contactHeading text-8xl font-bold text-zinc-100`}> <span >Let&apos;s</span> <br /><span>Connect.</span>  </h1>
              <h1 className=" text-4xl font-extrabold text-green-500">
                <BsArrowRight />
              </h1>
              
            </div>
            <div data-aos="fade-up" data-aos-delay="500" className="md:w-1/2 w-full ">
              <div className="form flex justify-center items-center">
                <form action="">
                  <div data-aos="fade-up" data-aos-delay="600" className="md:w-3/4 w-full mx-auto mb-4">
                    <input
                      type="text"
                      name="name"
                      className="  border-b-2 bg-transparent text-green-500 border-gray-600 outline-none outline-0 text-xl py-4 px-1"
                      placeholder=" Enter Name"
                    />
                  </div>
                  <div data-aos="fade-up" data-aos-delay="700" className="md:w-3/4 w-full mx-auto mb-4">
                    <input
                      type="email"
                      name="emai"
                      className="  border-b-2 bg-transparent text-green-500 border-gray-600 outline-none outline-0 text-xl py-4 px-1"
                      placeholder=" Enter Email"
                    />
                  </div>
                  <div data-aos="fade-up" data-aos-delay="800" className="md:w-3/4 w-full mx-auto mb-4">
                    <textarea
                      type="Mesaage" cols={24} 
                      className="  border-b-2 bg-transparent text-green-500 border-gray-600 outline-none outline-0 text-xl py-4 px-1 "
                      name="name"
                      placeholder=" Enter Message"
                    />
                  </div>
                  <div data-aos="fade-up" data-aos-delay="800" className="w-3/4 mx-auto mb-4">
                    <Link href={'/'} className="text-green-500 text-2xl px-4 py-2 rounded  flex justify-start items-center">Send <span className="px-4"> <BsArrowRight/></span> </Link>
                    </div>
    
                </form>
              </div>
                
            </div>
          </div>
        </div>
      );
}

export default Contact