import { motion } from "framer-motion";
import React from "react";

const Page3 = () => {
  return (
    <div className="h-[400vh] w-full bg-[#0D0E13] text-[#E4E0DB] font-[TWK Lausanne] sm:h-[200vh]">
      <div className="part1 h-[200vh] w-full relative sm:h-[100vh]">
        <div className="topleft px-28 absolute top-[16%] sm:top-[5%] sm:px-14">
          <p className="text-sm font-medium mb-[5.5vw] sm:text-xl  ">
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
            How we work
          </p>
          <h2 className="w-[40vw] text-[2.3vw] leading-[2.7vw] tracking-tight font-semibold text-[#dadada] sm:text-[1.7vh] sm:w-fit sm:leading-5 sm:">
            We believe that all good things are <br /> achieved by those who are
            willing to put <br /> in passion, courage and craftsmanship.
          </h2>
        </div>
        <div className="bottomleft absolute left-[23%] top-[40%] px-6 sm:top-[28%] sm:left-[2%]">
          <h2 className="text-[3.5vw] leading-[4.3vw] font-[500] tracking-tighter sm:text-[2.5vh] sm:leading-[2.7vh] ">
            Elevating <br /> sophistication <br />
            <p className="opacity-70 text-[17px] -ml-[28px] inline-block mr-3">
              0 1
            </p>
            across all senses
          </h2>
          <p className="opacity-70 w-80 sm:w-[20vh]">
            We ensure that the high standards and sophistication of your product
            are experienced by all senses while blurring the lines between the
            physical and the digital world. We go deep into details to provide a
            holistic experience that leaves a lasting impression on your
            customers and fits seamlessly into your existing ecosystem.
          </p>
        </div>
        <div className="bottomright absolute right-[13%] top-[50%] px-6 sm:-right-[5%] sm:top-[45%]">
          <h2 className="text-[3.5vw] leading-[4.3vw] font-[500] tracking-tighter sm:text-[2.5vh] sm:leading-[2.7vh]">
            To be human <br /> is our greatest <br />
            <p className="opacity-70 text-[17px] -ml-[28px] inline-block mr-3">
              0 2
            </p>
            quality
          </h2>
          <p className="opacity-70 w-72 sm:w-[22vh]">
            We believe that intuition is the most advanced technology we have,
            and curiosity is our most powerful tool. Our team is guided by the
            principles of compassion and honesty in our day-to-day
            communications, and we understand that people value feeling more
            than information. That's why we pour a lot of soul and passion into
            our work, delivering experiences that touch people on a deeper
            level.
          </p>
        </div>
      </div>
      <div className="part2 h-[200vh] w-full relative py-14 sm:h-[100vh] ">
        <div className="marquee flex whitespace-nowrap  overflow-hidden">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: "10", repeat: Infinity }}
            className="text-[15vw]  tracking-tighter flex items-center sm:gap-2  "
          >
            Forever Upwards
            <svg
              viewBox="0 0 169 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon h-20 inline-block -mb-10 sm:h-12 sm:mb-0 "
              data-v-774e5e2b=""
            >
              <path
                d="M132 78C117.5 78 101.667 68.9167 84.5 50.75C84 51.25 82 53.0833 78.5 56.25C75.1667 59.25 73 61.1667 72 62C71.1667 62.6667 69.25 64.1667 66.25 66.5C63.4167 68.8333 61.0833 70.4167 59.25 71.25C57.5833 72.0833 55.4167 73.1667 52.75 74.5C50.0833 75.8333 47.4167 76.75 44.75 77.25C42.25 77.5833 39.5833 77.75 36.75 77.75C25.75 77.75 16.8333 74.1667 10 67C3.33333 59.8333 0 50.6667 0 39.5C0 28.5 3.25 19.25 9.75 11.75C16.4167 4.25 25.25 0.500001 36.25 0.500001C42.5833 0.500001 48.9167 2.16667 55.25 5.5C61.75 8.83333 66.6667 12 70 15C73.3333 18 78.1667 22.6667 84.5 29C85 28.5 86.4167 27.0833 88.75 24.75C91.25 22.25 92.8333 20.6667 93.5 20C94.3333 19.3333 95.8333 17.9167 98 15.75C100.333 13.5833 102 12.1667 103 11.5C104.167 10.6667 105.833 9.5 108 8C110.167 6.33334 112 5.16667 113.5 4.5C115.167 3.83333 117 3.08333 119 2.25C121.167 1.41667 123.25 0.833335 125.25 0.500001C127.417 0.166667 129.583 0 131.75 0C142.75 0 151.667 3.66667 158.5 11C165.333 18.3333 168.75 27.5833 168.75 38.75C168.75 50.0833 165.417 59.5 158.75 67C152.083 74.3333 143.167 78 132 78ZM132 17C130 17 128 17.25 126 17.75C124.167 18.25 122.167 19.0833 120 20.25C118 21.25 116.25 22.1667 114.75 23C113.25 23.8333 111.333 25.25 109 27.25C106.833 29.0833 105.25 30.4167 104.25 31.25C103.417 32.0833 101.75 33.6667 99.25 36C96.9167 38.1667 95.5833 39.4167 95.25 39.75C100.583 44.75 104.417 48.25 106.75 50.25C109.083 52.25 112.75 54.5833 117.75 57.25C122.917 59.75 127.917 61 132.75 61C138.917 61 143.75 59 147.25 55C150.75 50.8333 152.5 45.6667 152.5 39.5C152.5 32.8333 150.667 27.4167 147 23.25C143.5 19.0833 138.5 17 132 17ZM36.25 17.25C30.0833 17.25 25.1667 19.4167 21.5 23.75C18 28.0833 16.25 33.3333 16.25 39.5C16.25 46 18.0833 51.25 21.75 55.25C25.4167 59.0833 30.5 61 37 61C47.3333 61 59.5833 53.9167 73.75 39.75C68.9167 35.25 65.1667 31.9167 62.5 29.75C59.8333 27.4167 55.8333 24.75 50.5 21.75C45.1667 18.75 40.4167 17.25 36.25 17.25Z"
                fill="currentColor"
                data-v-774e5e2b=""
              ></path>
            </svg>
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: "10", repeat: Infinity }}
            className="text-[15vw]  tracking-tighter flex  items-center sm:gap-2"
          >
            Forever Upwards
            <svg
              viewBox="0 0 169 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon h-20 inline-block -mb-10 sm:h-12 sm:mb-0 "
              data-v-774e5e2b=""
            >
              <path
                d="M132 78C117.5 78 101.667 68.9167 84.5 50.75C84 51.25 82 53.0833 78.5 56.25C75.1667 59.25 73 61.1667 72 62C71.1667 62.6667 69.25 64.1667 66.25 66.5C63.4167 68.8333 61.0833 70.4167 59.25 71.25C57.5833 72.0833 55.4167 73.1667 52.75 74.5C50.0833 75.8333 47.4167 76.75 44.75 77.25C42.25 77.5833 39.5833 77.75 36.75 77.75C25.75 77.75 16.8333 74.1667 10 67C3.33333 59.8333 0 50.6667 0 39.5C0 28.5 3.25 19.25 9.75 11.75C16.4167 4.25 25.25 0.500001 36.25 0.500001C42.5833 0.500001 48.9167 2.16667 55.25 5.5C61.75 8.83333 66.6667 12 70 15C73.3333 18 78.1667 22.6667 84.5 29C85 28.5 86.4167 27.0833 88.75 24.75C91.25 22.25 92.8333 20.6667 93.5 20C94.3333 19.3333 95.8333 17.9167 98 15.75C100.333 13.5833 102 12.1667 103 11.5C104.167 10.6667 105.833 9.5 108 8C110.167 6.33334 112 5.16667 113.5 4.5C115.167 3.83333 117 3.08333 119 2.25C121.167 1.41667 123.25 0.833335 125.25 0.500001C127.417 0.166667 129.583 0 131.75 0C142.75 0 151.667 3.66667 158.5 11C165.333 18.3333 168.75 27.5833 168.75 38.75C168.75 50.0833 165.417 59.5 158.75 67C152.083 74.3333 143.167 78 132 78ZM132 17C130 17 128 17.25 126 17.75C124.167 18.25 122.167 19.0833 120 20.25C118 21.25 116.25 22.1667 114.75 23C113.25 23.8333 111.333 25.25 109 27.25C106.833 29.0833 105.25 30.4167 104.25 31.25C103.417 32.0833 101.75 33.6667 99.25 36C96.9167 38.1667 95.5833 39.4167 95.25 39.75C100.583 44.75 104.417 48.25 106.75 50.25C109.083 52.25 112.75 54.5833 117.75 57.25C122.917 59.75 127.917 61 132.75 61C138.917 61 143.75 59 147.25 55C150.75 50.8333 152.5 45.6667 152.5 39.5C152.5 32.8333 150.667 27.4167 147 23.25C143.5 19.0833 138.5 17 132 17ZM36.25 17.25C30.0833 17.25 25.1667 19.4167 21.5 23.75C18 28.0833 16.25 33.3333 16.25 39.5C16.25 46 18.0833 51.25 21.75 55.25C25.4167 59.0833 30.5 61 37 61C47.3333 61 59.5833 53.9167 73.75 39.75C68.9167 35.25 65.1667 31.9167 62.5 29.75C59.8333 27.4167 55.8333 24.75 50.5 21.75C45.1667 18.75 40.4167 17.25 36.25 17.25Z"
                fill="currentColor"
                data-v-774e5e2b=""
              ></path>
            </svg>
          </motion.h1>
        </div>
        <div className="bottomright absolute right-[15%] bottom-[5%] px-6 sm:-right-3">
          <h2 className="text-[3.5vw] leading-[4.3vw] font-[500] tracking-tighter sm:text-[2.5vh] sm:leading-[2.7vh]   ">
            Uncompromising
            <br /> standard of <br />
            <p className="opacity-70 text-[17px] -ml-[28px] inline-block mr-3">
              0 4
            </p>
            excellence
          </h2>
          <p className="opacity-70 w-72  sm:w-[20vh]">
            We aim to push boundaries and exceed expectations with every
            project, consistently delivering award-winning digital experiences.
            We recognize that true art lies in the intricacies, so we approach
            each project with a meticulous eye for detail and a commitment to
            crafting tailor-made experiences that capture the essence of your
            brand. Down to earth but reaching for the stars
          </p>
        </div>
        <div className="bottomleft absolute left-[15%] top-[50%] px-6 sm:top-[25%] sm:left-[1%]">
          <h2 className="text-[3.5vw] leading-[4.3vw] font-[500] tracking-tighter sm:text-[2.5vh] sm:leading-[2.7vh] ">
            Simplicity is <br className="sm:hidden" /> the dot on <br />
            <p className="opacity-70 text-[17px] -ml-[28px] inline-block mr-3">
              0 3
            </p>
            our horizon
          </h2>
          <p className="opacity-70 w-72 sm:w-[20vh]">
            In today's world, we have become information-rich and time-poor. It
            is those who focus on what really matters that set the tone. We
            approach every project with a keen eye for simplicity and elegance.
            Great digital design is the perfect blend of form and function that
            focuses on the essentials and leaves behind the frivolous.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page3;
