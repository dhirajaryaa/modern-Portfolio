import darkSaasLandingPage from "../assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "../assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "../assets/images/ai-startup-landing-page.png";
import GrainImg from "../assets/images/grain.jpg";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";
import SectionHeader from "./SectionHeader";

function FeatureProjects() {
  const portfolioProjects = [
    {
      company: "Acme Corp",
      year: "2022",
      title: "Dark Saas Landing Page",
      results: [
        { title: "Enhanced user experience by 40%" },
        { title: "Improved site speed by 50%" },
        { title: "Increased mobile traffic by 35%" },
      ],
      link: "#",
      image: darkSaasLandingPage,
    },
    {
      company: "Innovative Co",
      year: "2021",
      title: "Light Saas Landing Page",
      results: [
        { title: "Boosted sales by 20%" },
        { title: "Expanded customer reach by 35%" },
        { title: "Increased brand awareness by 15%" },
      ],
      link: "#",
      image: lightSaasLandingPage,
    },
    {
      company: "Quantum Dynamics",
      year: "2023",
      title: "AI Startup Landing Page",
      results: [
        { title: "Enhanced user experience by 40%" },
        { title: "Improved site speed by 50%" },
        { title: "Increased mobile traffic by 35%" },
      ],
      link: "#",
      image: aiStartupLandingPage,
    },
  ];

  return (
    <section
      id="project"
      className="pb-16 pt-5"
      aria-labelledby="featured-projects"
      role="region"
    >
      <div className="container py-20 max-w-5xl w-full ">
        <SectionHeader
          tag="Real World Projects"
          title="Featured Projects"
          description=" Take a look at some of my real world projects"
        />

        <div className="mt-10 md:mt-20 flex flex-col gap-16">
          {portfolioProjects.map((project, index) => (
            <article
              key={index}
              className="w-full gap-10 bg-gray-800 rounded-2xl relative z-0 overflow-hidden shadow-2xl px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 border-white/20 border-[3px]"
              role="article"
              aria-label={project.title}
            >
              {/* grains background image  */}
              <div
                className="absolute inset-0 -z-30 opacity-5"
                style={{ backgroundImage: `url(${GrainImg})` }}
                role="presentation"
                aria-hidden="true"
              ></div>
              <div className="md:grid md:grid-cols-2 lg:gap-16">
                <div className="md:pb-12 lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent inline-flex font-bold uppercase tracking-normal text-sm  gap-1">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl mt-2 font-serif">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4" />
                  <ul className="flex flex-col gap-4 mt-4">
                    {project.results.map((result, i) => (
                      <li
                        key={i}
                        className="flex gap-2 items-center text-sm text-white/60"
                      >
                        <span>
                          <RiCheckboxCircleLine
                            size={18}
                            className="text-emerald-300/50"
                            role="presentation"
                            aria-hidden="true"
                          />
                        </span>
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold mt-8 flex gap-2 items-center justify-center hover:bg-white/80 duration-200">
                      <span>View Live Site</span>
                      <MdArrowOutward size={20} />
                    </button>
                  </a>
                </div>
                <div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className=" object-cover lg:absolute lg:h-full md:mt-0 md:mb-0 mt-4 overflow-hidden -mb-2 hover:scale-110 duration-300 lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureProjects;
