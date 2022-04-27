import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div id="nav-container">
      <Link to="/" id="logo">
        <div>AP</div>
      </Link>
      <Link to="/casestudies">
        <div className="nav-child">Case Studies</div>
      </Link>
      <Link to="/resume">
        <div className="nav-child">Résumé</div>
      </Link>
      <Link to="/about">
        <div className="nav-child">About</div>
      </Link>
      <Link to="/oddsandends">
        <div className="nav-child">Odds&Ends</div>
      </Link>
    </div>
  );
}

export default NavBar;
