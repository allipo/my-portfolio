import React from "react";
import NavBar from "../../components/nav-bar/navbar";
import PageTitle from "../../components/page-title/PageTitle";
import ContentIntro from "../../components/content-intro/contentintro";
import DetailedPreview from "../../components/detailed-preview/detailedpreview";
import Footer from "../../components/footer/footer";
import "./casestudies.css";
import picture from "../../components/detailed-preview/exampleImage.png";

let caseStudiesTitle = "Case Studies";
let introText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let detailedPreviewContent = [
  {
    name: "Name of Study 1",
    description: "Description of what the project is about",
    image: picture,
    skills: ["skill 1 blah blah", "skill 2", "skill 3"],
    tools: ["tool 1", "tool 2", "tool 3"],
    linkTo: "/casestudy1",
  },
  {
    name: "Name of Study 2",
    description: "Description of what the project is about",
    image: picture,
    skills: ["skill 1", "skill 2", "skill 3"],
    tools: ["tool 1", "tool 2", "tool 3"],
    linkTo: "/casestudy2",
  },
  {
    name: "Name of Study 3",
    description: "Description of what the project is about",
    image: picture,
    skills: ["skill 1", "skill 2", "skill 3"],
    tools: ["tool 1", "tool 2", "tool 3"],
    linkTo: "/casestudy3",
  },
];

function CaseStudies() {
  return (
    <>
      <NavBar />
      <PageTitle title={caseStudiesTitle} />
      <div className="main-content-container">
        <ContentIntro introText={introText} />
        <DetailedPreview content={detailedPreviewContent} />
      </div>
      <Footer />
    </>
  );
}

export default CaseStudies;
