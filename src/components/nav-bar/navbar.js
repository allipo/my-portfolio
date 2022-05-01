import React, { useState } from "react";
import "./navbar.css";
import logo from "../../components/logo/logo.svg";
import { Link } from "react-router-dom";

function NavBar() {
  const [viewFlyout, setViewFlyout] = useState(false);

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  function handleWindowResize() {
    setWindowSize(window.innerWidth);
  }

  window.addEventListener("resize", handleWindowResize);

  return (
    <>
      <div id="nav-container">
        <Link to="/" id="logo">
          <div id="logo">
            <img src={logo} alt="initials logo" />
          </div>
        </Link>
        <Link to="/casestudies">
          <div className="nav-child">Case Studies</div>
        </Link>
        <Link to="/resume">
          <div className="nav-child">Résumé</div>
        </Link>
        <Link to="/about">
          <div className="nav-child">About Me</div>
        </Link>
        <Link to="/oddsandends">
          <div className="nav-child">Odds & Ends</div>
        </Link>

        <div
          id="flyout-menu-icon"
          onClick={() => {
            setViewFlyout(true);
          }}
        >
          Flyout Menu
        </div>
      </div>
      {windowSize < 1000 && (
        <div id={viewFlyout ? "open-menu" : "close-menu"}>
          <div
            onClick={() => {
              setViewFlyout(false);
            }}
          >
            X
          </div>
          <Link to="/">
            <div>Home</div>
          </Link>
          <Link to="/casestudies">
            <div>Case Studies</div>
          </Link>
          <Link to="/resume">
            <div>Résumé</div>
          </Link>
          <Link to="/about">
            <div>About Me</div>
          </Link>
          <Link to="/oddsandends">
            <div>Odds & Ends</div>
          </Link>
        </div>
      )}
    </>
  );
}

export default NavBar;