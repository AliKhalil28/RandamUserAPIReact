import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from "./logo.png";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-gray-600 p-4 fixed top-0 w-full shadow-md z-50">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-10 mr-2 rounded-full" />
        <span className="text-white text-xl font-bold">Random User API</span>
      </div>

      <div className="flex items-center space-x-4">
        <a
          href="https://github.com/AliKhalil28"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-gray-400 "
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/ali-khalil-753469285/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-gray-400"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
