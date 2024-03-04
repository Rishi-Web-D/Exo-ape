import React, { useEffect, useRef } from "react";
import image3 from "../assets/page3bgc.webp";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power4 } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Page4 = () => {
  const imgdiv = useRef(null);

  useEffect(() => {
    gsap.to(imgdiv.current, {
      clipPath: "polygon(0% 0%, 100% 0% ,100% 100%, 0% 100%)",
      duration: 4,
      ease: Power4,
      scrollTrigger: {
        trigger: imgdiv.current,
        scrollerStart: "bottom 5%",
        // scrollerend: "top 10%",
        end: "top -20%",
        // markers: true,
        scrub: 3,
      },
    });
  });

  return (
    <div className=" main h-[250vh] w-full sm:h-[95vh]">
      <div className="headings w-1/2 h-[120vh] mx-auto px-16 pt-36 sm:pt-12 sm:h-[40vh] sm:w-[80%]">
        {["Data", "Informs,", "Emotion", "Converts"].map((i, index) => {
          return (
            <div className="masker ">
              <motion.h1
                key={index}
                viewport={{ once: true }}
                initial={{ y: "120", rotateZ: "18deg", opacity: 0 }}
                whileInView={{ y: 0, rotateZ: "0deg", opacity: 1 }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
                className="text-[10vw] tracking-tighter leading-[10vw] flex items-center origin-top-left sm:text-[6vh] sm:leading-[6vh] sm:tracking-tight"
              >
                {index === 2 && (
                  <span className="inline-block w-32 h-2 bg-black mt-5 sm:h-1 sm:w-[30px] sm:mb-[20px]"></span>
                )}
                {i}
              </motion.h1>
            </div>
          );
        })}
      </div>
      <div className="content w-full h-[50vh] relative sm:h-[40vh]">
        <p className="oneline absolute left-[12%] top-[20%] text-sm font-medium mb-[5.5vw] sm:text-xl sm:left-[5%] sm:top-[10%]">
          <span>
            <svg
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon h-3 inline-block -mt-1"
              data-v-669b4a84=""
            >
              <path
                d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                fill="currentColor"
                data-v-669b4a84=""
              ></path>
            </svg>
          </span>{" "}
          What we believe
        </p>
        <p className="paragraph absolute  left-[35%] top-[30%] text-[1.7vw] w-[32vw] leading-[2.5vw] tracking-tight font-[400] sm:text-[1.7vh] sm:leading-[2vh] sm:w-56 sm:left-[15%] sm:top-[30%] sm:font-normal">
          We believe that the most effective outcomes are achieved when
          data-driven insights are used to inspire emotive experiences. Leading
          to increased brand loyalty, long-term customer engagement, and higher
          conversion rates.
        </p>
        <p className="lighttext absolute right-[2%] bottom-[-2%] opacity-75 text-sm w-[20vw] py-2 sm:w-48 sm:bottom-[5%] sm:right-[5%] ">
          "Our approach is informed by <br /> insight and research, but at the{" "}
          <br /> end of the day, we focus on <br /> making people feel."
        </p>
      </div>
      <div className="bottomimage w-full h-[80vh] sm:h-[60vh]   ">
        <img
          ref={imgdiv}
          style={{ clipPath: "polygon(10% 0%, 90% 0% ,90% 100%, 10% 100%)" }}
          className="object-cover w-full h-[100vh] mt-[8vw] sm:object-contain sm:h-full "
          src={image3}
          alt=""
        />
      </div>
    </div>
  );
};

export default Page4;
