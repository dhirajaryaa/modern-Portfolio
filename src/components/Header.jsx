import { NavLink } from "react-router";
import { IoMdMoon, IoIosSunny } from "react-icons/io";

function Header({ setTheme,theme }) {
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <header className="flex w-full z-50 justify-center items-center py-4 bg-white text-black dark:bg-slate-950 duration-500 transition-colors dark:text-white sticky top-0">
      <nav className=" flex items-center justify-between max-w-3xl w-full px-2 sm:px-4">
        <NavLink
          className={`sm:text-3xl text-xl font-semibold cursor-pointer tracking-tight hover:underline`}
          to={"/"}
        >
          Dhiraj.dev
        </NavLink>
        <div className="flex items-center gap-4">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline text-blue-500 text-sm sm:text-lg  font-light cursor-pointer"
                : "text-sm sm:text-lg  font-light text-gray-600 dark:text-white cursor-pointer"
            }
            to="/blog"
          >
            blog
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline text-blue-500 text-sm sm:text-lg  font-light cursor-pointer"
                : "text-sm sm:text-lg  font-light text-gray-600 dark:text-white cursor-pointer"
            }
            to={"/pow"}
          >
            pow
          </NavLink>
          {/* theme toggle  */}
          <button onClick={toggleTheme} className="p-1 rounded-full cursor-pointer">
            {theme === "dark" ? (
              <IoIosSunny className="size-5 sm:size-6" />
            ) : (
              <IoMdMoon className="size-5 sm:size-6" />
            )}
            {/* <BsCircleHalf className="size-5 sm:size-6" /> */}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
