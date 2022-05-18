import React from "react";
import "../case-studies-pages.css";

function StudyHero(props) {
  return <img src={props.src} alt={props.alt} className="study-hero" />;
}

export default StudyHero;
