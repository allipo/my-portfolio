import React from "react";
import "../case-studies-pages.css";

function StudyButton(props) {
  return (
    <div id="link-btn-area">
      {props.btnArr.map((btn) => {
        return (
          <a href={btn.link} target="_blank" rel="noreferrer">
            <div className="link-btn">{btn.btnText}</div>
          </a>
        );
      })}
    </div>
  );
}

export default StudyButton;
