import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div>
      <ul className="icons">
        <li className="contactLI">
          <a href="mailto: MattphLawrence@gmail.com">
            <i className="fa fa-envelope footerIcon"></i>
          </a>
        </li>
        <li className="contactLI">
          <a href="https://www.linkedin.com/in/mattplawrence/" target="_blank">
            <i className="fa-brands fa-linkedin footerIcon"></i>
          </a>
        </li>
        <li className="contactLI">
          <a href="https://github.com/MattpLawrence" target="_blank">
            <i className="fa fa-github footerIcon"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
