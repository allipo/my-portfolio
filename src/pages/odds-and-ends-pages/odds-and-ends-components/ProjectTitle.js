import React from "react";
import { Link } from "react-router-dom";
import "../../case-studies-pages/case-studies-pages.css";

function ProjectTitle(props) {
  return (
    <>
      <div className="study-label-holder">
        <Link to="/oddsandends">
          <h2 className="study-label">Project</h2>
        </Link>
      </div>
      <div className="study-name-holder">
        <h1 className="study-name">{props.title}</h1>
      </div>
    </>
  );
}

export default ProjectTitle;
