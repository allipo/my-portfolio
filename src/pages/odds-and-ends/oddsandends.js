import React from "react";
import "./oddsandends.css";
import NavBar from "../../components/nav-bar/navbar";
import PageTitle from "../../components/page-title/PageTitle";
import ContentIntro from "../../components/content-intro/contentintro";
import DetailedPreview from "../../components/detailed-preview/detailedpreview";
import Footer from "../../components/footer/footer";
import GoToTop from "../../components/go-to-top/goToTop";
import picture from "../case-studies-pages/study-1-assets/crazyEights.jpg";

let oddsAndEndsTitle = "Odds & Ends";
let introText =
  "Here are various projects and tidbits that I've worked on in my free time to broaden my skill set. They involve fields adjacent to UX, including illustration, design, and programming.";

let detailedPreviewContent = [
  {
    name: "Name of Study 1",
    description: "Description of what the project is about",
    image: picture,
    skills: ["skill 1 blah blah", "skill 2", "skill 3"],
    tools: ["tool 1", "tool 2", "tool 3"],
  },
  {
    name: "Name of Study 2",
    description: "Description of what the project is about",
    image: picture,
    skills: ["skill 1", "skill 2", "skill 3"],
    tools: ["tool 1", "tool 2", "tool 3"],
  },
  {
    name: "Name of Study 3",
    description: "Description of what the project is about",
    image: picture,
    skills: ["skill 1", "skill 2", "skill 3"],
    tools: ["tool 1", "tool 2", "tool 3"],
  },
];

function OddsAndEnds() {
  return (
    <>
      <NavBar />
      <PageTitle title={oddsAndEndsTitle} />
      <div className="main-content-container">
        <ContentIntro introText={introText} />
        <DetailedPreview content={detailedPreviewContent} />
      </div>
      <Footer />
      <GoToTop />
    </>
  );
}

export default OddsAndEnds;
