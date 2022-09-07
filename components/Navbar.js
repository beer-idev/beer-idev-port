import React, { useState } from "react";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import Image from "next/image";
import logo from "../public/logo/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  // const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  // const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
 
        <div className="sticky top-0 z-10">
          <div className="bg-white ackdrop-filter backdrop-blur-lg bg-opacity-30 border-b firefox:bg-opacity-90 border-gray-200 px-2 sm:px-4 py-4 rounded dark:bg-black dark:ackdrop-filter dark:backdrop-blur-lg dark:bg-opacity-30 dark:border-b fdark:irefox:bg-opacity-90 dark:border-gray-700">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
              <a href="./" className="flex items-center ml-2">
                {/* <Image
            src={logo}
            className="mr-3 h-6 sm:h-9"
            width={200}
            height={200}
            alt="Flowbite Logo"
          /> */}
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  BEER-IDEV
                </span>
              </a>

              <div className="flex md:order-2">
                {/* Dark mode switcher */}
                <ThemeSwitch />
                {/* Dark mode switcher end */}

                <button
                  data-collapse-toggle="mobile-menu-4"
                  type="button"
                  className="md:hidden text-gray-500 hover:bg-gray-100focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-lg text-sm p-2 inline-flex items-center dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="mobile-menu-4"
                  aria-expanded="false"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {/* <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg> */}
                  {isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>

              <div
                className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1"
                id="mobile-menu-4"
              >
                <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                  <li>
                    <a
                      href="./"
                      className="text-transparent bg-clip-text text-base font-semibold
                  bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-transparent md:bg-clip-text 
                  md:bg-gradient-to-r md:from-rose-400 md:via-fuchsia-500 md:to-indigo-500 md:p-0 rounded dark:from-rose-400 dark:via-fuchsia-500 dark:to-indigo-500"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  {/* <li>
                <a
                  href="#"
                  className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li> */}
                  {/* <li>
                <a
                  href="#"
                  className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Project
                </a>
              </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
     
      <div
        className={
          isOpen ? "showMenuNav bg-white dark:bg-zinc-900" : "hideMenuNav"
        }
      >
        <div
          className="absolute top-0 right-0 mx-8 my-8"
          onClick={() => setIsOpen(false)}
        >
          <svg
            className="h-8 w-8 text-gray-500 dark:text-gray-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <ul className="flex flex-col items-center justify-between min-h-[250px]">
          <li
            className="text-transparent bg-clip-text text-base font-semibold
                  bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 my-8 uppercase hover:bg-gray-50 border-b border-gray-300 md:border-b md:border-gray-300 md:text-transparent md:bg-clip-text 
                  md:bg-gradient-to-r md:from-rose-400 md:via-fuchsia-500 md:to-indigo-500 
                  md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0
                dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700"
          >
            <a href="./">Home</a>
          </li>
          {/* <li className="my-8 uppercase text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  <a href="/portfolio">Services</a>
                </li>
                <li className="my-8 uppercase text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  <a href="/contact">Project</a>
                </li> */}
        </ul>
      </div>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
       
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </>
  );
};

export default Navbar;
