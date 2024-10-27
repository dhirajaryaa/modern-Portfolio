import darkSaasLandingPage from "../assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "../assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "../assets/images/ai-startup-landing-page.png";
import GrainImg from "../assets/images/grain.jpg";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";

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
      link: "https://youtu.be/4k7IdSLxh6w",
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
      link: "https://youtu.be/7hi5zwO75yc",
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
      link: "https://youtu.be/Z7I5uSRHMHg",
      image: aiStartupLandingPage,
    },
  ];

  return (
    <section className=" pb-16">
      <div className="container py-20 ">
        <div className="flex justify-center">
          <p className="text-center uppercase tracking-widest text-lg font-bold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
            Real World Projects
          </p>
        </div>
        <h2 className="text-3xl font-serif text-center tracking-wide mt-4 capitalize ">
          Featured Projects
        </h2>
        <p className="text-white/60 text-center mt-1 my-5">
          Take a look at some of my real world projects
        </p>

        <div className="mt-10 flex flex-wrap gap-14 justify-center">
          {portfolioProjects.map((project, index) => (
            <article
              key={index}
              className="bg-gray-800 rounded-2xl relative z-0 overflow-hidden after:z-30 after:content-[''] after:absolute after:inset-0 after:border-2 after:border-offset-2 after:rounded-2xl  after:border-white/20 px-8 pt-8"
            >
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent inline-flex font-bold uppercase tracking-widest text-sm gap-2">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>

              <h3 className="text-2xl mt-2 font-serif">{project.title}</h3>
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
                      />
                    </span>
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <a href={project.link}>
                <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold mt-8 flex gap-2 items-center justify-center">
                  <span>View Live Site</span>
                  <MdArrowOutward size={20} />
                </button>
              </a>
              <img
                src={project.image}
                alt={project.title}
                className="mt-8 -mb-4"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureProjects;
