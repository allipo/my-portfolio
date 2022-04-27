import React from "react";
import NavBar from "../../components/nav-bar/navbar";
import PageTitle from "../../components/page-title/PageTitle";
import ContentHolder from "../../components/content-holder/ContentHolder";
import Footer from "../../components/footer/footer";

let resumeTitle = "Résumé";

function Resume() {
  return (
    <>
      <NavBar />
      <PageTitle title={resumeTitle} />
      <ContentHolder />
      <Footer />
    </>
  );
}

export default Resume;
