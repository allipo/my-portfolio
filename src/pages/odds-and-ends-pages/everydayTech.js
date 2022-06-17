import React, { useEffect } from "react";
import "../case-studies-pages/case-studies-pages.css";
import NavBar from "../../components/nav-bar/navbar";
import Footer from "../../components/footer/footer";
import GoToTop from "../../components/go-to-top/goToTop";
import ProjectTitle from "./odds-and-ends-components/ProjectTitle";
import ArtworkDisplay from "../../components/artwork-display/artworkDisplay";
import phone from "./everyday-tech-assets/phone.svg";
import pen from "./everyday-tech-assets/pen.svg";
import mouse from "./everyday-tech-assets/mouse.svg";
import coffeeCup from "./everyday-tech-assets/coffeecup.svg";

const everydayTechArr = [
  { picture: phone, caption: "Phone" },
  { picture: pen, caption: "Pen" },
  { picture: mouse, caption: "Mouse" },
  { picture: coffeeCup, caption: "Coffee Cup" },
];

function EverydayTech() {
  useEffect(() => {
    everydayTechArr.forEach((picture) => {
      const img = new Image();
      img.src = picture.picture;
    });
  });
  return (
    <>
      <NavBar />
      <ProjectTitle title="Everyday Tech" />
      <ArtworkDisplay picArr={everydayTechArr} />
      <Footer />
      <GoToTop />
    </>
  );
}

export default EverydayTech;
