// Footer.jsx

import React from "react";
import "../../assets/css/footer.css"; // Importa el archivo CSS
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"; // Importa íconos de redes sociales

export const Footer = () => {
  return (
    <div className="footer-container bg-dark">
      <div className="footer-content">
        <p>Conéctate conmigo en las redes sociales:</p>
        <div className="social-icons">
          <a
            href="https://github.com/torco34/react-hook-proyecto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/torcoroma-arias-ascanio-a20315227/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};
