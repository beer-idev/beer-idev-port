import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TextVariants = {
  offscreen: {
    opacity: 0
  },
  onscreen: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
};

export default function FramerHeadline() {
  const texts = ["react", "nextjs", "gatsby"];
  const [currentWord, setCurrentWord] = useState(-1);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i === texts.length) clearInterval(interval);
      else setCurrentWord(i);
      i++;
    }, 1100 + texts[i].length * 0.25);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.span
      className="animated-headline"
      transition={{ staggerChildren: 2 }}
    >
      {texts.map((word, index) => (
        index === currentWord
        ? (<motion.span>
              {word.split("").map((r, id) => (
                <motion.span
                  initial="offscreen"
                  animate="onscreen"
                  exit="exit"
                  variants={TextVariants}
                  transition={{
                    duration: 2,
                    delay: id * 0.25
                  }}
                  key={index}
                >
                  {r}
                </motion.span>
              ))}
            </motion.span>
          )
        : null
      ))}
    </motion.span>
  );
}