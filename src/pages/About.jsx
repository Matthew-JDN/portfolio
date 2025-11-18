import Card from "../Components/Card.jsx";
import Footer from "../Components/Footer.jsx";
import SdoLogo from "../images/SdoLogo.png";
import TribesLogo from "../images/TribesLogo.jpg";
import Nav from "../Components/Nav";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-100">
      <Nav />
      <div className="flex-1 flex flex-col justify-start items-center">
        <div className="flex flex-col justify-start mt-10">
          <h1 className="text-5xl text-red-800 font-bold">Matthew Peralta</h1>
          <p className="text-xl font-normal">
            Passionate Problem Solver & Creative Innovator
          </p>
          <div className="mt-12 bg-white rounded-lg shadow p-6">
            <p className="mb-2">
              <span className="text-red-800 text-2xl font-medium">"</span>Hello!
              I'm <b>Matthew Peralta...</b>
            </p>
            <p>
              BSIT student skilled in web development, computer troubleshooting,{" "}
              <br />
              and networking. I am eager to apply my technical knowledge in a{" "}
              real-world setting <br /> where I can gain hands-on experience,{" "}
              learn from professionals, and further
              <br /> develop my IT skills. My goal is to contribute to an
              innovative and <br /> IT-driven organization while continuously
              improving myself <br /> both personally and professionally.{" "}
            </p>
          </div>

          <hr className="mt-12 bg-red-400 h-[2px] border-0" />

          <div className="mt-6 flex flex-col items-start justify-center">
            <h1 className="text-red-800 font-medium text-lg">Projects</h1>
            <div className="flex justify-between items-center space-x-6">
              <Card
                image={SdoLogo}
                desc={"Document Tracking System for SDO Baliwag, Bulacan"}
              />
              <Card
                image={TribesLogo}
                desc={"Profiling System for Aeta Remontado Dumagat "}
              />
            </div>
          </div>

          <hr className="mt-12 bg-red-400 h-[2px] border-0" />

          <div className="mt-6">
            <h1 className="text-red-800 font-medium text-lg">Certifications</h1>
            <ul className="list-disc ml-8 text-red-400">
              <li>Introduction to Packet Tracer (2024) </li>
              <li>Introduction to C++ (2023)</li>
              <li>
                Computer Networking – Local Area Networks and OSI Model (2025){" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
