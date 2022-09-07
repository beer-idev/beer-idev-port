import React, { useEffect, useState } from "react";
import { BiArrowFromBottom } from "react-icons/bi";
import { classNames } from './Utility'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div className="fixed z-10 bottom-8 right-8 md:bottom-10 md:right-14 lg:md:right-16">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
            isVisible ? 'opacity-100' : 'opacity-0',
            'bg-fuchsia-600 hover:bg-fuchsia-00 dark:bg-fuchsia-700 dark:hover:bg-fuchsia-800 focus:ring-fuchsia-500 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none',
          )}
      >
        <BiArrowFromBottom className="h-6 w-6 md:h-7 md:w-7" aria-hidden="true" />
      </button>
    </div>
  );
}
