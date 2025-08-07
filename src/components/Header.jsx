import { NavLink } from "react-router";
import { BsCircleHalf } from "react-icons/bs";

function Header() {
  return (
    <header className="flex w-full z-50 justify-center items-center ">
      <nav className=" flex items-center justify-between max-w-3xl w-full mt-5">
          <NavLink className={`text-3xl font-semibold text-gray-800 cursor-pointer tracking-tight`} to={"/"} >
            Dhiraj.dev
          </NavLink>
          <div className="flex items-center gap-4">
          
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline text-blue-500 text-lg font-light cursor-pointer"
                : "text-lg font-light text-gray-600 cursor-pointer"
            }
            to={"/blog"}
          >
            blog
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline text-blue-500 text-lg font-light cursor-pointer font-mono"
                : "text-lg font-light text-gray-600 cursor-pointer font-mono"
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
