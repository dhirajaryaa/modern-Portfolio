import profileImg from "../assets/images/profile.png";
import { IoLocationOutline } from "react-icons/io5";
import { socialLinks,hireMeLinks } from "../data/profile";

function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title">
      {/* hero image and info  */}
      <div className="flex gap-3 items-start mt-10">
        <img
          src={profileImg}
          alt="Profile Image"
          className="rounded-xl sm:rounded-2xl size-22 sm:size-26"
        />
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-lg sm:text-xl cursor-pointer">
            🙋‍♂️, I'm Dhiraj Arya
          </h1>
          <h4 className="flex items-center gap-1 text-sm sm:text-base cursor-pointer">
            <IoLocationOutline size={20} />
            <span>Patna, India</span>
          </h4>
          {/* social links  */}
          <div className="flex gap-2 items-center sm:gap-3 flex-wrap">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                 rel="noopener noreferrer"
                className="flex items-center underline border border-gray-300 rounded-lg px-2 py-1 gap-1 text-xs sm:text-sm whitespace-nowrap"
              >
                {item.icon && <item.icon size={15} />}
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* About */}
      <p className="mt-4 px-2 text-sm sm:text-base w-full text-justify leading-6 opacity-90 font-text">
        A 19-year-old self-taught <span className="font-semibold underline text-neutral-700 dark:text-stone-400 font-text">MERN</span> Stack Developer, passionate about
        building impactful web applications. Exploring the intersection of <span className="font-semibold underline text-neutral-700 dark:text-stone-400 font-text">AI </span> 
         and modern web technologies, with a vision to launch innovative <span className="font-semibold underline text-neutral-700 dark:text-stone-400 font-text ">Digital
        Products.</span>
      </p>
      {/* links  */}
      <div className="flex flex-col gap-2 mt-4">
        <p className="text-lg font-semibold my-2">hire me!! 👇</p>
        <div className="flex gap-2 items-center justify-start max-w-2xl w-full mx-auto ">
          {
            hireMeLinks.map((item)=>(
          <a
          key={item.name}
            href={item.link}
            target="_blank"
             rel="noopener noreferrer"
            className="flex items-center underline border border-gray-300 rounded-lg px-2 py-1 gap-1.5 text-sm sm:text-base whitespace-nowrap font-text"
          >
              {item.icon && <item.icon className={"size-4"} />}
             {item.name}
          </a>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Hero;
