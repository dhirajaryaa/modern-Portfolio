import { Link } from "react-router";

function PowCard({ pow }) {
  return (
    <Link
      to={pow.slug}
      className="block w-full shadow rounded-md bg-gray-100 px-4 py-4 dark:bg-gray-700 hover:translate-y-0.5 transition-transform duration-150"
    >
      <h2 className="text-[14px] font-semibold capitalize flex items-center justify-between gap-2">
        <span className="truncate flex-1">{pow.title}</span>
        <time
          dateTime={pow.date}
          className="w-fit text-nowrap font-base text-sm opacity-50 "
        >
          {new Date(pow.date).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>
      </h2>
      <p className="opacity-80 text-sm font-text">{pow.description} </p>
    </Link>
  );
}

export default PowCard;
