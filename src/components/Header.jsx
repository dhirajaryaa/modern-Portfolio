import { NavLink } from "react-router";
import { BsCircleHalf } from "react-icons/bs";

function Header() {
  return (
    <header className="flex w-full z-50 justify-center items-center">
      <nav className=" flex items-center justify-between max-w-3xl w-full mt-5">
          <NavLink className={`sm:text-3xl text-xl font-semibold cursor-pointer tracking-tight`} to={"/"} >
            Dhiraj.dev
          </NavLink>
          <div className="flex items-center gap-4">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline text-blue-500 text-sm sm:text-lg  font-light cursor-pointer"
                : "text-sm sm:text-lg  font-light text-gray-600 dark:text-white cursor-pointer"
            }
            to={"/blog"}
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
          <BsCircleHalf className="size-5 sm:size-6" />
          </div>
      </nav>
    </header>
  );
}

export default Header;
