import { motion } from "framer-motion";
import React from "react";

const Page6 = () => {
  return (
    <motion.div
      data-scroll
      data-scroll-speed=".4"
      initial={{ y: "50%" }}
      animate={{ y: 0 }}
      transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
      style={{ zIndex: 2, position: "relative" }}
      className="  h-[120vh] w-full bg-white "
    >
      <div className="headings w-[60%] h-full  mx-auto  px-16 ">
        {["Awards &", "Publications"].map((i, index) => {
          return (
            <div className="masker ">
              <h1 className="text-[10vw] tracking-tighter leading-[10vw] flex items-center origin-top-left">
                {i}
              </h1>
            </div>
          );
        })}
        <div className="content flex items-center gap-[18vw] mt-[6vw] px-2">
          <div className="left">
            {[
              {
                L1: "Exo Ape",
                L2: "Webby Nominee '23",
                L3: "The Webby Awards",
              },
              {
                L1: "Ali Ali",
                L2: "Site of the Month",
                L3: "Awwwards",
              },
              {
                L1: "Ottografie",
                L2: "Photography Site of the Year",
                L3: "CSSDA",
              },
            ].map((i, index) => {
              return (
                <div className="p opacity-70 text-[1.1vw] mb-4">
                  <p>{i.L1}</p>
                  <p>{i.L2}</p>
                  <p className="underline underline-offset-4">{i.L3}</p>
                </div>
              );
            })}
          </div>
          <div className="right opacity-95 text-[1.5vw]">
            <p className="leading-[2.7vw] font-[500]">
              Awwwards{" "}
              <span className="ml-[1.5vw]  opacity-80 text-[1.2vw]">x25</span>{" "}
            </p>
            <p className="leading-[2.7vw] font-[500]">
              The FWA{" "}
              <span className="ml-[2.6vw]  opacity-80 text-[1.2vw]">x07</span>
            </p>
            <p className="leading-[2.7vw] font-[500]">
              CSSDA{" "}
              <span className="ml-[3.9vw]  opacity-80 text-[1.2vw]">x06</span>
            </p>
            <p className="leading-[2.7vw] font-[500]">
              Behance{" "}
              <span className="ml-[2.8vw]  opacity-80 text-[1.2vw]"> x22</span>
            </p>
            <p className="leading-[2.7vw] font-[500]">
              Commarts{" "}
              <span className="ml-[1.3vw]  opacity-80 text-[1.2vw]"> x04</span>
            </p>
            <p className="leading-[2.7vw] font-[500]">
              Typewolf{" "}
              <span className="ml-[2.2vw]  opacity-80 text-[1.2vw]">x02</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page6;
