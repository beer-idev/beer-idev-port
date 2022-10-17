import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";

function Experience() {
  const [element, controls] = useScroll();
  return (
    <div className="bg-gray-100 dark:bg-black">
      <div className="container mx-auto px-6 md:px-5 mt-20" ref={element}>
        <div className="flex flex-row justify-center items-start overflow-hidden">
          {/* Text container */}

          <div className="w-full md:w-full mx-auto text-center md:text-center lg:p-10 mb-10">
            <motion.div
              variants={{
                hidden: { y: 150, opacity: 0 },
                show: { y: 0, opacity: 1 },
              }}
              animate={controls}
              transition={{
                delay: 0.01,
                type: "tween",
                duration: 0.4,
              }}
              whileInView={{ opacity: 1 }}
            >
              <h3 className="text-4xl uppercase tracking-[5px] md:text-4xl font-bold mb-2 text-gray-700 dark:text-gray-500">
                Experience
              </h3>
            </motion.div>
            {/* <motion.div
               variants={{
                hidden: { y: 50, opacity: 0 },
                  show: { y: 0, opacity: 1 },
              }}
              animate={controls}
              transition={{
                delay: 0.01,
                type: "tween",
                duration: 0.6,
              }}
              whileInView={{ opacity: 1 }}
              > */}
            <motion.div
              variants={{
                hidden: { y: 150, opacity: 0 },
                show: { y: 0, opacity: 1 },
              }}
              animate={controls}
              transition={{
                delay: 0.1,
                type: "tween",
                duration: 0.4,
              }}
              whileInView={{ opacity: 1 }}
              className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 md:px-6 lg:px-10 xl:px-20 justify-items-center"
            ></motion.div>
            {/* </motion.div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
