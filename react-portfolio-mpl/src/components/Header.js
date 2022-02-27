// this is a completely pointless component, but it was outlined in the requirements

import React from "react";
import Navigation from "./Navigation";

function Header(props) {
  const pageNav = props.pageNav;
  const changePage = props.changePage;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Navigation pageNav={pageNav} changePage={changePage} />
      </nav>
    </div>
  );
}

export default Header;
