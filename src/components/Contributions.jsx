import { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { contributionShowYear } from "../data/profile";

function Contributions() {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <section className="flex flex-col gap-2 mt-8">
      <p className="text-lg font-semibold">gitHub contributions 📟:</p>

      <div className="flex items-center justify-center flex-col gap-3">
        <GitHubCalendar
          username="dhirajaryaa"
          year={year}
          fontSize={12}
          colorScheme="light"
        />
        <div className="flex gap-2 flex-wrap max-w-xl">
          {contributionShowYear.map((y) => (
            <button
              type="button"
              key={y}
              onClick={() => setYear(y)}
              className="p-3 text-sm cursor-pointer hover:bg-gray-300 duration-150 ease-in-out bg-gray-200 rounded-sm capitalize font-medium"
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
