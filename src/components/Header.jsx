import { NavLink } from "react-router";
import { BsCircleHalf } from "react-icons/bs";

function Header() {
  return (
    <header className="flex w-full z-50 justify-center items-center ">
      <nav className=" flex items-center justify-between max-w-4xl w-full">
          <NavLink className={`text-3xl font-semibold text-gray-800 cursor-pointer font-mono tracking-wide`} to={"/"} >
            Dhiraj.dev
          </NavLink>
          <div className="flex items-center gap-4">
          
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline text-blue-500 text-xl font-light cursor-pointer font-mono"
                : "text-xl font-light text-gray-600 cursor-pointer font-mono"
            }
            to={"/blog"}
          >
            blog
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline text-blue-500 text-xl font-light cursor-pointer font-mono"
                : "text-xl font-light text-gray-600 cursor-pointer font-mono"
            }
            to={"/pow"}
          >
            pow
          </NavLink>
          <BsCircleHalf size={20} />
          </div>
      </nav>
    </header>
  );
}

export default Header;
