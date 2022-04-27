import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div id="nav-holder">
      <Link to="/casestudies">
        <h2 className="nav-btn" id="top-nav-btn">
          Case Studies
        </h2>
      </Link>
      <Link to="/resume">
        <h2 className="nav-btn">Résumé</h2>
      </Link>
      <Link to="/about">
        <h2 className="nav-btn">About</h2>
      </Link>
      <Link to="/oddsandends">
        <h2 className="nav-btn">Odds & Ends</h2>
      </Link>
    </div>
  );
}

export default Navigation;
