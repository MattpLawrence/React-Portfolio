import React from "react";
import projectList from "../assets/projectList";
import "../styles/Project.css";

function Project() {
  // let projectCards = projectList.map((proj) => {
  //   // destructure
  //   const { imgSrc, imgAlt, appHref, gitHref, name, description } = proj;
  //   // fil out jsx card
  //   <div>
  //     <div className="card" style="width: 18rem;">
  //       <img
  //         src={imgSrc}
  //         className="card-img-top"
  //         alt={imgAlt}
  //         href={appHref}
  //       ></img>
  //       <div className="card-body">
  //         <h5 className="card-title">{name}</h5>
  //         <p className="card-text">{description}</p>
  //       </div>
  //       <ul className="list-group list-group-flush">
  //         <li className="list-group-item">An item</li>
  //         <li className="list-group-item">A second item</li>
  //         <li className="list-group-item">A third item</li>
  //       </ul>
  //       <div className="card-body">
  //         <a href={gitHref} className="card-link">
  //           Card link
  //         </a>
  //       </div>
  //     </div>
  //   </div>;

  //   return projectCards;
  // });

  return projectList.map((proj, i) => (
    <div key={i}>
      <div className="card" style={{ width: "30rem" }}>
        <img
          src={proj.imgSrc}
          className="card-img-top"
          alt={proj.imgAlt}
          href={proj.appHref}
        ></img>
        <div className="card-body">
          <h5 className="card-title">{proj.name}</h5>
          <p className="card-text">{proj.description}</p>
        </div>

        <div className="card-body">
          <a href={proj.gitHref} className="card-link">
            View My Project
          </a>
        </div>
      </div>
    </div>
  ));
}

export default Project;
