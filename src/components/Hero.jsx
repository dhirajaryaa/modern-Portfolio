import React from "react";
import PersonWithLaptop from "../assets/images/heroimg.svg";
import GrainImg from "../assets/images/grain.jpg";
import { FaArrowDown, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="py-32 md:py-44 relative z-0 overflow-clip"
      aria-labelledby="hero-title"
    >
      {/* grains background image  */}
      <div
        className="absolute inset-0 -z-40 opacity-5"
        style={{ backgroundImage: `url(${GrainImg})` }}
      ></div>
      {/* circe overlay border 1  */}
      <div className="size-[420px] md:size-[620px] hero-ring"></div>
      {/* circe overlay border 2  */}
      <div className="size-[820px] hero-ring"></div>
      {/* circe overlay border 3  */}
      <div className="size-[1020px] hero-ring"></div>
      {/* circe overlay border 4  */}
      <div className="size-[1220px] hero-ring"></div>

      {/* main text content here  */}
      <div className="container">
        {/* hero img  */}
        <div
          className="flex flex-col items-center"
          role="img"
          aria-label="A Person work on laptop"
        >
          <img
            className="size-48 "
            src={PersonWithLaptop}
            alt="A Person work on laptop"
          />
          {/* adding status to the page */}
          <div
            className="flex items-center gap-2 bg-gray-950 border border-gray-800 px-4 py-1.5 -mt-4 capitalize rounded"
            aria-label="Available for new projects"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <p className="text-sm font-medium">Available for new projects</p>
          </div>
        </div>
        {/* adding content */}
        <div className="max-w-lg mx-auto">
          <h1
            className="text-3xl font-serif text-center tracking-wide mt-8 capitalize"
            id="hero-title"
          >
            Design and Develop Exceptional Digital Experiences
          </h1>
          <p
            className="mt-4 text-center text-white/50 text-sm md:text-base capitalize"
            aria-label="I'm Dhiraj Arya, a web developer with a passion for building fast, scalable, and visually appealing webApps."
          >
            I'm <span className="text-green-600 ">Dhiraj Arya</span>, a{" "}
            <span className="text-yellow-500">web developer</span> with a
            passion for building fast, scalable, and visually appealing webApps.
          </p>
        </div>
        {/* adding call to action btn  */}
        <div className="flex flex-col md:flex-row gap-4 mt-8 items-center justify-center">
          <a
            href="#project"
            className="inline-flex items-center gap-2 border border-white/15 px-4 py-2 rounded-xl text-white hover:bg-white/10 duration-200"
            aria-label="Explore My Work"
          >
            <span>Explore My Work</span>
            <span className="animate-bounce" aria-hidden="true">
              <FaArrowDown size={18} />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/dhirajaryaa0/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-white/15 px-4 py-2 rounded-xl bg-white hover:bg-white/80 text-gray-900 font-semibold duration-200"
            aria-label="Let's Connect on LinkedIn"
          >
            <span aria-hidden="true">
              <FaLinkedin size={18} className="text-blue-600" />
            </span>
            <span>Let's Connect</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
