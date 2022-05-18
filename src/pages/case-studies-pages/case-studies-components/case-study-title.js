import React from "react";
import "../case-studies-pages.css";

function StudyTitle(props) {
  return (
    <>
      <div className="study-label-holder">
        <h2 className="study-label">UX Case Study</h2>
      </div>
      <div className="study-name-holder">
        <h1 className="study-name">{props.title}</h1>
      </div>
    </>
  );
}

export default StudyTitle;
