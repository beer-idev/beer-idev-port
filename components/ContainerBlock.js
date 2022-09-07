import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { element } from "prop-types";
import Logo from "../public/logo.png";
// import Footer from "./Footer";
import { motion, useScroll, useSpring } from "framer-motion";
export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const meta = {
    title: "Warawut Thasungnoen - Web Developer",
    description: `I've been developing websites for 2+ years straight. Get in touch with me to know more.`,
    image: Logo,
    type: "website",
    ...customMeta,
  };

  // document.getElementsByTagName("html").className += "scroll-smooth md:scroll-auto"

  return (
    <div className="">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        {/* <meta
        property="og:url"
        content={`https://yourwebsite.com${router.asPath}`}
      />
      <link
        rel="canonical"
        href={`https://yourwebsite.com${router.asPath}`}
      /> */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="BEER-IDEV" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <meta name="twitter:site" content="@beer-idev" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <main className="dark:bg-zinc-900 ">
      <motion.div className="progress-bar dark:progress-bar" style={{ scaleX }} />
       
        <Navbar />
       
        <div>{children}</div>
        <Footer />
      
        <style>
          {`
          .progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background:#dc2626;
  transform-origin: 0%;
  z-index:11;
}

`}
        </style>
      </main>
    </div>
  );
}
