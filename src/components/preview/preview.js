import React from "react";
import { Link } from "react-router-dom";
import "./preview.css";

function Preview(props) {
  const projectName = props.projectName;
  return (
    <Link to={props.link}>
      <div className={`${props.style} project-preview-container`}>
        <h2>{projectName}</h2>
        <div className="pic-container">
          <img src={props.pic} alt="" />
        </div>
      </div>
    </Link>
  );
}

export default Preview;
