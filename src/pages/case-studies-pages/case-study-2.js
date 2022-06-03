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
import heroImage from "./study-2-assets/dog_hero.jpg";
import persona1 from "./study-2-assets/persona1.jpg";
import persona2 from "./study-2-assets/persona2.jpg";
import empathyMap from "./study-2-assets/empathyMap1.jpg";
import userJourney from "./study-2-assets/userJourneyMap1.jpg";
import siteMap from "./study-2-assets/siteMap1.jpg";
import digitalWireframe1 from "./study-2-assets/digital_wireframe_1.jpg";
import digitalWireframe2 from "./study-2-assets/digital_wireframe_2.jpg";
import digitalWireframe3 from "./study-2-assets/digital_wireframe_3.jpg";
import digitalWireframe4 from "./study-2-assets/digital_wireframe_4.jpg";
import digitalWireframe5 from "./study-2-assets/digital_wireframe_5.jpg";
import digitalWireframe6 from "./study-2-assets/digital_wireframe_6.jpg";
import lowFiPrototype from "./study-2-assets/lowFiPrototype.jpg";
import desktopMockup1 from "./study-2-assets/desktopMockup1.jpg";
import desktopMockup2 from "./study-2-assets/desktopMockup2.jpg";
import desktopMockup3 from "./study-2-assets/desktopMockup3.jpg";
import desktopMockup4 from "./study-2-assets/desktopMockup4.jpg";
import desktopMockup5 from "./study-2-assets/desktopMockup5.jpg";
import desktopMockup6 from "./study-2-assets/desktopMockup6.jpg";
import smallMockup1 from "./study-2-assets/smallMockup1.jpg";
import smallMockup2 from "./study-2-assets/smallMockup2.jpg";
import smallMockup3 from "./study-2-assets/smallMockup3.jpg";
import smallMockup4 from "./study-2-assets/smallMockup4.jpg";
import smallMockup5 from "./study-2-assets/smallMockup5.jpg";
import smallMockup6 from "./study-2-assets/smallMockup6.jpg";
import smallMockup7 from "./study-2-assets/smallMockup7.jpg";
import smallMockup8 from "./study-2-assets/smallMockup8.jpg";
import smallMockup9 from "./study-2-assets/smallMockup9.jpg";
import smallMockup10 from "./study-2-assets/smallMockup10.jpg";
import smallMockup11 from "./study-2-assets/smallMockup11.jpg";
import smallMockup12 from "./study-2-assets/smallMockup12.jpg";
import smallMockup13 from "./study-2-assets/smallMockup13.jpg";
import smallMockup14 from "./study-2-assets/smallMockup14.jpg";
import smallMockup15 from "./study-2-assets/smallMockup15.jpg";
import smallMockup16 from "./study-2-assets/smallMockup16.jpg";
import smallMockup17 from "./study-2-assets/smallMockup17.jpg";
import hiFiPrototype from "./study-2-assets/highFiPrototype.jpg";
import assetDisplay1 from "./study-2-assets/assetDisplay1.jpg";
import assetDisplay2 from "./study-2-assets/assetDisplay2.jpg";
import assetDisplay3 from "./study-2-assets/assetDisplay3.jpg";
import assetDisplay4 from "./study-2-assets/assetDisplay4.jpg";
import assetDisplay5 from "./study-2-assets/assetDisplay5.jpg";
import assetDisplay6 from "./study-2-assets/assetDisplay6.svg";

const linkBtnArr = [
  {
    link: "https://xd.adobe.com/view/f055c95b-7e2a-4829-aae4-651f69d2e974-a506/?fullscreen",
    btnText: "View Prototype Live",
  },
];

const responsibilities = [
  "User Research",
  "Wireframing",
  "Illustration",
  "Prototyping",
  "Usability Testing",
];

const painPoints = [
  "1) Dog food brands don't always provide enough information about health and environmental concerns for users to feel confident.",
  "2) Going to the pet supply store takes a lot of time and bags of dog food are heavy to carry home.",
  "3) Dog food websites don't usually offer customization of recommendations based on the individual needs of a dog or its owner.",
  "4) Not all dog food ordering sites have an option for recurring purchases.",
];
const personasArr = [
  { src: persona1, alt: "", size: "desktop" },
  { src: persona2, alt: "", size: "desktop" },
];
const journeyAndEmpathyMapsArr = [
  { src: empathyMap, alt: "", size: "desktop" },
  { src: userJourney, alt: "", size: "desktop" },
];
const siteMapArr = [{ src: siteMap, alt: "", size: "desktop" }];

const digitalWireframesArr = [
  { src: digitalWireframe1, alt: "", size: "desktop" },
  { src: digitalWireframe2, alt: "", size: "tablet" },
  { src: digitalWireframe3, alt: "", size: "mobile" },
  { src: digitalWireframe4, alt: "", size: "desktop" },
  { src: digitalWireframe5, alt: "", size: "tablet" },
  { src: digitalWireframe6, alt: "", size: "mobile" },
];

const lowFiPrototypeArr = [{ src: lowFiPrototype, alt: "", size: "prototype" }];

const usabilityStudyParams = [
  "Type - Moderated usability study",
  "Participants - 4 dog owners",
  "Session Length - 20-30 minutes",
];

const studyFindings = [
  "1) The meaning of the “order” tab was unclear to users.",
  "2) Users wanted more information about dog food, such as bag size and portion recommendations.",
  "3) Recurring order interval options didn't match users' preferred intervals.",
  "4) Users didn't realize there was content below the fold on some pages.",
];

const desktopMockupsArr = [
  { src: desktopMockup6, alt: "", size: "desktop" },
  { src: desktopMockup2, alt: "", size: "desktop" },
  { src: desktopMockup5, alt: "", size: "desktop" },
  { src: desktopMockup1, alt: "", size: "desktop" },
  { src: desktopMockup3, alt: "", size: "desktop" },
  { src: desktopMockup4, alt: "", size: "desktop" },
];

const smallMockupsArr = [
  { src: smallMockup1, alt: "", size: "mobile" },
  { src: smallMockup2, alt: "", size: "tablet" },
  { src: smallMockup3, alt: "", size: "mobile" },
  { src: smallMockup4, alt: "", size: "mobile" },
  { src: smallMockup5, alt: "", size: "tablet" },
  { src: smallMockup6, alt: "", size: "mobile" },
  { src: smallMockup7, alt: "", size: "tablet" },
  { src: smallMockup8, alt: "", size: "mobile" },
  { src: smallMockup9, alt: "", size: "tablet" },
  { src: smallMockup10, alt: "", size: "mobile" },
  { src: smallMockup11, alt: "", size: "tablet" },
  { src: smallMockup12, alt: "", size: "mobile" },
  { src: smallMockup13, alt: "", size: "tablet" },
  { src: smallMockup14, alt: "", size: "mobile" },
  { src: smallMockup15, alt: "", size: "tablet" },
  { src: smallMockup16, alt: "", size: "mobile" },
  { src: smallMockup17, alt: "", size: "tablet" },
];

const assetDisplayArr = [
  { src: assetDisplay6, alt: "", size: "asset" },
  { src: assetDisplay1, alt: "", size: "tablet" },
  { src: assetDisplay2, alt: "", size: "tablet" },
  { src: assetDisplay3, alt: "", size: "tablet" },
  { src: assetDisplay4, alt: "", size: "asset" },
  { src: assetDisplay5, alt: "", size: "asset" },
];

const accessibilityArr = [
  "1) Readability was verified with WebAIM contrast checker.",
  "2) A clear hierarchy of elements and typography was established.",
  "3) Action buttons were marked with bright green color.",
  "3) A progress bar was added to purchasing flow to help users not get lost.",
];

const hiFiPrototypeArr = [{ src: hiFiPrototype, alt: "", size: "prototype" }];

const nextStepsArr = [
  "1) Conduct another round of user testing.",
  "2) Continue to update site content based on company needs.",
  "3) Continue to implement accessibility considerations such as alt text.",
];

function CaseStudy2() {
  return (
    <>
      <NavBar />
      <div className="study-content-container">
        <StudyTitle title="EcoPup Organic Dog Food" />
        <StudyHero src={heroImage} alt="" />
        {/* Prototype Link */}
        <StudyButton btnArr={linkBtnArr} />
        {/* Overview */}
        <Subtitle subtitle="Overview" />
        <Line
          lineTopic="Product:"
          lineContent="A responsive website for an organic dog food brand to let users select and order dog food online."
        />
        <Line
          lineTopic="Problem:"
          lineContent="Users need an easy way to find out more about the value proposition of EcoPup dog food and order it without having to make tedious trips to the pet supply store."
        />
        <Line
          lineTopic="Goal:"
          lineContent="To make an online experience to satisfy needs for greater confidence and convenience in dog food purchasing, letting users get information and order dog food all in one place."
        />
        <List listTopic="Responsibilites:" listContent={responsibilities} />
        {/* User Research */}
        <Subtitle subtitle="User Research" />
        <Line
          lineTopic="Summary:"
          lineContent="Before ideating solutions, I interviewed dog owners about their experiences buying dog food. I found that many research participants were interested in ordering dog food online to simplify the task and found decisions regarding dog food overwhelming. A number of areas of potential improvement were discovered. I also conducted a competitive analysis of existing dog food ordering and dog food brand websites."
        />
        <List listTopic="Pain Points:" listContent={painPoints} />
        <StudyImage srcArr={personasArr} imgLabel="Personas" />
        <Line
          lineTopic="Problem Statement:"
          lineContent="Regina is a busy young professional who needs an easy and informative way to order organic dog food online because she wants to save time while doing right by her dog and the planet."
        />
        <StudyImage
          srcArr={journeyAndEmpathyMapsArr}
          imgLabel="Empathy map and user journey map"
        />
        {/* Early Designs */}
        <Subtitle subtitle="Early Designs" />
        <StudyImage srcArr={siteMapArr} imgLabel="Site map" />
        <StudyImage
          srcArr={digitalWireframesArr}
          imgLabel="Sample digital wireframes created in Adobe XD"
        />
        <StudyImage srcArr={lowFiPrototypeArr} imgLabel="Low-fi prototype" />
        {/* Usability Study */}
        <Subtitle subtitle="Usability Study" />
        <List listTopic="Parameters:" listContent={usabilityStudyParams} />
        <List listTopic="Findings:" listContent={studyFindings} />
        {/* Refined Designs */}
        <Subtitle subtitle="Refining the Designs" />
        <StudyImage
          srcArr={assetDisplayArr}
          imgLabel="Creating assets in Adobe Illustrator and Adobe Fresco"
        />
        <StudyImage srcArr={desktopMockupsArr} imgLabel="Mockups for desktop" />
        <StudyImage
          srcArr={smallMockupsArr}
          imgLabel="Sample mockups for mobile and tablet"
        />
        <StudyImage srcArr={hiFiPrototypeArr} imgLabel="Hi-fi prototype" />
        <List listTopic="Accessibility:" listContent={accessibilityArr} />
        {/* Takeaways */}
        <Subtitle subtitle="Takeaways" />
        <Line
          lineTopic="What I learned:"
          lineContent="Throughout the process I learned how to design with a desktop-first approach, how to display information in an easy-to-digest format, and how to incorporate accessibility considerations in my designs."
        />
        <List listTopic="Next Steps:" listContent={nextStepsArr} />
      </div>
      <Footer />
      <GoToTop />
    </>
  );
}

export default CaseStudy2;
