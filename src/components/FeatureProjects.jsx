import devflowImg from "../assets/images/devflow.webp";
import quickformxImg from "../assets/images/quickformx.webp";
import aiResumeImg from "../assets/images/airesume.webp";
import GrainImg from "../assets/images/grain.jpg";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";
import SectionHeader from "./SectionHeader";
import portfolioProjects from "../data/project.json";

// image map
const imageMap = {
  "devflow.webp": devflowImg,
  "airesume.webp": aiResumeImg,
  "quickformx.webp": quickformxImg
};

function FeatureProjects() {
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
              {/* background grain */}
              <div
                className="absolute inset-0 -z-30 opacity-5"
                style={{ backgroundImage: `url(${GrainImg})` }}
              ></div>

              <div className="md:grid md:grid-cols-2 lg:gap-16">
                <div className="md:pb-12 lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent inline-flex font-bold uppercase tracking-normal text-sm gap-1">
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
                        <RiCheckboxCircleLine
                          size={18}
                          className="text-emerald-300/50"
                        />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold mt-8 flex gap-2 items-center justify-center hover:bg-white/80 duration-200">
                      <span>View Live Site</span>
                      <MdArrowOutward size={20} />
                    </button>
                  </a>
                </div>
                <div>
                  <img
                    src={imageMap[project.image]}
                    alt={project.title}
                    className="object-cover lg:absolute lg:h-full md:mt-0 md:mb-0 mt-4 overflow-hidden -mb-2 hover:scale-110 duration-300 lg:w-auto lg:max-w-none"
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
