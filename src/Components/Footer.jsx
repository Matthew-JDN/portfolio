import githubSign from "../images/githubSign.png";
import facebook from "../images/facebook.png";
import email from "../images/email.png";

const Footer = () => {
  return (
    <div className="mt-12 border-1 border-red-500 bg-red-900 p-6 flex flex-col justify-center items-center">
      <div className="flex space-x-6">
        <a href="https://github.com/Matthew-JDN" target="_blank">
          <img
            src={githubSign}
            alt="github"
            className="object-fit h-8 filter invert sepia saturate-100 hue-rotate-180 brightness-90"
          />
        </a>
        <a
          href="https://www.facebook.com/matthew.peralta.80039"
          target="_blank"
        >
          <img
            src={facebook}
            alt="facebook"
            className="object-fit h-8 filter invert sepia saturate-100 hue-rotate-180 brightness-90"
          />
        </a>
        <a
          href="https://mail.google.com/mail/u/1/#search/leiprtla%40gmail.com"
          target="_blank"
        >
          <img
            src={email}
            alt="email"
            className="object-fit h-8 filter invert sepia saturate-100 hue-rotate-180 brightness-90"
          />
        </a>
      </div>

      <hr className="mt-4 bg-gray-300 h-[2px] border-0 w-[800px] opacity-70" />

      <h1 className="text-white mt-4">
        © 2025 Matthew Peralta. All rights reserved.
      </h1>
    </div>
  );
};

export default Footer;
