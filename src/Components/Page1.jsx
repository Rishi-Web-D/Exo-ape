import React from "react";
import backgroundfirst from "../assets/backgroundfirst.webp";
import LocomotiveScroll from "locomotive-scroll";
import { motion } from "framer-motion";

const Page1 = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full h-[250vh] sm:h-[160vh] relative overflow-hidden bg-zinc-900">
      <img
        data-scroll
        data-scroll-speed="-1.5"
        className="w-full h-full object-cover opacity-[75%]"
        src={backgroundfirst}
        alt=""
      />
      <div className="sm:ml-2 sm:top-[48vh] container h-full w-[80%] absolute top-[17%] left-0  ml-24 text-white font-[TWK Lausanne-300]">
        <div className="left w-1/2">
          {["Building", "Digital", "Presence"].map((i, index) => {
            return (
              <div className="masker ">
                <motion.h1
                  viewport={{ once: true }}
                  initial={{ y: "120", rotateZ: "8deg", opacity: 0 }}
                  whileInView={{ y: 0, rotateZ: "0deg", opacity: 1 }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.9 }}
                  className="sm:text-[12vh]  text-[10vmax]  leading-none tracking-tighter font-regular origin-top-left"
                >
                  {i}
                </motion.h1>
              </div>
            );
          })}

          {/* <h1 className="text-[10vw] leading-none tracking-tighter font-regular">
            Digital
          </h1>
          <h1 className="text-[10vw] leading-none tracking-tighter font-regular">
            Presence
          </h1> */}
          <p className="sm:text-xl sm:tracking-normal sm:w-[60vw]  opacity-85 tracking-tighter ml-[.8vw] mt-[2vw]">
            Digital experiences with maximum emotional impact
          </p>
        </div>
        <div className="sm:bottom-[120vw] sm:w-[85%] sm:-right-[10vh] sm:h-[38vh] z-50 right w-1/2 h-[25vmax] sm:px-4 px-9 py-5 absolute bottom-[28vmax] -right-[7vmax]  ">
          <h3 className="font-semibold sm:text-[5vw] sm:leading-[2.5vh] text-[1.5vw] leading-[2.2vw]">
            We explore and push the boundaries of digital for brands and
            businesses that strive to enhance people's lives through exceptional
            experiences.
          </h3>
          <p className="font-regular sm:text-[3vw] sm:leading-[2vh] text-[1.1vw] mt-5 mb-[3vw]">
            For over a decade, we've been using profound design aesthetics,
            meticulously crafted details, and surprising interactions to create
            digital experiences that spark conversation, inspire action, and
            drive desirability.
          </p>
          <a className="underline underline-offset-3 " href="#">
            <li>Our Story</li>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page1;
