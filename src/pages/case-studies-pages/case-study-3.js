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
import heroImage from "./study-3-assets/floristAppHero.jpg";

const responsibilities = [
  "UX Research",
  "App Design",
  "Wireframing",
  "Prototyping",
  "User Testing",
];

function CaseStudy3() {
  return (
    <>
      <NavBar />
      <div className="study-content-container">
        <StudyTitle title="Inventory Management App for Florists" />
        <StudyHero src={heroImage} alt="" />
        {/* Overview */}
        <Subtitle subtitle="Overview" />
        <Line
          lineTopic="Product:"
          lineContent="An app to help small-scale florists easily plan and keep track of their inventory"
        />
        <Line
          lineTopic="Problem:"
          lineContent="Florists handle a lot of quick-changing inventory and many are small-scale operations without fancy technological systems in place to help them."
        />
        <Line
          lineTopic="Goal:"
          lineContent="Design a mobile inventory management app for trendy florists."
        />
        <List listTopic="Responsibilites:" listContent={responsibilities} />
      </div>
      <Footer />
    </>
  );
}

export default CaseStudy3;
