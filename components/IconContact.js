import React from 'react'
import Link from "next/link";
import {
    FaFacebook,
    FaGithub,
    FaLine,
    FaLinkedin,
    FaTiktok,
    FaDiscord,
  } from "react-icons/fa";
  
export default function IconContact(TextColor) {
    const url = {
        facebook: "https://www.facebook.com/beer.tk26243/",
        github: "https://github.com/beer-idev/",
        line: "https://line.me/ti/p/wOmRpRYIBG",
        linkedin: "https://www.linkedin.com/in/beerdev",
        tiktok: "https://www.tiktok.com/@7y.beer",
        discord: "https://discordapp.com/users/833397997530251277",
      };
  return (
    <>
           <a
                href={url.facebook}
                rel="noopener noreferrer"
                target={"_blank"}
                className=""
              >
                <FaFacebook className="mr-2 text-2xl text-gray-600 hover:text-purple-700 dark:text-gray-300 dark:hover:text-fuchsia-700" />
              </a>
              <a href={url.github} rel="noopener noreferrer" target={"_blank"}>
                <FaGithub className="mr-2 text-2xl text-gray-600 hover:text-purple-700 dark:text-gray-300 dark:hover:text-fuchsia-700" />
              </a>

              <a href={url.line} rel="noopener noreferrer" target={"_blank"}>
                <FaLine className="mr-2 text-2xl text-gray-600 hover:text-purple-700 dark:text-gray-300 dark:hover:text-fuchsia-700" />
              </a>
              <a
                href={url.linkedin}
                rel="noopener noreferrer"
                target={"_blank"}
              >
                <FaLinkedin className="mr-2 text-2xl text-gray-600 hover:text-purple-700 dark:text-gray-300 dark:hover:text-fuchsia-700" />
              </a>
              <a href={url.tiktok} rel="noopener noreferrer" target={"_blank"}>
                <FaTiktok className="mr-2 text-2xl text-gray-600 hover:text-purple-700 dark:text-gray-300 dark:hover:text-fuchsia-700" />
              </a>
              <a href={url.discord} rel="noopener noreferrer" target={"_blank"}>
                <FaDiscord className="mr-2 text-2xl text-gray-600 hover:text-purple-700 dark:text-gray-300 dark:hover:text-fuchsia-700" />
              </a>
  <style>
        {`
          .contactIcon {
            color: #515357;
          }
          
          .contactIcon:hover {
            color: #e91f63;
          }
        `}
      </style>
    </>
  )
}
