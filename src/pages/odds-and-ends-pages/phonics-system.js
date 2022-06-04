import React from "react";
import "../case-studies-pages/case-studies-pages.css";
import NavBar from "../../components/nav-bar/navbar";
import Footer from "../../components/footer/footer";
import ProjectTitle from "./odds-and-ends-components/ProjectTitle";
import StudyHero from "../case-studies-pages/case-studies-components/case-study-hero";
import Subtitle from "../case-studies-pages/case-studies-components/case-study-subtitle";
import Line from "../case-studies-pages/case-studies-components/case-study-line";
import List from "../case-studies-pages/case-studies-components/case-study-list";
import StudyImage from "../case-studies-pages/case-studies-components/case-study-image";
import GoToTop from "../../components/go-to-top/goToTop";
import phonicsHero from "./phonics-assets/phonicsHero.jpg";
import pictureA from "./phonics-assets/pictureA.jpg";
import pictureC from "./phonics-assets/pictureC.jpg";
import pictureG from "./phonics-assets/pictureG.jpg";
import pictureH from "./phonics-assets/pictureH.jpg";
import pictureY from "./phonics-assets/pictureY.jpg";
import pictureZ from "./phonics-assets/pictureZ.jpg";
import alphabetCards1 from "./phonics-assets/alphabetCards1.jpg";
import alphabetCards2 from "./phonics-assets/alphabetCards2.jpg";
import alphabetCards3 from "./phonics-assets/alphabetCards3.jpg";
import writingSheetD from "./phonics-assets/writingSheetD.jpg";
import writingSheetG from "./phonics-assets/writingSheetG.jpg";
import writingSheetK from "./phonics-assets/writingSheetK.jpg";
import writingSheetO from "./phonics-assets/writingSheetO.jpg";
import writingSheetT from "./phonics-assets/writingSheetT.jpg";
import worksheet1 from "./phonics-assets/worksheet1.jpg";
import worksheet2 from "./phonics-assets/worksheet2.jpg";
import worksheet3 from "./phonics-assets/worksheet3.jpg";
import worksheet4 from "./phonics-assets/worksheet4.jpg";
import flashcards1 from "./phonics-assets/flashcards1.jpg";
import flashcards2 from "./phonics-assets/flashcards2.jpg";
import flashcards3 from "./phonics-assets/flashcards3.jpg";
import flashcards4 from "./phonics-assets/flashcards4.jpg";
import flashcards5 from "./phonics-assets/flashcards5.jpg";
import flashcards6 from "./phonics-assets/flashcards6.jpg";

const userProblems = [
  "1) Existing phonics systems tend to focus on how a letter sounds or sometimes how it looks, but not both.",
  "2) Existing phonics systems often use words that are simple to sound out but wouldn't be understood by non-native speakers.",
  "3) Educational materials aimed at children tend to view the things children are best wired, and happiest, to do as an afterthought (such as moving around, finding things, and connecting emotionally to content).",
];
const takeaways = [
  "1) A greater familiarity with Adobe Creative Suite",
  "2) The importance of iteration",
  "3) That no matter how hard you try to predict pain points before testing, you can't.",
];
const alphabetArtworkPicsArr = [
  { src: pictureA, alt: "", size: "vertical-paper" },
  { src: pictureC, alt: "", size: "vertical-paper" },
  { src: pictureG, alt: "", size: "vertical-paper" },
  { src: pictureH, alt: "", size: "vertical-paper" },
  { src: pictureY, alt: "", size: "vertical-paper" },
  { src: pictureZ, alt: "", size: "vertical-paper" },
];

const alphabetCardsArr = [
  { src: alphabetCards1, alt: "", size: "vertical-paper" },
  { src: alphabetCards2, alt: "", size: "vertical-paper" },
  { src: alphabetCards3, alt: "", size: "vertical-paper" },
];
const writingSheetArr = [
  { src: writingSheetD, alt: "", size: "vertical-paper" },
  { src: writingSheetG, alt: "", size: "vertical-paper" },
  { src: writingSheetK, alt: "", size: "vertical-paper" },
  { src: writingSheetO, alt: "", size: "vertical-paper" },
  { src: writingSheetT, alt: "", size: "vertical-paper" },
];
const worksheetArr = [
  { src: worksheet1, alt: "", size: "desktop" },
  { src: worksheet2, alt: "", size: "vertical-paper" },
  { src: worksheet3, alt: "", size: "vertical-paper" },
  { src: worksheet4, alt: "", size: "vertical-paper" },
];
const flashcardsArr = [
  { src: flashcards1, alt: "", size: "vertical-paper" },
  { src: flashcards2, alt: "", size: "vertical-paper" },
  { src: flashcards3, alt: "", size: "vertical-paper" },
  { src: flashcards4, alt: "", size: "vertical-paper" },
  { src: flashcards5, alt: "", size: "vertical-paper" },
  { src: flashcards6, alt: "", size: "vertical-paper" },
];

function PhonicsSystem() {
  return (
    <>
      <NavBar />
      <div className="study-content-container">
        <ProjectTitle title="Phonics System" />
        <StudyHero src={phonicsHero} alt="" />
        <Subtitle subtitle="Overview" />
        <Line
          lineTopic="Product:"
          lineContent="A set of teaching materials aimed at helping children, including non-native English speakers, learn to read by bringing life to the sounds and shapes of letters."
        />
        <Line
          lineTopic="Background:"
          lineContent="While working as an English teacher in Japan I found that there wasn't a good system in place for my children, especially as non-native speakers, to learn phonics. So I tried my hand at designing one."
        />
        <Line
          lineTopic="Why Phonics:"
          lineContent="Research has shown many times that learning phonics, the process of sounding out words, is the most effective way to learn to read. Despite this, teaching phonics is often not given adequate attention or resources either in the U.S. or in English education settings abroad."
        />
        <Subtitle subtitle="Challenge" />
        <List listTopic="Problems:" listContent={userProblems} />
        <Line
          lineTopic="Goal:"
          lineContent="To create a coherent phonics system that incorporates sound, pictures, and movement to guide children through the beginning stages of learning to sound out words."
        />
        <Subtitle subtitle="Foundational Designs" />
        <StudyImage
          srcArr={alphabetArtworkPicsArr}
          imgLabel="Letter art created in Illustrator and Photoshop"
        />
        <Line
          lineTopic="Foundation:"
          lineContent="I started by trying to bring as much life as possible to the sounds and shapes of letters, connecting each letter to a coherent word/picture/sound/emotion."
        />
        <Line
          lineTopic="Hidden Letters:"
          lineContent="All the pictures contained one or more hidden versions of the letter, which students absolutely loved, and which was designed to incentivize them to quickly memorize the shape as they searched for it."
        />
        <Line
          lineTopic="What I'd Change:"
          lineContent="At the time I was pretty new to designing, and in retrospect I realize I should have used a more iterative process for the visual design."
        />
        <Subtitle subtitle="Letter Cards" />
        <StudyImage
          srcArr={alphabetCardsArr}
          imgLabel="Letter cards put together in InDesign"
        />
        <Line
          lineTopic="Purpose:"
          lineContent="These cards served a multitude of uses for games and activities in the classroom, including spelling out words (which my students thought was a game)."
        />
        <Line
          lineTopic="What I'd Change:"
          lineContent="I wish I had found an easier way of creating these than printing, cutting, and laminating them."
        />
        <Subtitle subtitle="Writing Sheets" />
        <StudyImage
          srcArr={writingSheetArr}
          imgLabel="Writing practice worksheets"
        />
        <Line
          lineTopic="Effectiveness:"
          lineContent="Because writing is traditionally challenging for students, I was surprised by how popular these were among students of all academic abilities. Students even tended to fill in the margins by copying the letters many more times than required."
        />
        ;
        <Line
          lineTopic="What I'd Change:"
          lineContent="I based the stroke order on teaching materials in use at my school, but after using these for some time I decided more intricate and exact versions of lowercase letters would have been better."
        />
        <Subtitle subtitle="Beyond Letters" />
        <Line
          lineTopic="Words:"
          lineContent="I divided the letters into groupings and created a list of words that students would be able to sound out each time they finished a new grouping."
        />
        ;
        <StudyImage
          srcArr={flashcardsArr}
          imgLabel="Flashcards for words based on groupings"
        />
        <Line
          lineTopic="Idea:"
          lineContent="The transition from learning phonics to being expected to read words is too sharp and unsupported for many students, so I tried to make materials to bridge the gap by making word-focused materials that only used letters students had already learned."
        />
        <Line
          lineTopic="What I'd Change:"
          lineContent="Color, a more uniform style, and more personality would have been great additions."
        />
        <StudyImage srcArr={worksheetArr} imgLabel="Creative worksheets" />
        <Line
          lineTopic="Worksheets:"
          lineContent="I made worksheets based on the words and letters the students had thus far encountered."
        />
        <Line
          lineTopic="What I'd Change:"
          lineContent="I wish I could have had time to make many more worksheets and iterate on them."
        />
        <Subtitle subtitle="Takeaways" />
        <List listTopic="What I Learned:" listContent={takeaways} />
      </div>
      <Footer />
      <GoToTop />
    </>
  );
}

export default PhonicsSystem;

<Line lineTopic="Product:" lineContent="." />;
