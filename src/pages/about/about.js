import React, { useEffect, useState } from "react";
import NavBar from "../../components/nav-bar/navbar";
import PageTitle from "../../components/page-title/PageTitle";
import Footer from "../../components/footer/footer";
import GoToTop from "../../components/go-to-top/goToTop";
import wavingMoving from "./waving.gif";
import wavingStill from "./waving.jpg";
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
      <div id="about-background">
        <div id="about-content-area">
          <div id="gifArea">
            {waving ? (
              <img
                src={wavingMoving}
                alt="myself waving"
                width="100%"
                className="me-pic"
              />
            ) : (
              <img
                src={wavingStill}
                alt="myself"
                width="100%"
                className="me-pic"
              />
            )}
          </div>
          <div id="about-writing-area">
            <p className="about-paragraph">
              <b>Hi there! </b> My name is Allison and I'm a Google-certified UX
              designer.
            </p>
            <h2 className="about-subheader">Background</h2>
            <p className="about-paragraph">
              I'm originally from Des Moines, Iowa, but have spent the past
              several years working abroad in Tokyo as an English conversation
              teacher and part-time news editor. I'm now headed back home to the
              States to develop a career in UX.
            </p>
            <h2 className="about-subheader">Why UX</h2>
            <p className="about-paragraph">
              I first got interested in user experience when I was a teacher and
              realized my students needed a better system for learning to read
              as non-native speakers, so I designed one for them in my spare
              time. It ended up making both their lives and mine a lot easier.
            </p>
            <p className="about-paragraph">
              However, I first really learned about UX/UI as a career in the
              fall of 2021, when I was learning to code and got hired to make a
              website prototype. I enjoyed the experience so much that a few
              months later I was enrolled in the Google UX Certificate program.
            </p>
            <h2 className="about-subheader">Design Philosophy</h2>
            <p className="about-paragraph">
              I've always been interested in art and design and would love to
              see more beauty and personality brought into the digital world. My
              time teaching students has also made me acutely aware of the
              limits of everyone's cognitive load, so I try to keep clarity
              top-of-mind while designing.
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <GoToTop />
    </>
  );
}

export default About;
