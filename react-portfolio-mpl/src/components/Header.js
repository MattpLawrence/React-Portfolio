import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Navigation />
      </nav>
    </div>
  );
}

export default Header;
