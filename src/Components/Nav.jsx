import { Link } from "react-router-dom";
import mylogo from "../images/mylogo.png";
const Nav = () => {
  return (
    <nav className="p-6 flex justify-between">
      <div className="flex items-end space-x-4 ml-12">
        <img
          src={mylogo}
          alt="Logo"
          className="h-10 w-15 brightness-100 drop-shadow-lg drop-shadow-rose-500"
        />
        <p className="text-xl font-medium text-gray-700">
          Matthew <span className="text-rose-700">Peralta</span>
        </p>
      </div>
      <div className="flex items-center space-x-[100px]">
        <Link
          to="/"
          className="text-lg transition-all duration-300 hover:text-rose-700 hover:scale-110"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-lg transition-all duration-300 hover:text-rose-700 hover:scale-110"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-lg transition-all duration-300 hover:text-rose-700 hover:scale-110"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
