import {
  FaReact,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaJs,
} from "react-icons/fa";
import { BsDownload, BsStars } from "react-icons/bs";
import Card from "./Card";
import SectionHeader from "./SectionHeader";
import { SiPostman } from "react-icons/si";
import { RiNotionFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { FcLinux } from "react-icons/fc";
import { VscVscode } from "react-icons/vsc";
import mySelf from "../assets/images/dhiraj.jfif";

function About() {
  const sections = [
    {
      title: "Frontend",
      description: "Building responsive and modern interfaces.",
      techStack: [
        {
          name: "HTML",
          icon: <FaHtml5 size="20" className="text-red-500" aria-label="HTML" />,
        },
        {
          name: "CSS",
          icon: <FaCss3Alt size="20" className="text-sky-500" aria-label="CSS" />,
        },
        {
          name: "JavaScript",
          icon: <FaJs size="20" className="text-yellow-500" aria-label="JavaScript" />,
        },
        {
          name: "React",
          icon: <FaReact size="20" className="text-blue-500" aria-label="React" />,
        },
        {
          name: "Tailwind CSS",
          icon: <RiTailwindCssFill size="20" className="text-sky-500" aria-label="Tailwind CSS" />,
        },
      ],
    },
    {
      title: "Backend",
      description: "Creating robust server-side applications.",
      techStack: [
        {
          name: "Node.js",
          icon: <FaNodeJs size="20" className="text-green-500" aria-label="Node.js" />,
        },
        {
          name: "Express.js",
          icon: <FaNodeJs size="20" className="text-gray-500" aria-label="Express.js" />,
        },
        {
          name: "MongoDB",
          icon: <FaDatabase size="20" className="text-green-500" aria-label="MongoDB" />,
        },
        {
          name: "Firebase",
          icon: <IoLogoFirebase size="20" className="text-yellow-400" aria-label="Firebase" />,
        },
      ],
    },
    {
      title: "Tools & Software",
      description:
        "Utilizing powerful tools and software to enhance productivity.",
      techStack: [
        {
          name: "VS Code",
          icon: <VscVscode size="20" className="text-blue-500" aria-label="VS Code" />,
        },
        {
          name: "Git",
          icon: <FaGitAlt size="20" className="text-orange-600" aria-label="Git" />,
        },
        {
          name: "Postman",
          icon: <SiPostman size="20" className="text-orange-600" aria-label="Postman" />,
        },
        {
          name: "Notion",
          icon: <RiNotionFill size="20" className="text-white" aria-label="Notion" />,
        },
        {
          name: "Linux",
          icon: <FcLinux size="20" aria-label="Linux" />,
        },
      ],
    },
  ];

  return (
    <section
      id="about"
      className="pb-10"
      aria-label="About section containing information about the developer"
    >
      <div className="container py-20 max-w-5xl w-full">
        <SectionHeader
          tag="About Me"
          title="A glimpse into my world"
          description="Learn more about who I am, what I do, and what inspires me"
        />
        <Card >
          <div className="flex flex-col gap-5">
            <div className="flex justify-center flex-col gap-2">
              <h3 className="text-xl text-white flex items-center gap-2 font-serif tracking-wider">
                <span>
                  <BsStars size="25" className="text-emerald-500" />
                </span>
                Who am I
              </h3>
              <p className="text-white/50 text-xs">
                Turning Vision into Reality with Code That Creates Impact
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify- items-center gap-5">
              <div>
                <img
                  src={mySelf}
                  alt="Dhiraj Arya - a passionate software engineer"
                  aria-label="Dhiraj Arya - a passionate software engineer"
                  className="size-40 md:size-60 rounded-3xl object-cover"
                />
              </div>
              <div className="md:text-left text-center w-full max-w-xl">
                <h2 className="text-sm md:text-xl font-semibold text-emerald-400">
                  Hi, I'm
                </h2>
                <h1 className="text-3xl md:text-4xl text-white my-2 tracking-wider font-serif">
                  Dhiraj Arya
                </h1>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed mt-4">
                  A passionate full-stack developer from India, turning ideas
                  into impactful digital solutions. Skilled in HTML, CSS,
                  JavaScript, React, and NodeJS, I'm on a mission to build
                  innovative applications that make a difference.
                </p>
                <a
                  href="https://drive.google.com/"
                  target="_blank"
                  aria-label="Download my resume in PDF format"
                  className="inline-flex my-4 items-center gap-2 border-2  rounded-xl border-slate-600 px-4 py-2 cursor-pointer bg-white/10 w-auto hover:bg-sky-500/20 duration-300 "
                >
                  <BsDownload size="16" />
                  <span className="text-white text-sm">Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        </Card>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10 md:gap-15 mt-10">
          {sections.map((section, index) => (
            <Card key={index}>
              <div className="flex flex-col gap-5">
                <div className="flex justify-center flex-col gap-2">
                  <h3 className="text-xl text-white flex items-center gap-2 font-serif tracking-wider">
                    <span>
                      <BsStars size="25" className="text-emerald-500" />
                    </span>
                    {section.title}
                  </h3>
                  <p className="text-white/50 text-xs">{section.description}</p>
                  <div className="flex flex-wrap gap-3  py-4">
                    {section.techStack.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center gap-2 border-2  rounded-xl border-slate-600 px-4 py-2 cursor-pointer bg-white/10 hover:bg-emerald-500/10 duration-300 hover:-translate-y-1"
                        aria-label={tech.name}
                      >
                        {tech.icon}
                        <span className="text-white text-sm">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

