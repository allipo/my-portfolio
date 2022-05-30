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
import GoToTop from "../../components/go-to-top/goToTop";
import nativePlantsHero from "./study-1-assets/nativePlantsHero.jpg";
import persona1 from "./study-1-assets/persona1.jpg";
import persona2 from "./study-1-assets/persona2.jpg";
import userJourney1 from "./study-1-assets/userJourney1.jpg";
import userJourney2 from "./study-1-assets/userJourney2.jpg";
import crazyEights from "./study-1-assets/crazyEights.jpg";
import paperWireframesApp from "./study-1-assets/paperWireframesApp.jpg";
import wireframesApp from "./study-1-assets/wireframesApp.jpg";
import lowFiPrototypeApp from "./study-1-assets/lowFiPrototypeApp.jpg";
import affinityDiagramApp from "./study-1-assets/affinityDiagramApp.jpg";
import mockupApp1 from "./study-1-assets/mockupApp1.jpg";
import mockupApp2 from "./study-1-assets/mockupApp2.jpg";
import mockupApp3 from "./study-1-assets/mockupApp3.jpg";
import mockupApp4 from "./study-1-assets/mockupApp4.jpg";
import mockupApp5 from "./study-1-assets/mockupApp5.jpg";
import mockupApp6 from "./study-1-assets/mockupApp6.jpg";
import mockupApp7 from "./study-1-assets/mockupApp7.jpg";
import hiFiPrototypeApp from "./study-1-assets/hiFiPrototypeApp.jpg";
import siteMap from "./study-1-assets/siteMap.jpg";
import wireframesWeb from "./study-1-assets/wireframesWeb.jpg";
import lowFiPrototypeWeb from "./study-1-assets/lowFiPrototypeWeb.jpg";
import mockupWeb1 from "./study-1-assets/mockupWeb1.jpg";
import mockupWeb2 from "./study-1-assets/mockupWeb2.jpg";
import mockupWeb3 from "./study-1-assets/mockupWeb3.jpg";
import mockupWeb4 from "./study-1-assets/mockupWeb4.jpg";
import mockupWeb5 from "./study-1-assets/mockupWeb5.jpg";
import mockupsLargerScreensWeb from "./study-1-assets/mockupsLargerScreensWeb.jpg";
import hiFiPrototypeWeb from "./study-1-assets/hiFiPrototypeWeb.jpg";

const responsibilitiesArr = [
  "User Research",
  "Wireframing",
  "Prototyping",
  "Usability Testing",
];
const personasArr = [
  { src: persona1, alt: "", size: "desktop" },
  { src: persona2, alt: "", size: "desktop" },
];
const userJourneyMapArr = [
  { src: userJourney1, alt: "", size: "desktop" },
  { src: userJourney2, alt: "", size: "desktop" },
];
const crazyEightsAndPaperWireframesArr = [
  { src: crazyEights, alt: "", size: "desktop" },
  { src: paperWireframesApp, alt: "", size: "prototype" },
];
const appWireframesArr = [{ src: wireframesApp, alt: "", size: "prototype" }];
const lowFiPrototypeAppArr = [
  { src: lowFiPrototypeApp, alt: "", size: "prototype" },
];
const affinityDiagramAppArr = [
  { src: affinityDiagramApp, alt: "", size: "desktop" },
];
const usabilityStudyParams = [
  "Type - Moderated usability study",
  "Participants - 4 new or soon-to-be homeowners with landscaping needs and some interest in native plants",
  "Session Length - 20-30 minutes",
];
const studyFindings = [
  "1) The organization of the search feature was confusing to users.",
  "2) Searching involved too many screens and was frustrating to users.",
  "3) Users wanted to know a wide variety of specifics about each plant and to be able to search by those specifics.",
];
const appMockupsArr = [
  { src: mockupApp1, alt: "", size: "tablet" },
  { src: mockupApp2, alt: "", size: "tablet" },
  { src: mockupApp3, alt: "", size: "tablet" },
  { src: mockupApp4, alt: "", size: "tablet" },
  { src: mockupApp5, alt: "", size: "tablet" },
  { src: mockupApp6, alt: "", size: "tablet" },
  { src: mockupApp7, alt: "", size: "mobile" },
];
const hiFiPrototypeAppArr = [
  { src: hiFiPrototypeApp, alt: "", size: "prototype" },
];
const accessibilityArr = [
  "1) All text-background combinations were tested against WebAIM standards.",
  "2) Simple san-serif font was chosen for readability on screens.",
  "3) Button colors were simplified to contribute to a more uniform user flow.",
  "4) Search function was simplified for a more intuitive user flow",
];
const siteMapArr = [{ src: siteMap, alt: "", size: "desktop" }];
const wireframesWebArr = [{ src: wireframesWeb, alt: "", size: "prototype" }];
const lowFiPrototypeWebArr = [
  { src: lowFiPrototypeWeb, alt: "", size: "prototype" },
];
const webMobileMockupsArr = [
  { src: mockupWeb1, alt: "", size: "tablet" },
  { src: mockupWeb2, alt: "", size: "tablet" },
  { src: mockupWeb3, alt: "", size: "tablet" },
  { src: mockupWeb4, alt: "", size: "tablet" },
  { src: mockupWeb5, alt: "", size: "tablet" },
];
const mockupsLargerScreensWebArr = [
  { src: mockupsLargerScreensWeb, alt: "", size: "prototype" },
];
const hiFiPrototypeWebArr = [
  { src: hiFiPrototypeWeb, alt: "", size: "prototype" },
];
const nextStepsArr = [
  "1) Design additional pages such as app settings and website blog posts.",
  "2) Further test the website with users of different assistive technologies.",
  "3) Conduct post-launch research with users.",
];

function CaseStudy1() {
  return (
    <>
      <NavBar />
      <div className="study-content-container">
        <StudyTitle title="Florish App and Website" />
        <StudyHero src={nativePlantsHero} alt="" />
        {/* Overview */}
        <Subtitle subtitle="Overview" />
        <Line
          lineTopic="Product:"
          lineContent="An app and complementary website to help homeowners find information about gardening with plants native to their area"
        />
        <Line
          lineTopic="Problem:"
          lineContent="As the world faces a biodiversity crisis, yards and gardens remain highly underutilized in providing habitat for plants and animals, largely due to a lack of native species. Lawn upkeep further harms the environment from excessive use of water, pesticides, and mowers."
        />
        <Line
          lineTopic="Goal:"
          lineContent="The aim of the Florish app and website is to help people discover plants native to their area to plant in their green spaces. An increased share of native plants would help the environment by replenishing habitat; supporting pollinators; and reducing the use of water, pesticides, and mowers."
        />
        <List listTopic="Responsibilites:" listContent={responsibilitiesArr} />
        {/* User Research */}
        <Subtitle subtitle="User Research" />
        <Line
          lineTopic="Summary:"
          lineContent="During user research, it was learned that homeowners have some idea of the advantages of using native plants, but largely don't know how to find native plants or information about them. Research also uncovered what characteristics of native plants would be most helpful for homeowners to know."
        />
        <StudyImage srcArr={personasArr} imgLabel="Personas" />
        <Line
          lineTopic="Problem Statement:"
          lineContent="Ilse is an environmentally-conscious new homeowner who needs an easy way to find information on plants native to her area because she wants to promote biodiversity in her yard."
        />
        <StudyImage srcArr={userJourneyMapArr} imgLabel="User Journey Map" />
        {/* Early Designs of App*/}
        <Subtitle subtitle="Early Designs" />
        <StudyImage
          srcArr={crazyEightsAndPaperWireframesArr}
          imgLabel="'Crazy Eights' Ideation Technique and Paper Wireframes"
        />
        <StudyImage
          srcArr={appWireframesArr}
          imgLabel="Digital Wireframes in Figma"
        />
        <StudyImage srcArr={lowFiPrototypeAppArr} imgLabel="Low-fi Prototype" />
        {/* Usability Study of App*/}
        <Subtitle subtitle="Usability Study" />
        <List listTopic="Parameters:" listContent={usabilityStudyParams} />
        <StudyImage
          srcArr={affinityDiagramAppArr}
          imgLabel="Organizing findings with an affinity diagram"
        />
        <List listTopic="Main Findings:" listContent={studyFindings} />
        {/* Refined Designs for App*/}
        <Subtitle subtitle="Refining the Designs" />
        <StudyImage srcArr={appMockupsArr} imgLabel="Mockups" />
        <StudyImage srcArr={hiFiPrototypeAppArr} imgLabel="Hi-fi Prototype" />
        <List listTopic="Accessibility:" listContent={accessibilityArr} />
        {/* Website */}
        <Subtitle subtitle="Responsive Website" />
        <Line
          lineTopic="Goal:"
          lineContent="A complementary website was created to fulfill additional user needs such as learning more about native plants through a blog, locating nearby plant nurseries, and learning about the organization"
        />
        <StudyImage srcArr={siteMapArr} imgLabel="Site Map" />
        <Line
          lineTopic="Responsive Design:"
          lineContent="The responsive website was created using a mobile-first approach. The design choices reflected the distinct-but-related nature of the website to the app."
        />
        <StudyImage
          srcArr={wireframesWebArr}
          imgLabel="Digital Wireframes for Website"
        />
        <StudyImage srcArr={lowFiPrototypeWebArr} imgLabel="Low-fi Prototype" />
        <StudyImage
          srcArr={webMobileMockupsArr}
          imgLabel="Mockups for Mobile Screen Size"
        />
        <StudyImage
          srcArr={mockupsLargerScreensWebArr}
          imgLabel="Mockups for Larger Screen Sizes"
        />
        <StudyImage
          srcArr={hiFiPrototypeWebArr}
          imgLabel="Hi-fi Website Prototype"
        />
        {/* Takeaways */}
        <Subtitle subtitle="Takeaways" />
        <Line
          lineTopic="Impact:"
          lineContent='"When can I get this app?" -Study Participant'
        />
        <Line
          lineTopic="What I Learned:"
          lineContent="Through this project I learned about the challenges of designing a simple-yet-powerful search feature. I also learned about how to make two complementary products with overlapping yet distinct goals."
        />
        <List listTopic="Next Steps:" listContent={nextStepsArr} />
      </div>
      <Footer />
      <GoToTop />
    </>
  );
}

export default CaseStudy1;
