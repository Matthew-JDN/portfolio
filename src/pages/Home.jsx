import Nav from "../Components/Nav";
import leiFormal from "../images/leiFormal.png";
import leiPOINTING from "../images/leiPOINTING.png";
import atom from "../images/atom.png";
import css from "../images/css.png";
import html from "../images/html.png";
import js from "../images/js.png";
import mysql from "../images/mysql.png";
import php from "../images/php.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [defImage, setImage] = useState(leiFormal);

  function handleHover() {
    setImage(leiPOINTING);
  }

  function handleLeave() {
    setImage(leiFormal);
  }
  return (
    <div className="min-h-screen flex flex-col space-x-12">
      <Nav />
      <div className="flex-1 bg-gray-100 flex justify-center items-center">
        <img
          src={defImage}
          alt="Image"
          className="object-cover h-110 w-150 rounded-lg"
          onMouseOver={handleHover}
          onMouseOut={handleLeave}
        />
        <div className="flex flex-col justify-start pl-12 space-y-[100px]">
          <div>
            <h1 className="text-3xl font-semibold">
              Hello! I'm <br /> Matthew Peralta
            </h1>
            <p className="text-gray-600">Web developer | Software developer</p>
            <div className="pt-8">
              <Link
                to="/about"
                className="px-4 py-2 bg-red-400 rounded-sm text-white font-normal hover:bg-red-800"
              >
                Learn More About me
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-xl font-medium">Tech Stack</h1>
            <div className="flex items-center justify-center space-x-6 mt-4">
              <img src={atom} alt="React" className="object-fit h-8" />
              <img src={html} alt="Html" className="object-fit h-8" />
              <img src={css} alt="Css" className="object-fit h-8" />
              <img src={js} alt="js" className="object-fit h-8" />
              <img src={php} alt="php" className="object-fit h-8" />
              <img src={mysql} alt="Mysql" className="object-fit h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
