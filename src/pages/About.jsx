import Card from "../Components/Card.jsx";
import Footer from "../Components/Footer.jsx";
import SdoLogo from "../images/SdoLogo.png";
import TribesLogo from "../images/TribesLogo.jpg";
import Nav from "../Components/Nav";
import { useState } from "react";
import Modal from "../Components/Modal.jsx";

const About = () => {
  const [modal, showModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (data) => {
    setSelectedProject(data); // store what was clicked
    showModal(true);
  };

  const scrollLeft = () => {
    const el = document.getElementById("carousel");
    el.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    const el = document.getElementById("carousel");
    el.scrollBy({ left: 300, behavior: "smooth" });
  };
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
              I’m a motivated Full-Stack Developer focused on the MERN stack,{" "}
              combining strong backend logic with dynamic React-driven UI <br />
              development. I also have solid experience in PHP and Java and{" "}
              quickly adapt to new frameworks. I led the development of DepTrack{" "}
              <br />
              an online document fast-tracking system with QR integration which{" "}
              earned Best in Capstone. I’m committed to building impactful,{" "}
              <br />
              efficient systems and contributing to innovative development
              teams.
            </p>
          </div>

          <hr className="mt-12 bg-red-400 h-0.5 border-0" />

          <div className="mt-6 flex flex-col items-start justify-center">
            <h1 className="text-red-800 font-medium text-lg">Projects</h1>
            <div className="flex justify-between items-center space-x-6">
              <Card
                image={SdoLogo}
                desc={"Document Tracking System for SDO Baliwag, Bulacan"}
                onclick={() =>
                  handleCardClick({
                    title: "Document Tracking System",
                    desc: "DepTrack is a streamlined document tracking and routing system designed to improve transparency and efficiency in organizational workflows. With real-time status updates, automated notifications, and a user-friendly interface, it ensures documents move smoothly across departments. Its practicality, clean design, and reliable performance earned it the Best in Capstone award.",
                    image: SdoLogo,
                  })
                }
              />
              <Card
                image={TribesLogo}
                desc={"Profiling System for Aeta Remontado Dumagat "}
                onclick={() =>
                  handleCardClick({
                    title: "Profiling System",
                    desc: "A centralized digital platform that supports the Aeta and Dumagat communities through efficient and transparent data management. It streamlines the collection of community records, tracks households and member information, and monitors resource distribution such as relief goods, donations, and projects. With organized data tools and easy report generation, the system helps leaders improve communication, ensure fairness, and deliver services more effectively.",
                    image: TribesLogo,
                  })
                }
              />
            </div>
          </div>
          <Modal modal={modal} onClose={() => showModal(false)}>
            {selectedProject && (
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center w-150">
                  <img
                    src={selectedProject.image}
                    alt=""
                    className="rounded mb-3 object-cover h-30 w-30"
                  />
                  <h2 className="text-xl font-bold mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-center">{selectedProject.desc}</p>
                </div>

                <div className="flex mt-4  space-x-1">
                  <div className="px-4 bg-orange-100 text-orange-600 font-bold border border-orange-600 rounded-full">
                    HTML
                  </div>
                  {selectedProject.title === "Profiling System" ? (
                    <div className="px-4 bg-blue-100 text-blue-600 font-bold border border-blue-600 rounded-full">
                      TAILWIND CSS
                    </div>
                  ) : (
                    <div className="px-4 bg-blue-100 text-blue-600 font-bold border border-blue-600 rounded-full">
                      CSS
                    </div>
                  )}
                  <div className="px-4 bg-yellow-100 text-yellow-600 font-bold border border-yellow-600 rounded-full">
                    JS
                  </div>
                  <div className="px-4 bg-purple-100 text-purple-600 font-bold border borderpurple-600 rounded-full">
                    PHP
                  </div>
                </div>

                <button
                  onClick={() => showModal(false)}
                  className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg cursor-pointer"
                >
                  Close
                </button>
              </div>
            )}
          </Modal>

          <hr className="mt-12 bg-red-400 h-0.5 border-0" />

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
