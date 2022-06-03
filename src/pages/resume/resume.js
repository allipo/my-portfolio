import React from "react";
import NavBar from "../../components/nav-bar/navbar";
import PageTitle from "../../components/page-title/PageTitle";
import Footer from "../../components/footer/footer";
import GoToTop from "../../components/go-to-top/goToTop";
// import resume from "./resume2022.pdf";
import resume from "./resume2022.jpg";
import "./resume.css";

let resumeTitle = "Resumé";

function Resume() {
  return (
    <>
      <NavBar />
      <PageTitle title={resumeTitle} />
      <div id="resume-page-body">
        <img src={resume} alt="resume jpg" id="resume-pic" />
        {/* <iframe
          src={resume + "#view=FitH"}
          title="resume pdf"
          id="resumeFrame"
        /> */}
      </div>
      <Footer />
      <GoToTop />
    </>
  );
}

export default Resume;
