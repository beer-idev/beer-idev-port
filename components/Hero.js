import React from "react";
import Link from "next/link";
import Image from "next/image";
import hero from "../public/hero.jpg";
import IconContact from "../components/IconContact";

export default function Hero() {
  return (
    <div className="bg-gray-100 dark:bg-black">
      <div className="container mx-auto px-6 md:px-10 dark:bg-black ">
        <div className="flex flex-row justify-center items-start overflow-hidden">
          {/* Text container */}

          <div className="w-full md:w-full mx-auto text-center md:text-center lg:p-10 mb-10">
            <div className="flex flex-wrap justify-center md:m-5  lg:m-5 xl:mb-5 mb-8">
              <div className="w-52 h-52 lg:w-60 lg:h-60 mt-8 md:mt-8 lg:mt-8 xl:w-60 xl:h-60">
                <Image
                  src={hero}
                  alt="Flowbite Logo"
                  className="shadow shadow-purple-400 xl:h-80 md:-translate-y-0.5 lg:-translate-y-0.5 xl:-translate-y-0.5 rounded-full max-w-full h-auto align-middle border-none"
                />
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
              <div className="flex flex-row items-start space-x-2 mt-2">
                <IconContact />
              </div>
              <p
                className="text-lg  md:text-4xl mt-14 font-bold mb-4 dark:text-gray-100 text-transparent bg-clip-text 
            bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500
              dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-rose-400 dark:via-fuchsia-500 dark:to-indigo-500"
              >
                Web Developer & Front-End Developer
              </p>
              <p className="text-sm font-medium leading-normal justify-items-start xl:px-52 tracking-wide text-gray-600 dark:text-gray-300">

                {` Hello everyone. My name is Warawut Thasungnoen, so you can call me "Beer" as well. I'm 22 years old. I always like to learn something new. I used to be a web developer with 1+ years of experience designing and developing user interfaces, testing, debugging, and training staff on web applications.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
