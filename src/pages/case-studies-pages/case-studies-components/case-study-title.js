import React from "react";
import { Link } from "react-router-dom";
import "../case-studies-pages.css";

function StudyTitle(props) {
  return (
    <>
      <div className="study-label-holder">
        <Link to="/casestudies">
          <h2 className="study-label">UX Case Study</h2>
        </Link>
      </div>
      <div className="study-name-holder">
        <h1 className="study-name">{props.title}</h1>
      </div>
    </>
  );
}

export default StudyTitle;
