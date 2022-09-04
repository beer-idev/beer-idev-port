import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { element } from "prop-types";
import Logo from "../public/logo.png"
// import Footer from "./Footer";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Warawut Thasungnoen - Web Developer",
    description: `I've been developing websites for 2+ years straight. Get in touch with me to know more.`,
    image: Logo,
    type: "website",
    ...customMeta,
  };

  // document.getElementsByTagName("html").className += "scroll-smooth md:scroll-auto"

  return (
    <div>
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
        <link rel="apple-touch-icon" href="https://beer-idev-port.vercel.app/_next/static/media/logo.26df1b6f.png"></link>
        <link rel="shortcut icon" href="https://beer-idev-port.vercel.app/_next/static/media/logo.26df1b6f.png"></link>
        <link rel="image_src" type="image/jpeg" href="https://beer-idev-port.vercel.app/_next/static/media/logo.26df1b6f.png"></link>
        <meta property="og:image" content="https://beer-idev-port.vercel.app/_next/static/media/logo.26df1b6f.png" />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <meta name="twitter:site" content="@beer-idev" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content="https://beer-idev-port.vercel.app/_next/static/media/logo.26df1b6f.png" />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="dark:bg-zinc-900 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
