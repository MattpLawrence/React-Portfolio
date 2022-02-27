import React, { useState } from "react";
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";

function Page() {
  const [pageNav, setPageNav] = useState("About");

  const changePage = (e) => {
    const name = e.target.name;
    setPageNav(name);
    console.log(name);

    console.log(`pageNav = ${pageNav}`);
  };

  return (
    <div>
      <Header
        pageNav={pageNav}
        setPageNav={setPageNav}
        changePage={changePage}
      />
      <About />
      <Footer />
    </div>
  );
}

export default Page;
