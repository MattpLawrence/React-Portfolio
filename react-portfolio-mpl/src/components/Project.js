import React from "react";
import projectList from "../assets/projectList";

function Project() {
  return (
    <div>
      {projectList.map((proj) => {
        <div></div>;
      })}
    </div>
  );
}

export default Project;
