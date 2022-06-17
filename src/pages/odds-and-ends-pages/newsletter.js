import React, { useEffect } from "react";
import "../case-studies-pages/case-studies-pages.css";
import NavBar from "../../components/nav-bar/navbar";
import Footer from "../../components/footer/footer";
import GoToTop from "../../components/go-to-top/goToTop";
import ProjectTitle from "./odds-and-ends-components/ProjectTitle";
import ArtworkDisplay from "../../components/artwork-display/artworkDisplay";
import wb1 from "./whiteboard-assets/wb-1.webp";
import wb2 from "./whiteboard-assets/wb-2.webp";
import wb3 from "./whiteboard-assets/wb-3.webp";
import wb4 from "./whiteboard-assets/wb-4.webp";
import wb5 from "./whiteboard-assets/wb-5.webp";
import wb6 from "./whiteboard-assets/wb-6.webp";
import wb7 from "./whiteboard-assets/wb-7.webp";
import wb8 from "./whiteboard-assets/wb-8.webp";
import wb9 from "./whiteboard-assets/wb-9.webp";
import wb10 from "./whiteboard-assets/wb-10.webp";
import wb11 from "./whiteboard-assets/wb-11.webp";
import wb12 from "./whiteboard-assets/wb-12.webp";
import wb13 from "./whiteboard-assets/wb-13.webp";
import wb14 from "./whiteboard-assets/wb-14.webp";
import wb15 from "./whiteboard-assets/wb-15.webp";
import wb16 from "./whiteboard-assets/wb-16.webp";

const whiteboardArr = [
  { picture: wb1, caption: "April Issue" },
  { picture: wb4, caption: "Teacher Poll" },
  { picture: wb2, caption: "September Issue" },
  { picture: wb3, caption: "Informational Article" },
  { picture: wb9, caption: "July Issue" },
  { picture: wb5, caption: "Contributed Article" },
  { picture: wb10, caption: "Travel Article" },
  { picture: wb6, caption: "Contributed Article" },
  { picture: wb7, caption: "December Issue" },
  { picture: wb8, caption: "Contributed Recipe" },
  { picture: wb11, caption: "June Issue" },
  { picture: wb12, caption: "Contributed Article" },
  { picture: wb13, caption: "Illustration" },
  { picture: wb14, caption: "May Issue" },
  { picture: wb15, caption: "Contributed Article" },
  { picture: wb16, caption: "Teacher Poll" },
];

function Newsletter() {
  useEffect(() => {
    whiteboardArr.forEach((picture) => {
      const img = new Image();
      img.src = picture.picture;
    });
  });
  return (
    <>
      <NavBar />
      <ProjectTitle title="Company Newsletter" />
      <ArtworkDisplay picArr={whiteboardArr} />
      <Footer />
      <GoToTop />
    </>
  );
}

export default Newsletter;
