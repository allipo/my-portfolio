import React from "react";
import "./preview.css";

function Preview(props) {
  const projectName = props.projectName;
  return (
    <div className={`${props.style} project-preview-container`}>
      <h3>{projectName}</h3>
      <div className="pic-container">
        <img src={props.pic} alt="" />
      </div>
    </div>
  );
}

export default Preview;
