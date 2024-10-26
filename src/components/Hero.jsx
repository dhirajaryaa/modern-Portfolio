import React from "react";
import PersonWithLaptop from "../assets/images/heroimg.svg";
import { BiDownArrow } from "react-icons/bi";
import { FaArrowCircleDown, FaArrowDown } from "react-icons/fa";

function Hero() {
  return (
    <section>
      <div className="container pt-10">
        {/* hero img  */}
        <div className="flex items-center justify-center">
          <img
            className="size-56"
            src={PersonWithLaptop}
            alt="A Person work on laptop"
          />
        </div>
        {/* adding status to the page */}
        <div>
          <span></span>
          <p>Available for new projects</p>
        </div>
        {/* adding content */}

        <h1>I design and develop exceptional digital experiences</h1>
        <p>
          I'm <span>Dhiraj Arya</span>, a web developer with a passion for
          building fast, scalable, and visually appealing webApps.
        </p>
        {/* adding call to action btn  */}
        <div className="">
          <button>
            <span>Explore My Work</span>
            <span>
              <FaArrowDown />
            </span>
          </button>
          <button>
            <span>👋</span>
            <span>Let's Connect</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
