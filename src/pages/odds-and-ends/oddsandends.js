import React, { useEffect } from "react";
import "./oddsandends.css";
import NavBar from "../../components/nav-bar/navbar";
import PageTitle from "../../components/page-title/PageTitle";
import ContentIntro from "../../components/content-intro/contentintro";
import DetailedPreview from "../../components/detailed-preview/detailedpreview";
import Footer from "../../components/footer/footer";
import GoToTop from "../../components/go-to-top/goToTop";
import phonicsPic from "./phonicsPreviewPic.webp";
import starrySkyPic from "./starrySkyImg.webp";
import newsletterPic from "../odds-and-ends-pages/whiteboard-assets/wb-1.webp";
import everydayTechPic from "../odds-and-ends-pages/everyday-tech-assets/pen.svg";
import rabbitPic from "./Rabbit.webp";
import computerPic from "./glowingComputer.jpg";
import japanPostcardsPic from "./postcardsPreview.webp";
import phonicsHero from "../odds-and-ends-pages/phonics-assets/phonicsHero.jpg";
import faceDetectionPreview from "./faceDetectionPreview.webp";

let oddsAndEndsTitle = "Odds & Ends";
let introText =
  "Here are various projects and tidbits that I've worked on in my free time to broaden my skill set. They involve fields adjacent to UX, including illustration, design, and programming.";

let detailedPreviewContent = [
  {
    name: "Phonics System",
    description:
      "A comprehensive phonics system I created while teaching in Japan to help my students learn to read",
    image: phonicsPic,
    skills: [
      "Understanding the Problem",
      "Empathizing with Users",
      "Ideating Solutions",
      "Graphic Design",
    ],
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
    linkTo: "/phonicsproject",
  },
  {
    name: "This Very Website",
    description:
      "I planned and built this portfolio site using the React library and deployed it with Netlify",
    image: computerPic,
    skills: [
      "Front-End Development",
      "Responsive Web Design",
      "Graphic Design",
    ],
    tools: [
      "Adobe Illustrator",
      "JSX/CSS",
      "JavaScript",
      "React",
      "Git/GitHub",
      "Netlify",
    ],
    linkTo: "/",
  },
  {
    name: "Postcards of Japan",
    description:
      "A series of hand-drawn postcards I made based on photographs I took around Japan",
    image: japanPostcardsPic,
    skills: ["Illustration", "Painting"],
    tools: ["Watercolor", "Calligraphy Pen"],
    linkTo: "/japanpostcards",
  },
  {
    name: "Starry Sky",
    description:
      "A moving website background I programmed using the JavaScript p5 library",
    image: starrySkyPic,
    skills: ["Programming", "Design"],
    tools: ["HTML/CSS", "JavaScript", "p5 Library"],
    externalLink: "https://allipo.github.io/StarrySky/",
  },
  {
    name: "Face Detection App",
    description:
      "A web app that lets users create an account and detect a face in their picture, completed as part of a web development course. (Not currently deployed.)",
    image: faceDetectionPreview,
    skills: ["Front-End Development", "Back-End Development", "Database"],
    tools: ["React", "Node.js", "API", "SQL", "Heroku"],
    linkTo: "/oddsandends",
  },
  {
    name: "Newsletter",
    description:
      "Sample pages from a company newsletter I directed as editor-in-chief while working at an English education company in Japan. The goal of the newsletter was to support teachers by fostering a sense of community, increasing engagement, and sharing resources.",
    image: newsletterPic,
    skills: [
      "Page Layouts",
      "Graphic Design",
      "Communication",
      "Collaboration",
    ],
    tools: ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop"],
    linkTo: "/newsletter",
  },
  {
    name: "Everyday Technology",
    description:
      "SVGs of everyday objects I created using shapes and gradients in Adobe Illustrator.",
    image: everydayTechPic,
    skills: ["Graphic Design", "Illustration"],
    tools: ["Adobe Illustrator"],
    linkTo: "/everydaytech",
  },
  {
    name: "Rabbit on Bicycle",
    description:
      "Nothing serious, just a simple practice with motion from when I was trying to get better at CSS",
    image: rabbitPic,
    skills: ["CSS Animation", "Graphic Design"],
    tools: ["HTML/CSS", "PNG Texture"],
    linkTo: "/rabbitproject",
  },
];
const preloadArr = [phonicsHero];

function OddsAndEnds() {
  useEffect(() => {
    preloadArr.forEach((picture) => {
      const img = new Image();
      img.src = picture;
    });
  });
  return (
    <>
      <NavBar />
      <PageTitle title={oddsAndEndsTitle} />
      <div className="nutty-content-container">
        <ContentIntro introText={introText} />
        <DetailedPreview content={detailedPreviewContent} />
      </div>
      <Footer />
      <GoToTop />
    </>
  );
}

export default OddsAndEnds;
