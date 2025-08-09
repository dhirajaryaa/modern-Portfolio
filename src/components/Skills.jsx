import { SiGmail } from "react-icons/si";
import { skills } from "../data/profile";

function Skills() {
  return (
    <section className="flex flex-col gap-2 mt-10">
      <p className="text-lg font-semibold">i definitely do 💪🏻:</p>
      <div className="flex gap-2 items-center justify-center flex-wrap w-full max-w-2xl mx-auto my-4">
        {skills.map((item) => (
          <button
          key={item.name}
            type="button"
            className="flex items-center border bg-white  text-gray-800 border-gray-300 shadow-md rounded-lg px-2 py-1 gap-1.5 text-sm whitespace-nowrap hover:-translate-y-[2px] duration-150 transition-transform"
          >
            {item.icon && <item.icon className={"size-4"} />}
            {item.name}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Skills;
