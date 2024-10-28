import {
  FaReact,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaJs,
} from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import Card from "./Card";
import SectionHeader from "./SectionHeader";
import { SiPostman } from "react-icons/si";
import { RiNotionFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { FcLinux } from "react-icons/fc";
import { VscVscode } from "react-icons/vsc";

function About() {
  const sections = [
    {
      title: "Frontend",
      description: "Building responsive and modern interfaces.",
      techStack: [
        {
          name: "HTML",
          icon: <FaHtml5 size="20" className="text-red-500" />,
        },
        {
          name: "CSS",
          icon: <FaCss3Alt size="20" className="text-sky-500" />,
        },
        {
          name: "JavaScript",
          icon: <FaJs size="20" className="text-yellow-500" />,
        },
        {
          name: "React",
          icon: <FaReact size="20" className="text-blue-500" />,
        },
        {
          name: "Tailwind CSS",
          icon: <RiTailwindCssFill size="20" className="text-sky-500" />,
        },
      ],
    },
    {
      title: "Backend",
      description: "Creating robust server-side applications.",
      techStack: [
        {
          name: "Node.js",
          icon: <FaNodeJs size="20" className="text-green-500" />,
        },
        {
          name: "Express.js",
          icon: <FaNodeJs size="20" className="text-gray-500" />,
        },
        {
          name: "MongoDB",
          icon: <FaDatabase size="20" className="text-green-500" />,
        },
        {
          name: "Firebase",
          icon: <IoLogoFirebase size="20" className="text-yellow-400" />,
        },
      ],
    },
    {
      title: "Tools",
      description: "Utilizing powerful tools to enhance productivity.",
      techStack: [
        {
          name: "VS Code",
          icon: <VscVscode  size="20" className="text-blue-500" />,
        },
        {
          name: "Git",
          icon: <FaGitAlt size="20" className="text-orange-600" />,
        },
        {
          name: "Postman",
          icon: <SiPostman size="20" className="text-orange-600" />,
        },
        {
          name: "Notion",
          icon: <RiNotionFill size="20" className="text-white" />,
        },
        {
          name: "Linux",
          icon: <FcLinux size="20" />,
        },
      ],
    },
  ];

  return (
    <section id="about" className="pb-10">
      <div className="container">
        <SectionHeader
          tag="About Me"
          title="A glimpse into my world"
          description="Learn more about who I am, what I do, and what inspires me"
        />
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  gap-10">

        {sections.map((section, index) => (
          <Card key={index}>
            <div className="flex flex-col gap-5">
              <div className="flex justify-center flex-col gap-2">
                <h3 className="text-xl text-white flex items-center gap-2">
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
