import { NavLink } from "react-router-dom";
import clsx from "clsx";
import mylogo from "../images/mylogo.png";
import { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    clsx(
      "text-lg transition-all duration-300 hover:text-rose-700 hover:scale-110",
      isActive && "text-rose-700 font-bold scale-110",
    );

  return (
    <nav className="p-4 md:p-6 flex flex-wrap justify-between items-center sticky top-0 bg-white z-50 shadow">
      <div className="flex items-end space-x-4 ml-4 md:ml-12">
        <img
          src={mylogo}
          alt="Logo"
          className="h-10 w-15 brightness-100 drop-shadow-lg drop-shadow-rose-500"
        />
        <p className="text-xl font-medium text-gray-700">
          Matthew <span className="text-red-800">Peralta</span>
        </p>
      </div>

      {/* Hamburger button - visible on small screens */}
      <button
        className="md:hidden mr-4 flex flex-col justify-center items-center w-8 h-8 space-y-1.5 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={clsx(
            "block w-6 h-0.5 bg-gray-700 transition-all duration-300",
            menuOpen && "rotate-45 translate-y-2",
          )}
        />
        <span
          className={clsx(
            "block w-6 h-0.5 bg-gray-700 transition-all duration-300",
            menuOpen && "opacity-0",
          )}
        />
        <span
          className={clsx(
            "block w-6 h-0.5 bg-gray-700 transition-all duration-300",
            menuOpen && "-rotate-45 -translate-y-2",
          )}
        />
      </button>

      {/* Desktop links */}
      <div className="hidden md:flex items-center space-x-12 lg:space-x-24 mr-12">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden w-full flex flex-col items-center space-y-4 pt-4 pb-2">
          <NavLink
            to="/"
            className={linkClass}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={linkClass}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={linkClass}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Nav;
