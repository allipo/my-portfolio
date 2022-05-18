import React from "react";
import "../case-studies-pages.css";

function Line(props) {
  return (
    <div className="line-area">
      <div className="line-topic-holder">
        <h3 className="line-topic">{props.lineTopic}</h3>
      </div>
      <div className="line-content-holder">
        <p className="line-content">{props.lineContent}</p>
      </div>
    </div>
  );
}

export default Line;
