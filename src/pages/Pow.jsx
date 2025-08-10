import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import PowCard from "../components/PowCard";

function Pow() {
  const filters = ["all", "frontend", "backend", "fullstack", "extensions"];
  const [activeBtn, setActiveBtn] = useState("all");

  const [pows, setPows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const api =
    "https://raw.githubusercontent.com/dhirajaryaa/proof-of-work/refs/heads/main/index.json";

  useEffect(() => {
    const fetchAllPows = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(api);
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setPows(data);
      } catch (err) {
        setError("Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllPows();
  }, [api]);

  return (
    <section className="flex flex-col gap-2 my-5 px-3">
      <h1 className="text-lg sm:text-xl font-semibold">proof-of-work 💻:</h1>
      {/* filters  */}
      <div className="flex gap-2 items-center my-2">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter}
            onClick={() => setActiveBtn(filter)}
            className={`px-3 py-2 text-sm cursor-pointer duration-150 ease-in-out rounded-lg capitalize font-medium shadow ${
              activeBtn === filter
                ? "bg-gray-900 dark:bg-white text-white dark:text-gray-800"
                : "bg-white dark:bg-slate-950 text-black dark:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* list of my pov  */}
      <div className="flex gap-4 items-center flex-col">
        {loading ? (
          <div className="flex items-center gap-2 justify-center h-[25vh]">
            <FaSpinner className="animate-spin text-blue-600 text-" />
            <span>Loading...</span>
          </div>
        ) : error ? (
          <div className="text-red-600">{error}</div>
        ) : pows.length > 0 ? (
          pows.map((pow, index) => <PowCard pow={pow} key={index} />)
        ) : (
          <p className="text-sm my-16 text-center">⚠️ No proof-of-work.</p>
        )}
      </div>
    </section>
  );
}

export default Pow;
