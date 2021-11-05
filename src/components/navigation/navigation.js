import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div id="nav-holder">
      <Link to="/about">
        <h2 className="nav-btn">About</h2>
      </Link>
      <Link to="/resume">
        <h2 className="nav-btn">Résumé</h2>
      </Link>
      <Link to="/contact">
        <h2 className="nav-btn">Contact</h2>
      </Link>
    </div>
  );
}

export default Navigation;
