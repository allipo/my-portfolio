import React from "react";
import NavBar from "../../components/nav-bar/navbar";
import PageTitle from "../../components/page-title/PageTitle";
import ContentHolder from "../../components/content-holder/ContentHolder";
import Footer from "../../components/footer/footer";

let aboutTitle = "About Me";

function About() {
  return (
    <>
      <NavBar />
      <PageTitle title={aboutTitle} />
      <ContentHolder />
      <Footer />
    </>
  );
}

export default About;
