import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
// import Navbar from "../components/Navbar"
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import Skill from "../components/Skill";

export default function Home() {

  return (
    <ContainerBlock
    title = "BEER-IDEV - Web Developer"
    description = "I've been developing websites for 2+ years straight. Get in touch with me to know more."
    >
      <Hero />
      <Skill />
      {/* <FavouriteProjects /> */}
      {/* <LatestCode repositories={repositories} /> */}
    </ContainerBlock>
    // <div>
    //   <Navbar />
    //   <h1 className="text-3xl font-bold underline">Hello world!</h1>
    // </div>
  );
}
