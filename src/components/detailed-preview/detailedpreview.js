import React from "react";
import "./detailedpreview.css";

function DetailedPreview(props) {
  return (
    <>
      {props.content.map((study, i) => {
        return (
          <>
            <div id="preview-container">
              <div id="name-container">
                <h2>{study.name}</h2>
                <h3>{study.description}</h3>
              </div>
              <div id="content-holder">
                <div id="image-holder">
                  <img src={study.image} alt="" />
                </div>
                <div id="text-holder">
                  <div className="text-area">
                    <h3>Skills</h3>
                    <ul>
                      {study.skills.map((skill) => {
                        return <li>{skill}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="text-area">
                    <h3>Tools</h3>
                    <ul>
                      {study.tools.map((tool) => {
                        return <li>{tool}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {i !== props.content.length - 1 && <hr></hr>}
          </>
        );
      })}
    </>
  );
}

export default DetailedPreview;
