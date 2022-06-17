import React, { useState } from "react";
import "./artworkDisplay.css";
import leftArrow from "./left-arrow.png";
import rightArrow from "./right-arrow.png";

function ArtworkDisplay(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function clickRight() {
    if (currentIndex < props.picArr.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }
  function clickLeft() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(props.picArr.length - 1);
    }
  }

  return (
    <>
      <div id="displayed-artwork-holder">
        <div className="arrow-area" onClick={clickLeft}>
          <img src={leftArrow} alt="left carousel arrow" height="100%" />
        </div>
        <div id="artwork-and-caption-holder">
          {props.svg ? (
            props.picArr[currentIndex].picture
          ) : (
            <img src={props.picArr[currentIndex].picture} alt="" id="artwork" />
          )}
          <h2 id="caption">{props.picArr[currentIndex].caption}</h2>
        </div>
        <div className="arrow-area" onClick={clickRight}>
          <img src={rightArrow} alt="right carousel arrow" height="100%" />
        </div>
      </div>
    </>
  );
}

export default ArtworkDisplay;
