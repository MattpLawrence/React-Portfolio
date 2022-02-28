import React from "react";

function Contact() {
  return (
    <div>
      <ul>
        <li class="contactLI">
          <i class="fas fa-envelope contactIcon"></i>MattphLawrence@gmail.com
        </li>
        <li class="contactLI">
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          <a href="https://www.linkedin.com/in/mattplawrence/" target="_blank">
            {" "}
            MattpLawrence
          </a>
        </li>
        <li class="contactLI">
          <i class="fab fa-github contactIcon"></i>
          <a href="https://github.com/MattpLawrence" target="_blank">
            MattpLawrence
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
