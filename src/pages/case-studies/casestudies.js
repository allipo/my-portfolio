import React from "react";
import NavBar from "../../components/nav-bar/navbar";
import PageTitle from "../../components/page-title/PageTitle";
import ContentHolder from "../../components/content-holder/ContentHolder";
import Footer from "../../components/footer/footer";

let caseStudiesTitle = "Case Studies";

function CaseStudies() {
  return (
    <>
      <NavBar />
      <PageTitle title={caseStudiesTitle} />
      <ContentHolder />
      <Footer />
    </>
  );
}

export default CaseStudies;
