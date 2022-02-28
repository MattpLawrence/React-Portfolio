import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div>
      <ul className="icons">
        <li className="contactLI">
          <FontAwesomeIcon icon={faEnvelope} className="fa" />
          <a href="mailto: MattphLawrence@gmail.com"></a>
        </li>
        <li className="contactLI">
          <FontAwesomeIcon icon={faLinkedin} className="fa" />
          <a href="https://www.linkedin.com/in/mattplawrence/" target="_blank">
            {" "}
          </a>
        </li>
        <li className="contactLI">
          <FontAwesomeIcon icon={faGithub} className="fa" />
          <a href="https://github.com/MattpLawrence" target="_blank"></a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
