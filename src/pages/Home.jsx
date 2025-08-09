import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import FeaturedProject from "../components/FeaturedProject";
import Contributions from "../components/Contributions";
import Thoughts from "../components/Thoughts";

function Home({ theme }) {
  return (
    <>
      <Hero />
      <Skills />
      <FeaturedProject />
      <Contributions theme={theme} />
      <Thoughts />
    </>
  );
}

export default Home;
