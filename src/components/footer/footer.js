import React from "react";
import "./footer.css";
import { ReactComponent as LinkedIn } from "./linkedin.svg";
import { Link } from "react-router-dom";
import logoSnow from "../logo/logo-snow.svg";

function Footer() {
  return (
    <div id="footer-container">
      <div id="left-container">
        <Link to="/">
          <div className="left-child" id="bottom-logo">
            <img src={logoSnow} width="64px" alt="AP logo" />
          </div>
        </Link>
        <div className="left-child">Allison Pestotnik</div>
      </div>
      <div id="right-container">
        <div className="right-child">allisonpdesign@gmail.com</div>
        <a
          href="https://www.linkedin.com/in/allisonpestotnik/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn className="right-child" width="36" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
