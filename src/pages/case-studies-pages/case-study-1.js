import React from "react";
import "./case-studies-pages.css";
import NavBar from "../../components/nav-bar/navbar";
import StudyTitle from "./case-studies-components/case-study-title";
import StudyHero from "./case-studies-components/case-study-hero";
import Subtitle from "./case-studies-components/case-study-subtitle";
import StudyImage from "./case-studies-components/case-study-image";
import Line from "./case-studies-components/case-study-line";
import List from "./case-studies-components/case-study-list";
import Footer from "../../components/footer/footer";

const studyTitle = "Name of Study 1";
const heroSource = "";
const heroAlt = "";
const imgSrcArr = [
  { src: "", alt: "" },
  { src: "", alt: "" },
];
const listContent = [
  "blah blah blah",
  "blah blah blah blah",
  "blah blah blah",
  "blah blah blah blah",
];

function CaseStudy1() {
  return (
    <>
      <NavBar />
      <div className="study-content-container">
        <StudyTitle title={studyTitle} />
        <StudyHero src={heroSource} alt={heroAlt} />
        <Subtitle subtitle="Section Name" />
        <StudyImage srcArr={imgSrcArr} imgLabel="Label for images" />
        <Line
          lineTopic="Topic:"
          lineContent="Blah blah blah blah blah blah blah blah"
        />
        <Line
          lineTopic="Topic:"
          lineContent="Blah blah blah blah blah blah blah blah"
        />
        <List listTopic="Topic:" listContent={listContent} />
      </div>
      <Footer />
    </>
  );
}

export default CaseStudy1;
