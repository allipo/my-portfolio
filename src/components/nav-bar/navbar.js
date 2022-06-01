import React, { useState } from "react";
import "./navbar.css";
import logo from "../../components/logo/logo.svg";
import menuIcon from "./hamburgerMenu.png";
import closeIcon from "./closeIcon.png";
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
        <Link to="/">
          <div className="nav-child">Home</div>
        </Link>
        <Link to="/casestudies">
          <div className="nav-child">Case Studies</div>
        </Link>
        <Link to="/resume">
          <div className="nav-child">Resumé</div>
        </Link>
        <Link to="/about">
          <div className="nav-child">About Me</div>
        </Link>
        {/* <Link to="/oddsandends">
          <div className="nav-child">Odds & Ends</div>
        </Link> */}

        <img
          src={menuIcon}
          height="36px"
          alt="flyout menu icon"
          id="flyout-menu-icon"
          onClick={() => {
            setViewFlyout(true);
          }}
        />
      </div>
      {windowSize < 1000 && (
        <div id={viewFlyout ? "open-menu" : "close-menu"}>
          <div
            id="close-menu-icon-area"
            onClick={() => {
              setViewFlyout(false);
            }}
          >
            <img src={closeIcon} width="28px" alt="close flyout menu" />
          </div>
          <Link to="/">
            <div className="flyout-button">Home</div>
          </Link>
          <Link to="/casestudies">
            <div className="flyout-button">Case Studies</div>
          </Link>
          <Link to="/resume">
            <div className="flyout-button">Resumé</div>
          </Link>
          <Link to="/about">
            <div className="flyout-button">About Me</div>
          </Link>
          {/* <Link to="/oddsandends">
            <div>Odds & Ends</div>
          </Link> */}
        </div>
      )}
    </>
  );
}

export default NavBar;
