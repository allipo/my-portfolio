import React from "react";
import "./contentintro.css";

function ContentIntro(props) {
  return (
    <div id="intro-container">
      <p>{props.introText}</p>
    </div>
  );
}

export default ContentIntro;
