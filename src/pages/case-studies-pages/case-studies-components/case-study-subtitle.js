import React from "react";
import "../case-studies-pages.css";

function Subtitle(props) {
  return (
    <div className="subtitle-container">
      <h2 className="subtitle">{props.subtitle}</h2>
    </div>
  );
}

export default Subtitle;
