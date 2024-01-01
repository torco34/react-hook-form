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
          <a href="{URL_DEL_GITHUB}" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="{URL_DEL_TWITTER}" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a
            href="{URL_DEL_LINKEDIN}"
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
