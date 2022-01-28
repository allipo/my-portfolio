import React from "react";
import PageTitle from "../../components/page-title/PageTitle";
import ContentHolder from "../../components/content-holder/ContentHolder";

let aboutTitle = "About Me";
let aboutContent = "blah blah blah";

function About() {
  return (
    <>
      <PageTitle title={aboutTitle} />
      <ContentHolder content={aboutContent} />
    </>
  );
}

export default About;
