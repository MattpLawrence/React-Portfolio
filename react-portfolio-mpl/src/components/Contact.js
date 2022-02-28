import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div>
      <ul>
        <li className="contactLI">
          <i className="fas fa-envelope contactIcon"></i>
          MattphLawrence@gmail.com
        </li>
        <li className="contactLI">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
          <a href="https://www.linkedin.com/in/mattplawrence/" target="_blank">
            {" "}
            MattpLawrence
          </a>
        </li>
        <li className="contactLI">
          <i className="fab fa-github contactIcon"></i>
          <a href="https://github.com/MattpLawrence" target="_blank">
            MattpLawrence
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
