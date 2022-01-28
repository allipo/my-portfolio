import React from "react";
import "./ContentHolder.css";

function ContentHolder(props) {
  return (
    <div id="background-area">
      <div id="content-holder">{props.content}</div>
    </div>
  );
}

export default ContentHolder;
