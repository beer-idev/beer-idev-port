import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import Skill from "../components/Skill";
import { motion } from "framer-motion";
import BackToTop from "../components/ScrollToTop";
export default function Home() {
 
  return (
    <>
      <motion.div initial="hidden" animate="show">
        <BackToTop />
        <ContainerBlock
          title="BEER-IDEV - Web Developer"
          description="I've been developing websites for 2+ years straight. Get in touch with me to know more."
        >
          <Hero />
          <Skill />
        </ContainerBlock>
      </motion.div>
    </>
  );
}
