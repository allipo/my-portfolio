import React from "react";
import "./PageTitle.css";

function PageTitle(props) {
  return (
    <div id="header-container">
      <div id="title-container">{props.title}</div>
    </div>
  );
}

export default PageTitle;
