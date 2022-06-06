import React, { useEffect } from "react";
import NavBar from "../../components/nav-bar/navbar";
import PageTitle from "../../components/page-title/PageTitle";
import ContentIntro from "../../components/content-intro/contentintro";
import DetailedPreview from "../../components/detailed-preview/detailedpreview";
import Footer from "../../components/footer/footer";
import GoToTop from "../../components/go-to-top/goToTop";
import "./casestudies.css";
import florishPic from "./florishAppPreview.png";
import ecopupPic from "./ecopupPreview.png";
import floristAppPic from "./floristPreview.png";
import florishHero from "../case-studies-pages/study-1-assets/florishHeroImg.jpg";
import ecopupHero from "../case-studies-pages/study-2-assets/ecopupHeroImg.jpg";
import floristHero from "../case-studies-pages/study-3-assets/floristAppHeroImg.jpg";

let caseStudiesTitle = "Case Studies";
let introText =
  "The following are a set of UX case studies that I completed while working to earn the Google UX Design Certificate. For each project, I developed an idea from the early stages of foundational user research through to a high-fidelity prototype, with plenty of steps in between!";

let detailedPreviewContent = [
  {
    name: "Florish App and Website",
    description:
      "An app for discovering native plants to grow in one's yard to promote biodiversity, along with a complementary blog website to drive downloads",
    image: florishPic,
    skills: [
      "Research",
      "Personas",
      "Responsive Design",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
    ],
    tools: ["Figma", "Material Design Icons"],
    linkTo: "/casestudy1",
  },
  {
    name: "EcoPup Responsive Website",
    description:
      "A responsive website for learning about and ordering EcoPup organic dog food",
    image: ecopupPic,
    skills: [
      "Research",
      "User Interviews",
      "Responsive Design",
      "Wireframing",
      "Prototyping",
      "Illustration",
      "Usability Testing",
    ],
    tools: ["Adobe XD", "Adobe Illustrator", "Adobe Fresco"],
    linkTo: "/casestudy2",
  },
  {
    name: "Inventory Management App for Florists",
    description:
      "A mobile application for florists to easily keep track of inventory and plan orders",
    image: floristAppPic,
    skills: [
      "Research",
      "Personas",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "Affinity Diagram",
    ],
    tools: ["Figma", "Jamboard"],
    linkTo: "/casestudy3",
  },
];

const preloadArr = [florishHero, ecopupHero, floristHero];

function CaseStudies() {
  useEffect(() => {
    preloadArr.forEach((picture) => {
      const img = new Image();
      img.src = picture;
    });
  });

  return (
    <>
      <NavBar />
      <PageTitle title={caseStudiesTitle} />
      <div className="silly-content-container">
        <ContentIntro introText={introText} />
        <DetailedPreview content={detailedPreviewContent} />
      </div>
      <Footer />
      <GoToTop />
    </>
  );
}

export default CaseStudies;
