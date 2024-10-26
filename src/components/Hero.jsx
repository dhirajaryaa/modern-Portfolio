import React from "react";
import PersonWithLaptop from "../assets/images/heroimg.svg";
import { FaArrowDown, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="py-32 md:py-44" aria-labelledby="hero-title">
      <div className="container ">
        {/* hero img  */}
        <div className="flex flex-col items-center" role="img" aria-label="A Person work on laptop">
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
            <div className="size-2.5 bg-green-500 rounded-full" aria-hidden="true"></div>
            <p className="text-sm font-medium">Available for new projects</p>
          </div>
        </div>
        {/* adding content */}

        <h1
          className="text-3xl font-serif text-center tracking-wide mt-8 capitalize"
          id="hero-title"
        >
          Design and Develop Exceptional Digital Experiences
        </h1>
        <p
          className="mt-4 text-center md:w-1/2 w-full mx-auto text-white/50 text-sm md:text-base capitalize"
          aria-label="I'm Dhiraj Arya, a web developer with a passion for building fast, scalable, and visually appealing webApps."
        >
          I'm <span className="text-green-600 ">Dhiraj Arya</span>, a{" "}
          <span className="text-yellow-500">web developer</span> with a passion
          for building fast, scalable, and visually appealing webApps.
        </p>
        {/* adding call to action btn  */}
        <div className="flex flex-col md:flex-row gap-4 mt-8 items-center justify-center">
          <a
            href="#project"
            className="inline-flex items-center gap-2 border border-white/15 px-4 py-2 rounded-md text-white hover:bg-white/10 duration-200"
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
            className="inline-flex items-center gap-3 border border-white/15 px-4 py-2 rounded-md bg-white hover:bg-white/80 text-gray-900 font-semibold duration-200"
            aria-label="Let's Connect on LinkedIn"
          >
            <span className="animate-pulse" aria-hidden="true">
              <FaLinkedin size={18} className="text-blue-800" />
            </span>
            <span>Let's Connect</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

