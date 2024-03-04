import React from "react";

const Page7 = () => {
  return (
    <div
      //   data-scroll
      //   data-scroll-speed="-5"
      data-scroll
      data-scroll-speed="-.3"
      style={{ zIndex: 0 }}
      className=" h-[115vh] w-full bg-zinc-950 text-[#E0CCBB] sm:h-[60vh]"
    >
      <div className="content h-full px-[8vw] pt-10 ">
        <div className="left  w-[29vw]">
          <h1 className=" text-[10vw] tracking-tight leading-[10vw] sm:text-[7vh] sm:leading-[7vh]">
            Our Story
          </h1>
          <p className="text-[2vw] mt-[3vw] tracking-tighter leading-8 sm:text-[2.2vh] sm:w-[25vh] sm:mt-[4vh]">
            The story behind Exo Ape is one of exploration, creativity and
            curiosity.
          </p>
        </div>
        <div className="divider w-full h-[1.5px] opacity-85 bg-[#E0CCBB] my-10"></div>
        <div className="links flex gap-[15vw] items-center ">
          <div className="about">
            {[
              "Willem II Singel 8",
              "6041 HS, Roermond",
              "The Netherlands",
              "hello@exoape.com",
            ].map((i, index) => {
              return (
                <p
                  className="text-[1.2vw] leading-[2.5vw] sm:text-[1.5vh] sm:leading-[3vh] "
                  key={index}
                >
                  {i}
                </p>
              );
            })}
          </div>
          <div className="pages">
            {["Work", "Studio", "News", "Contact"].map((i, index) => {
              return (
                <p
                  className="text-[1.2vw] leading-[2.5vw]  sm:text-[1.5vh] sm:leading-[3vh]"
                  key={index}
                >
                  {i}
                </p>
              );
            })}
          </div>
          <div className="sites">
            {["Behance", "Dribbble", "Twitter", "Instagram"].map((i, index) => {
              return (
                <p
                  className="text-[1.2vw] leading-[2.5vw] sm:text-[1.5vh] sm:leading-[3vh] "
                  key={index}
                >
                  {i}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7;
