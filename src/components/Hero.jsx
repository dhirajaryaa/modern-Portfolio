import profileImg from "../assets/images/profile.png";
import { IoLocationOutline } from "react-icons/io5";
import { BsTwitterX, BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGooglemeet,SiGmail  } from "react-icons/si";
import { RiPagesLine } from "react-icons/ri";

function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title">
      {/* hero image and info  */}
      <div className="flex gap-3 items-center mt-10">
        <img
          src={profileImg}
          alt="Profile Image"
          className="rounded-2xl size-26"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-gray-900 font-bold text-lg sm:text-xl cursor-pointer">
            🙋‍♂️, I'm Dhiraj Arya
          </h1>
          <h4 className="flex items-center gap-1 text-gray-800 text-sm sm:text-base cursor-pointer">
            <IoLocationOutline size={20} />
            <span>Patna, India</span>
          </h4>
          {/* social links  */}
          <div className="flex gap-2 items-center sm:gap-3">
            <a
              href="https://x.com/dhirajarya01"
              target="_blank"
              className="flex items-center underline border border-gray-300 rounded-lg px-2 py-1 gap-1 text-sm sm:text-xs whitespace-nowrap"
            >
              <BsTwitterX size={15} /> Twitter
            </a>
            <a
              href="https://x.com/dhirajarya01"
              target="_blank"
              className="flex items-center underline border border-gray-300 rounded-lg px-2 py-1 gap-1 text-sm sm:text-xs whitespace-nowrap"
            >
              <BsLinkedin size={15} /> Linkedin
            </a>
            <a
              href="https://x.com/dhirajarya01"
              target="_blank"
              className="flex items-center underline border border-gray-300 rounded-lg px-2 py-1 gap-1 text-sm sm:text-xs whitespace-nowrap"
            >
              <BsGithub size={15} /> Github
            </a>
          </div>
        </div>
      </div>
      {/* About */}
      <p class="mt-4 px-2 text-sm sm:text-base w-full text-justify leading-6 text-gray-800 font-text">
        A 19-year-old self-taught MERN Stack Developer, passionate about
        building impactful web applications. Exploring the intersection of "AI"
        and modern web technologies, with a vision to launch innovative digital
        products.
      </p>
      {/* links  */}
      <div className="flex flex-col gap-2 mt-4">
        <p className="text-lg font-semibold my-4">hire me!! 👇</p>
        <div className="flex gap-2 items-center">
          <a
            href="https://x.com/dhirajarya01"
            target="_blank"
            className="flex items-center underline border border-gray-300 rounded-lg px-2 py-1 gap-1.5 text-sm sm:text-base whitespace-nowrap"
          >
            <SiGooglemeet size={16} /> meet
          </a>
          <a
            href="https://x.com/dhirajarya01"
            target="_blank"
            className="flex items-center underline border border-gray-300 rounded-lg px-2 py-1 gap-1.5 text-sm sm:text-base whitespace-nowrap"
          >
            <RiPagesLine  size={16} /> resume
          </a>
          <a
            href="https://x.com/dhirajarya01"
            target="_blank"
            className="flex items-center underline border border-gray-300 rounded-lg px-2 py-1 gap-1.5 text-sm sm:text-base whitespace-nowrap"
          >
            <SiGmail  size={16} /> gmail
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
