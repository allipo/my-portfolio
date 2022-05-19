import React from "react";
import "../case-studies-pages.css";

function StudyImage(props) {
  return (
    <>
      <h3 className="img-label">{props.imgLabel}</h3>
      <div className="imgs-holder">
        {props.srcArr.map((img) => {
          return <img src={img.src} alt={img.alt} className="image" />;
        })}
      </div>
    </>
  );
}

export default StudyImage;
