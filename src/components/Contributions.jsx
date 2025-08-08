import { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { contributionShowYear } from "../data/profile";

function Contributions({ theme }) {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <section className="flex flex-col gap-2 my-8">
      <p className="text-lg font-semibold">gitHub contributions 📟:</p>

      <div className="flex items-center justify-center flex-col gap-3 max-w-2xl w-full mx-auto">
        <GitHubCalendar
          username="dhirajaryaa"
          year={year}
          fontSize={12}
          colorScheme={theme}
        />
        <div className="flex gap-2 flex-wrap max-w-xl">
          {contributionShowYear.map((y) => (
            <button
              type="button"
              key={y}
              onClick={() => setYear(y)}
              className={`px-3 py-2 text-sm cursor-pointer border duration-150 ease-in-out rounded-lg capitalize font-medium ${
                year === y
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-800"
                  : "bg-white dark:bg-slate-950 text-black dark:text-white"
              }`}
            >
              {y}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contributions;
