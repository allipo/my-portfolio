import React from "react";
import NavBar from "../../components/nav-bar/navbar";
import PageTitle from "../../components/page-title/PageTitle";
import Footer from "../../components/footer/footer";
import GoToTop from "../../components/go-to-top/goToTop";
import resume from "./resume2022.pdf";
// import resumePic from "./resume2022.jpg";
import "./resume.css";

let resumeTitle = "Resumé";

function Resume() {
  return (
    <>
      <NavBar />
      <PageTitle title={resumeTitle} />
      {/* <div id="resumeHolder">
        <img src={resumePic} alt="resume" id="resumePic" />
      </div> */}
      <div id="resume-page-body">
        <iframe src={resume} title="resume pdf" id="resumeFrame" />
      </div>
      <Footer />
      <GoToTop />
    </>
  );
}

export default Resume;
