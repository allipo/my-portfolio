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
import heroImage from "./study-2-assets/dog_hero.jpg";
import previewImage1 from "./study-2-assets/previewImage1Test.jpg";
import previewImage2 from "./study-2-assets/previewImage2Test.jpg";
import previewImage3 from "./study-2-assets/previewImage3Test.jpg";
import persona1 from "./study-2-assets/persona1.jpg";
import persona2 from "./study-2-assets/persona2.jpg";
import empathyMap from "./study-2-assets/empathyMap1.jpg";
import userJourney from "./study-2-assets/userJourneyMap1.jpg";

const responsibilities = ["User research", "UX design", "Testing"];
const previewImages = [
  { src: previewImage1, alt: "" },
  { src: previewImage2, alt: "" },
  { src: previewImage3, alt: "" },
];
const painPoints = ["Pain point 1", "pain point 2", "pain point 3"];
const personasArr = [
  { src: persona1, alt: "" },
  { src: persona2, alt: "" },
];
const journeyAndEmpathyMapsArr = [
  { src: empathyMap, alt: "" },
  { src: userJourney, alt: "" },
];

function CaseStudy2() {
  return (
    <>
      <NavBar />
      <div className="study-content-container">
        <StudyTitle title="EcoPup Organic Dog Food" />
        <StudyHero src={heroImage} alt="" />
        {/* Overview */}
        <Subtitle subtitle="Overview" />
        <Line
          lineTopic="Product:"
          lineContent="A responsive website for an organic dog food brand to let users select and order dog food"
        />
        <Line lineTopic="Problem:" lineContent="asdfadsfadsfsdfs" />
        <Line lineTopic="Goal:" lineContent="asdfasdfasdf" />
        <List listTopic="Responsibilites:" listContent={responsibilities} />
        <StudyImage srcArr={previewImages} imgLabel="Preview" />
        {/* User Research */}
        <Subtitle subtitle="User Research" />
        <Line lineTopic="Summary:" lineContent="SfSDFSDFSDfdSf" />
        <List listTopic="Pain Points:" listContent={painPoints} />
        <StudyImage srcArr={personasArr} imgLabel="Personas" />
        <Line
          lineTopic="Problem Statement:"
          lineContent="Regina is a busy young professional who needs an easy and informative way to order organic dog food online because she wants to save time while doing right by her dog and the planet."
        />
        <StudyImage
          srcArr={journeyAndEmpathyMapsArr}
          imgLabel="Empathy Map, User Journey"
        />
      </div>
      <Footer />
    </>
  );
}

export default CaseStudy2;
