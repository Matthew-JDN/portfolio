import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import mylogo from "../images/mylogo.png";
const Nav = () => {
  return (
    <nav className="p-6 flex justify-between sticky top-0 bg-white z-50 shadow">
      <div className="flex items-end space-x-4 ml-12">
        <img
          src={mylogo}
          alt="Logo"
          className="h-10 w-15 brightness-100 drop-shadow-lg drop-shadow-rose-500"
        />
        <p className="text-xl font-medium text-gray-700">
          Matthew <span className="text-red-800">Peralta</span>
        </p>
      </div>
      <div className="flex items-center space-x-[100px] mr-12">
        <NavLink
          to="/"
          className={({ isActive }) =>
            clsx(
              "text-lg transition-all duration-300 hover:text-rose-700 hover:scale-110",
              isActive && "text-rose-700 font-bold scale-110"
            )
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            clsx(
              "text-lg transition-all duration-300 hover:text-rose-700 hover:scale-110",
              isActive && "text-rose-700 font-bold scale-110"
            )
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            clsx(
              "text-lg transition-all duration-300 hover:text-rose-700 hover:scale-110",
              isActive && "text-rose-700 font-bold scale-110"
            )
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
