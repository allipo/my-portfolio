import React from "react";
import NavBar from "../../components/nav-bar/navbar";
import PageTitle from "../../components/page-title/PageTitle";
import ContentHolder from "../../components/content-holder/ContentHolder";
import Footer from "../../components/footer/footer";
import resume from "./resume2022.pdf";
import resumePic from "./resume2022.jpg";
import "./resume.css";

let resumeTitle = "Résumé";

function Resume() {
  return (
    <>
      <NavBar />
      <PageTitle title={resumeTitle} />
      <div id="resumeHolder">
        <img src={resumePic} alt="resume" id="resumePic" />
      </div>
      <iframe src={resume} title="resume pdf" id="resumeFrame" />
      <ContentHolder />
      <Footer />
    </>
  );
}

export default Resume;
