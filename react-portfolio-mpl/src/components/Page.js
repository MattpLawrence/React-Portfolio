import React, { useState } from "react";
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Project from "./Project";
import Contact from "./Contact";

function Page() {
  const [pageNav, setPageNav] = useState("About");

  const changePage = (e) => {
    const name = e.target.name;
    setPageNav(name);
  };
  const renderPage = () => {
    if (pageNav == "About") {
      return <About />;
    } else if (pageNav == "Project") {
      return <Project />;
    }
  };

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
