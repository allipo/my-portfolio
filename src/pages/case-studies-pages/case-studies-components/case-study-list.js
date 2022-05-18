import React from "react";
import "../case-studies-pages.css";

function List(props) {
  return (
    <div className="list-area">
      <div className="list-topic-holder">
        <h3 className="list-topic">{props.listTopic}</h3>
      </div>
      <div className="list-content-holder">
        {props.listContent.map((item) => {
          return <div className="list-item">{item}</div>;
        })}
      </div>
    </div>
  );
}

export default List;
