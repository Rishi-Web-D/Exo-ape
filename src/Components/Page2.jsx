import React from "react";
import image1 from "../assets/page2image1.webp";
import image2 from "../assets/page2image2.webp";
import image3 from "../assets/page2image3.webp";
const Page2 = () => {
  return (
    <div className="w-full h-[75vw] sm:h-[75vh] ">
      <div className="images relative h-[35vw] sm:h-[30vh] w-full ">
        <img
          data-scroll
          data-scroll-speed=".2"
          className="absolute h-full left-[8.5vw] -top-[7.8vw] sm:-top-[7.8vh] sm:rounded-lg"
          src={image1}
          alt=""
        />
        <img
          className="absolute h-[23vw] top-[30%] right-[20%] sm:h-[20vh] sm:top-[55%] sm:right-[10%] sm:rounded-lg"
          src={image2}
          alt=""
        />
        <img
          data-scroll
          data-scroll-speed=".199
        "
          className="absolute h-[18vw] right-[11%] -bottom-[30%] sm:h-[15vh] sm:-bottom-[50%] sm:right-[5%] sm:rounded"
          src={image3}
          alt=""
        />
      </div>
      <div className="content h-[40vw] w-full relative ">
        <div className="content w-1/2 h-fit absolute top-[27%] left-[23%] sm:top-[90%] sm:w-[70%] px-3 py-3  ">
          <h1 className="text-[3.2vw] leading-[4.2vw] tracking-tight sm:text-[2vh] sm:font-semibold sm:leading-5">
            We partner with brands and <br /> businesses that create <br />{" "}
            exceptional experiences where <br /> people live, work and unwind.
          </h1>
          <p className="opacity-70 mt-7 sm:mt-3 sm:leading-5">
            Interior Design & Furniture <br />
            Architecture & Real Estate <br />
            Hospitality, Travel & Tourism.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page2;
