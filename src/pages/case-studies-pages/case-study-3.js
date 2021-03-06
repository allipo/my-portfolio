import React from "react";
import "./case-studies-pages.css";
import NavBar from "../../components/nav-bar/navbar";
import StudyTitle from "./case-studies-components/case-study-title";
import StudyHero from "./case-studies-components/case-study-hero";
import StudyButton from "./case-studies-components/case-study-link-btn";
import Subtitle from "./case-studies-components/case-study-subtitle";
import StudyImage from "./case-studies-components/case-study-image";
import Line from "./case-studies-components/case-study-line";
import List from "./case-studies-components/case-study-list";
import Footer from "../../components/footer/footer";
import GoToTop from "../../components/go-to-top/goToTop";
import heroImage from "./study-3-assets/floristAppHeroImg.jpg";
import persona1 from "./study-3-assets/persona1.jpg";
import persona2 from "./study-3-assets/persona2.jpg";
import userJourneyMap from "./study-3-assets/userJourneyMap.jpg";
import storyboard1 from "./study-3-assets/storyboardBigPicture.jpeg";
import storyboard2 from "./study-3-assets/storyboardCloseup.jpeg";
import userFlow from "./study-3-assets/userFlow.jpg";
import paperWireframe from "./study-3-assets/paperWireframes.jpg";
import wireframes from "./study-3-assets/wireframes.jpg";
import lowFiPrototype from "./study-3-assets/lowFiPrototype.jpg";
import affinityDiagram from "./study-3-assets/affinityDiagram.jpg";
import stickerSheet from "./study-3-assets/stickerSheet.jpg";
import mockup1 from "./study-3-assets/mockup1.jpg";
import mockup2 from "./study-3-assets/mockup2.jpg";
import mockup3 from "./study-3-assets/mockup3.jpg";
import mockup4 from "./study-3-assets/mockup4.jpg";
import mockup5 from "./study-3-assets/mockup5.jpg";
import mockup6 from "./study-3-assets/mockup6.jpg";
import mockup7 from "./study-3-assets/mockup7.jpg";
import mockup8 from "./study-3-assets/mockup8.jpg";
import hiFiPrototype from "./study-3-assets/hiFiPrototype.jpg";

const linkBtnArr = [
  {
    link: "https://www.figma.com/proto/kIl0a2MuP27rAORFuIA19u/Floral-App-Wireframe?node-id=140%3A47&scaling=scale-down&page-id=140%3A2&starting-point-node-id=140%3A47&show-proto-sidebar=1",
    btnText: "View Prototype Live",
  },
];

const responsibilities = [
  "UX Research",
  "App Design",
  "Wireframing",
  "Prototyping",
  "User Testing",
];
const personasArr = [
  { src: persona1, alt: "", size: "desktop" },
  { src: persona2, alt: "", size: "desktop" },
];
const painPointsArr = [
  "1) Predicting demand is difficult, leading to inventory inefficiencies.",
  "2) Lack of sales reports causing ordering mistakes to sometimes go uncorrected.",
  "3) Workers find inventory counting tedious and uninteresting.",
  "4) Tech solutions are perceived by some users as complicated and unfriendly.",
];
const userJourneyMapArr = [{ src: userJourneyMap, alt: "", size: "desktop" }];
const storyboardArr = [
  { src: storyboard1, alt: "", size: "desktop" },
  { src: storyboard2, alt: "", size: "desktop" },
];
const userFlowPaperWireframeArr = [
  { src: userFlow, alt: "", size: "desktop" },
  { src: paperWireframe, alt: "", size: "desktop" },
];
const wireframesArr = [{ src: wireframes, alt: "", size: "prototype" }];
const lowFiPrototypeArr = [{ src: lowFiPrototype, alt: "", size: "prototype" }];
const usabilityStudyParams = [
  "Type - Moderated usability study",
  "Participants - 5 women and men aged 26 to 63",
  "Session Length - 20-30 minutes",
];
const studyFindings = [
  "1) Footer icons need to be more understandable.",
  "2) Some users are unfamiliar with POS terminology.",
  "3) Users need to be warned before data is lost if they go back during the input process.",
];
const affinityDiagramArr = [
  { src: affinityDiagram, alt: "", size: "prototype" },
];
const stickerSheetArr = [{ src: stickerSheet, alt: "", size: "desktop" }];
const mockupsArr = [
  { src: mockup1, alt: "", size: "tablet" },
  { src: mockup2, alt: "", size: "tablet" },
  { src: mockup3, alt: "", size: "tablet" },
  { src: mockup4, alt: "", size: "tablet" },
  { src: mockup5, alt: "", size: "tablet" },
  { src: mockup6, alt: "", size: "tablet" },
  { src: mockup7, alt: "", size: "tablet" },
  { src: mockup8, alt: "", size: "tablet" },
];
const hiFiPrototypeArr = [{ src: hiFiPrototype, alt: "", size: "prototype" }];
const accessibilityArr = [
  "1) Readability was verified with WebAIM contrast checker.",
  "2) Button and text colors were simplified for consistency.",
  "3) Buttons were enlarged and spaced farther apart to minimize pain points.",
];
const nextStepsArr = [
  "1) Collaborate with the engineering team to bring the designs to life.",
  "2) Design the remaining user flows of the app.",
  "3) Test how the different user flows work together to create a comprehensive inventory management system.",
];

function CaseStudy3() {
  return (
    <>
      <NavBar />
      <div className="study-content-container">
        <StudyTitle title="Inventory Management App for Florists" />
        <StudyHero src={heroImage} alt="" />
        {/* Prototype Link */}
        <StudyButton btnArr={linkBtnArr} />
        {/* Overview */}
        <Subtitle subtitle="Overview" />
        <Line
          lineTopic="Product:"
          lineContent="An app to help florists easily plan and keep track of their inventory."
        />
        <Line
          lineTopic="Problem:"
          lineContent="Florists handle a lot of quick-changing inventory and many flower shops are small-scale operations. Florists without the budget or interest to invest in a complicated POS system need help with their inventory management."
        />
        <Line
          lineTopic="Goal:"
          lineContent="Design an intuitive and friendly mobile inventory management app for small-scale florists."
        />
        <List listTopic="Responsibilites:" listContent={responsibilities} />
        {/* User Research */}
        <Subtitle subtitle="User Research" />
        <Line
          lineTopic="Summary:"
          lineContent="To learn more about user needs, a series of interviews was conducted with people familiar with flower shops and small business inventory needs in general. Through these interviews, it was discovered that small businesses like florists often rely on less-than-precise methods for handling inventory and product ordering. It was also learned that counting inventory is a significant pain point for some employees."
        />
        <List listTopic="Pain Points:" listContent={painPointsArr} />
        <StudyImage srcArr={personasArr} imgLabel="Personas" />
        <Line
          lineTopic="Problem Statement:"
          lineContent="Lena is a busy owner of a floral shop who needs an easier way to manage her fast-moving inventory
          because her current process is tedious and inexact."
        />
        <StudyImage srcArr={userJourneyMapArr} imgLabel="User Journey Map" />
        {/* Early Designs */}
        <Subtitle subtitle="Early Designs" />
        <StudyImage
          srcArr={storyboardArr}
          imgLabel="Big picture and close-up storyboards"
        />
        <StudyImage
          srcArr={userFlowPaperWireframeArr}
          imgLabel="User flow diagram and paper wireframes"
        />
        <StudyImage
          srcArr={wireframesArr}
          imgLabel="Digital wireframes created in Figma"
        />
        <StudyImage srcArr={lowFiPrototypeArr} imgLabel="Low-fi prototype" />
        {/* Usability Study */}
        <Subtitle subtitle="Usability Study" />
        <List listTopic="Parameters:" listContent={usabilityStudyParams} />
        <StudyImage
          srcArr={affinityDiagramArr}
          imgLabel="Organizing study findings with an affinity diagram"
        />
        <List listTopic="Findings:" listContent={studyFindings} />
        {/* Refined Designs */}
        <Subtitle subtitle="Refining the Designs" />
        <StudyImage
          srcArr={stickerSheetArr}
          imgLabel="Creating elements in a sticker sheet"
        />
        <StudyImage srcArr={mockupsArr} imgLabel="Mockups" />
        <StudyImage srcArr={hiFiPrototypeArr} imgLabel="Hi-fi prototype" />
        <List listTopic="Accessibility:" listContent={accessibilityArr} />
        {/* Takeaways */}
        <Subtitle subtitle="Takeaways" />
        <Line
          lineTopic="Impact:"
          lineContent='"It was easy to find the inventory and the add button. I also really liked the different methods for adding items - taking a photo of the receipt is a good idea." -Study Participant'
        />
        <Line
          lineTopic="What I Learned:"
          lineContent="Throughout this project I learned the importance of listening to users and iterating on the design. I also practiced thinking up innovative solutions to user problems."
        />
        <List listTopic="Next Steps:" listContent={nextStepsArr} />
      </div>
      <Footer />
      <GoToTop />
    </>
  );
}

export default CaseStudy3;
