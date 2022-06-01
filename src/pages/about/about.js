import React, { useEffect, useState } from "react";
import NavBar from "../../components/nav-bar/navbar";
import PageTitle from "../../components/page-title/PageTitle";
import Footer from "../../components/footer/footer";
import GoToTop from "../../components/go-to-top/goToTop";
import wavingMoving from "./waving.gif";
import wavingStill from "./waving.png";
import "./about.css";

let aboutTitle = "About Me";

function About() {
  const [waving, setWaving] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setWaving(false);
    }, 4200);
  });

  return (
    <>
      <NavBar />
      <PageTitle title={aboutTitle} />
      <div id="about-content-area">
        <div id="gifArea">
          {waving ? (
            <img src={wavingMoving} alt="myself waving" width="100%" />
          ) : (
            <img src={wavingStill} alt="myself" width="100%" />
          )}
        </div>
        <div id="about-writing-area">
          <p>adsfasfadsfas dfadsfadsfasdfas dfasdfadsfdsfadsfadsf</p>
        </div>
      </div>

      <Footer />
      <GoToTop />
    </>
  );
}

export default About;
