import React from "react";
import Link from "next/link";
import Image from "next/image";
import hero from "../public/hero.jpg";
import IconContact from "../components/IconContact";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { Typewriter } from "react-simple-typewriter";
import { saveAs } from "file-saver";

export default function Hero() {
  const [element, controls] = useScroll();
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1G3698pZ6_TVvR97RCQhc6OGbaLtp0SNj/view?usp=sharing",
      "resume-warawut-thasungnoen.pdf"
    );
  };
  return (
    <div className="bg-gray-100 dark:bg-black" ref={element}>
      <div className="container mx-auto px-6 md:px-10 dark:bg-black ">
        <div className="flex flex-row justify-center items-start overflow-hidden">
          {/* Text container */}

          <div className="w-full md:w-full mx-auto text-center md:text-center lg:p-10 mb-20 md:mb-24">
            <div className="flex flex-wrap justify-center md:m-5  lg:m-5 xl:mb-5 mb-8">
              <div className="w-52 h-52 lg:w-60 lg:h-60 mt-20 md:mt-10 lg:mt-8 xl:w-60 xl:h-60 ">
                <motion.div
                  variants={{
                    hidden: { y: -20, opacity: 0 },
                    show: { y: 1, opacity: 1 },
                  }}
                  transition={{ delay: 0.2, duration: 0.5, type: "tween" }}
                  animate={controls}
                >
              

                  <img
                    className="dark:drop-shadow-[0_1px_25px_rgba(217,52,212,0.8)] dark:animate-[wiggle_1s_ease-in-out_infinite] dark:hover:drop-shadow-[0_1px_15px_rgba(255,0,0,0.8)]  md:-translate-y-0.5 lg:-translate-y-0.5 xl:-translate-y-0.5 rounded-full  max-w-full h-auto align-middle border-none"
                    src="https://beer-idev.com/hero.jpg"
                    alt="Picture Me"
                  />
                  {/* <Image
                  src={hero}
                  alt="Flowbite Logo"
                  className="shadow shadow-purple-400 xl:h-80 md:-translate-y-0.5 dark:shadow-xl dark:shadow-purple-500/50 dark:ring-1 drak:ring-offset-1 dark:ring-offset-violet-500  lg:-translate-y-0.5 xl:-translate-y-0.5 rounded-full max-w-full h-auto align-middle border-none"
                /> */}
                </motion.div>
              </div>
            </div>
            <div className="grid justify-items-center mb-10">
              <motion.div
                variants={{
                  hidden: { y: -20, opacity: 0 },
                  show: { y: 1, opacity: 1 },
                }}
                transition={{ delay: 0.2, duration: 0.5, type: "tween" }}
                animate={controls}
              >
                <div className="flex flex-row items-start space-x-2 mt-2">
                  <IconContact />
                </div>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { y: -20, opacity: 0 },
                  show: { y: 1, opacity: 1 },
                }}
                transition={{ delay: 0.2, duration: 0.5, type: "tween" }}
                animate={controls}
              >
                <p
                  className="text-lg  md:text-4xl mt-14 font-bold mb-4 dark:text-gray-100 text-transparent bg-clip-text 
            bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-400
              dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-rose-400 dark:via-fuchsia-500 dark:to-indigo-500"
                >
                  <Typewriter
                    loop={0}
                    cursor={true}
                    cursorStyle="_"
                    // typeSpeed={100}
                    // deleteSpeed={500}
                    delaySpeed={2000}
                    words={[
                      "<Hi, My nickname Beer />",
                      "Front-End Developer & Web Developer",
                    ]}
                  />
                </p>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { y: -20, opacity: 0 },
                  show: { y: 1, opacity: 1 },
                }}
                transition={{ delay: 0.2, duration: 0.5, type: "tween" }}
                animate={controls}
              >
                <p className="text-sm font-medium leading-normal justify-items-start xl:px-52 tracking-wide text-gray-600 dark:text-gray-300">
                  {` Hello everyone. My name is Warawut Thasungnoen, so you can call me "Beer" as well. I always like to learn something new. I used to be a web developer with 1+ years of experience designing and developing user interfaces, testing, debugging, and training staff on web applications.`}
                </p>
              </motion.div>
            </div>
            <motion.div
              variants={{
                hidden: { y: -20, opacity: 0 },
                show: { y: 1, opacity: 1 },
              }}
              transition={{ delay: 0.2, duration: 0.5, type: "tween" }}
              animate={controls}
            >
              <div className="w-full md:w-full mx-auto text-center md:text-center">
                <button
                  type="button"
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-14 py-3 text-center inline-flex items-center dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  onClick={saveFile}
                >
                  My portfolio
                  <svg
                    aria-hidden="true"
                    className="ml-2 -mr-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
