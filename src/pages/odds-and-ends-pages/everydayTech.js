import React from "react";
import "../case-studies-pages/case-studies-pages.css";
import NavBar from "../../components/nav-bar/navbar";
import Footer from "../../components/footer/footer";
import GoToTop from "../../components/go-to-top/goToTop";
import ProjectTitle from "./odds-and-ends-components/ProjectTitle";
import ArtworkDisplay from "../../components/artwork-display/artworkDisplay";
import { ReactComponent as Phone } from "./everyday-tech-assets/phone.svg";
import { ReactComponent as Pen } from "./everyday-tech-assets/pen.svg";
import { ReactComponent as Mouse } from "./everyday-tech-assets/mouse.svg";
import { ReactComponent as Cup } from "./everyday-tech-assets/coffeecup.svg";

const everydayTechArr = [
  { picture: <Phone />, caption: "Phone" },
  { picture: <Mouse />, caption: "Mouse" },
  { picture: <Pen />, caption: "Pen" },
  { picture: <Cup />, caption: "Coffee Cup" },
];

function EverydayTech() {
  return (
    <>
      <NavBar />
      <ProjectTitle title="Everyday Tech" />
      <ArtworkDisplay picArr={everydayTechArr} svg={true} />
      <Footer />
      <GoToTop />
    </>
  );
}

export default EverydayTech;
