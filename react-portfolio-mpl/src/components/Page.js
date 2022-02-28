import React, { useState, useEffect } from "react";
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Project from "./Project";
import Contact from "./Contact";
import "../styles/Page.css";

function Page() {
  // set state to pass down to nav
  const [pageNav, setPageNav] = useState("About");
  //function to change page based on what nav tab is clicked
  const changePage = (e) => {
    const name = e.target.name;
    setPageNav(name);
  };
  // conditionally render correct page based on nav state
  const renderPage = () => {
    if (pageNav == "About") {
      return <About />;
    } else if (pageNav == "Project") {
      return (
        <div className="cardContainer">
          <Project />
        </div>
      );
    } else if (pageNav == "Contact") {
      return <Contact />;
    } else {
      return <h1> Page not found</h1>;
    }
  };
  useEffect(() => {
    document.title = `${pageNav} MPL`;
  });

  return (
    <div>
      <Header
        pageNav={pageNav}
        setPageNav={setPageNav}
        changePage={changePage}
      />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default Page;
