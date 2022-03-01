import React from "react";
import "../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div>
      <ul className="contactUL">
        <li className="contactLI">
          <FontAwesomeIcon icon={faEnvelope} className="fa" />
          <a href="mailto: MattphLawrence@gmail.com">MattphLawrence</a>
        </li>
        <li className="contactLI">
          <FontAwesomeIcon icon={faLinkedin} className="fa" />
          <a
            href="https://www.linkedin.com/in/mattplawrence/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            MattpLawrence
          </a>
        </li>
        <li className="contactLI">
          <FontAwesomeIcon icon={faGithub} className="fa" />
          <a
            href="https://github.com/MattpLawrence"
            target="_blank"
            rel="noreferrer"
          >
            MattpLawrence
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
