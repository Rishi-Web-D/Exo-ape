import React from "react";
import { motion } from "framer-motion";
import image1 from "../assets/page5first.webp";
import image2 from "../assets/page5second.webp";

const Page5 = () => {
  return (
    <div className=" h-[250vh] w-full bg-zinc-950 text-white">
      <div className="headingsandpara w-[60%] h-[100vh]  mx-auto mt-40 px-16 pt-36">
        {["Design &", "Technology,", "Enthusiasts"].map((i, index) => {
          return (
            <div className="masker ">
              <motion.h1
                key={index}
                viewport={{ once: true }}
                initial={{ y: "120", rotateZ: "18deg", opacity: 0 }}
                whileInView={{ y: 0, rotateZ: "0deg", opacity: 1 }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
                className="text-[10vw] tracking-tighter leading-[10vw] flex items-center origin-top-left"
              >
                {i}
              </motion.h1>
            </div>
          );
        })}
      </div>
      <div className="imagepara relative w-full h-[150vh] ">
        <p className="paragraph absolute top-[10%] left-[26%] text-[1.7vw] w-[25vw]  leading-[2.5vw] tracking-tight font-[500] opacity-80">
          We are a team* of like-minded design enthusiasts and tech aficionados
          that explore the digital frontier with grit and dedication. Intrigued
          by beauty, fascinated by technology and fuelled with an everlasting
          devotion to digital craftsmanship and meaningful aesthetics.
        </p>
        <div
          data-scroll
          data-scroll-speed=".1"
          className="absolute left-[15%] bottom-[15%]  img1 h-[21.5vw] w-[33vw]"
        >
          <img className="h-full w-full object-cover" src={image1} alt="" />
        </div>
        <div
          data-scroll
          data-scroll-speed=".3"
          className=" absolute right-[15%] bottom-[32%]  img1 h-[30vw] w-[20vw]"
        >
          <img
            className="h-full w-full object-cover mb-[3vw]"
            src={image2}
            alt=""
          />
          <p className="text-[.8vw] border-t-2 border-gray-600 pt-5 w-full leading-[1.2vw] font-[400] opacity-80 tracking-tight">
            *We believe in a fluid team approach that allows us to bring
            together the best designers, developers and agencies in the world in
            order to serve the needs of today’s clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page5;
