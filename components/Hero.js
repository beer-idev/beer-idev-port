import React from "react";
import Link from "next/link";
import Image from "next/image";
import hero from "../public/hero.jpg";
import IconContact from "../components/IconContact";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
export default function Hero() {
  const [element, controls] = useScroll();
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
                    src="https://scontent.fbkk6-2.fna.fbcdn.net/v/t39.30808-6/297237907_1430024347441766_6288124144109326551_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGP57QB3ykPRyOKQRed8x5vph5yJAJ0HV2mHnIkAnQdXfoTsa2JilUpI6acMcktEVUTT4qXAzYzPTIvatb8oWVr&_nc_ohc=0bx68nMLfc8AX_OGM-6&_nc_ht=scontent.fbkk6-2.fna&oh=00_AT_t4Y7NjVc352Jg-7N6Djb8gTUOoRoX_8g9NrrBVcAv-A&oe=631AC741"
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

            {/* <div className="grid grid-cols-1 justify-items-center">
            <div className="mx-auto h-[500px] w-[500px] flex justify-center items-center">
            <div className="w-52 h-52 lg:w-64 lg:h-64 p-6 relative rounded-full">
              <div className="rounded-full shadow-2xl">
              <Image
                src={hero}
                className="shadow-md shadow-purple-400 rounded-full w-full h-full"
                layout="fill"
                alt="Flowbite Logo"
                objectFit="cover"
              />
            </div>

            </div>
            </div>
          </div> */}

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
                  hidden: { y: -20, opacity: 0},
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
                Web Developer & Front-End Developer
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
                {` Hello everyone. My name is Warawut Thasungnoen, so you can call me "Beer" as well. I'm 22 years old. I always like to learn something new. I used to be a web developer with 1+ years of experience designing and developing user interfaces, testing, debugging, and training staff on web applications.`}
              </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
