import { featuredProjects } from "../data/profile";
import { FaGithub, FaLink } from "react-icons/fa";

featuredProjects;

function FeaturedProject() {
  return (
    <section className="flex flex-col gap-2 mt-8">
      <p className="text-lg font-semibold">my pov ✨:</p>
      <div className="flex gap-4 justify-evenly my-3 max-w-3xl w-full mx-auto flex-wrap">
        {featuredProjects.map((project) => (
          <article
            key={project.name}
            className="border border-gray-200 dark:border-gray-700 rounded-lg w-[330px] shadow-sm dark:shadow-gray-500"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto object-cover"
            />
            <div className="p-3">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-semibold">{project.name}</h3>
                <p
                  className={`text-xs px-2 py-1 rounded-lg ${
                    project.status === "completed"
                      ? " text-green-800 bg-green-400/30 dark:text-green-400"
                      : "text-red-700 bg-red-400/20 dark:text-rose-400"
                  }`}
                >
                  {project.status}
                  {project.status === "completed" ? "👍" : "🏗️"}
                </p>
              </div>
              <span className="text-xs text-gray-400 capitalize">
                {project.date}
              </span>
              <p className="text-sm font-text mt-1 opacity-80">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 my-2">
                {project.tags?.map((tag) => (
                  <button
                    type="button"
                    key={tag}
                    className="py-1 px-2 bg-gray-200 dark:bg-gray-700 rounded-sm text-xs capitalize font-medium"
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <div className="flex gap-2 mt-3">
                <a
                  href={project.liveLink}
                  target="_black"
                  className="bg-slate-600 hover:bg-slate-800 duration-200 ease-in-out hover:underline text-white flex gap-2 items-center p-2 rounded-lg text-sm font-text"
                >
                  <FaLink size={16} /> Visit Site
                </a>
                <a
                  href={project.repoLink}
                  target="_black"
                  className="bg-gray-900 hover:bg-slate-800 duration-200 ease-in-out hover:underline text-white flex gap-2 items-center p-2 rounded-lg text-sm font-text"
                >
                  <FaGithub size={16} /> Github
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProject;
