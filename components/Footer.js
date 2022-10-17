import React from "react";
import IconContact from "../components/IconContact";
// import { useScroll } from "./useScroll";
// import { motion } from "framer-motion";
export default function Footer() {
  // const [element, controls] = useScroll();
  // const footerLogoAnimations = {
  //   hidden: { y: -20, opacity: 0 },
  //   show: { y: 1, opacity: 1 },
  // };
  // const footerTextAnimations = {
  //   hidden: { y: -50, opacity: 0 },
  //   show: { y: 1, opacity: 1 },
  // };

  return (
    <section
      className="bg-gray-100 dark:bg-black shadow-xl shadow-slate-100	"
    
    >
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        {/* <motion.div
          animate={controls}
          variants={footerLogoAnimations}
          transition={{
            delay: 0.02,
            type: "tween",
            duration: 0.6,
          }}
        > */}
          <div className="flex justify-center mt-8 space-x-3 lg:space-x-6">
            <IconContact />
          </div>
        {/* </motion.div> */}
        {/* <motion.div
          animate={controls}
          variants={footerTextAnimations}
          transition={{
            delay: 0.02,
            type: "tween",
            duration: 0.6,
          }}
        > */}
          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            Developed By beer-idev.
          </p>
        {/* </motion.div> */}
      </div>
    </section>
  );
}
