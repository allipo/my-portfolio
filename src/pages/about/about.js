import React from "react";
import NavBar from "../../components/nav-bar/navbar";
import PageTitle from "../../components/page-title/PageTitle";
import ContentHolder from "../../components/content-holder/ContentHolder";
import Footer from "../../components/footer/footer";
import GoToTop from "../../components/go-to-top/goToTop";
import waving from "./waving.gif";
import "./about.css";

let aboutTitle = "About Me";

function About() {
  return (
    <>
      <NavBar />
      <PageTitle title={aboutTitle} />
      <div className="gifArea">
        <img src={waving} alt="myself waving" width="600" />
      </div>
      <ContentHolder />
      <Footer />
      <GoToTop />
    </>
  );
}

export default About;
