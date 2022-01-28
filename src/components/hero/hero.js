import React from "react";
import Artwork from "../artwork/artwork";
import "./hero.css";

function Hero() {
  return (
    <div id="hero">
      <div id="name-div" className="title-flex">
        <h1 id="name">Allison Pestotnik</h1>
        <div className="title-flex">
          <h2 className="job">UI/UX Design</h2>
          <h2 className="job">Development</h2>
        </div>
      </div>
      <Artwork />
    </div>
  );
}

export default Hero;
