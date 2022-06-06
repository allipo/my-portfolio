import React, { useEffect } from "react";
import NavBar from "../../components/nav-bar/navbar";
import PageTitle from "../../components/page-title/PageTitle";
import Artwork from "../../components/artwork/artwork";
import Preview from "../../components/preview/preview";
import Footer from "../../components/footer/footer";
import GoToTop from "../../components/go-to-top/goToTop";
import project1Pic from "../case-studies/florishAppPreview.png";
import project2Pic from "../case-studies/ecopupPreview.png";
import project3Pic from "../case-studies/floristPreview.png";
import resumeImg from "../resume/resume2022.jpg";
import phonicsPreview from "../odds-and-ends/phonicsPreviewPic.png";
import postcardsPreview from "../odds-and-ends/postcardsPreview.png";
import rabbitPreview from "../odds-and-ends/Rabbit.png";
import starrySkyPreview from "../odds-and-ends/starrySkyImg.png";
import faceDetectionPreview from "../odds-and-ends/faceDetectionPreview.png";

const preloadArr = [
  resumeImg,
  phonicsPreview,
  postcardsPreview,
  rabbitPreview,
  starrySkyPreview,
  faceDetectionPreview,
];

function Home() {
  useEffect(() => {
    preloadArr.forEach((picture) => {
      const img = new Image();
      img.src = picture;
    });
  });
  const projectsArr = [
    {
      name: "Florish App and Website",
      style: "left",
      picture: project1Pic,
      link: "/casestudy1",
    },
    {
      name: "EcoPup Responsive Website",
      style: "right",
      picture: project2Pic,
      link: "/casestudy2",
    },
    {
      name: "Inventory Management App for Florists",
      style: "left",
      picture: project3Pic,
      link: "/casestudy3",
    },
  ];

  let pageTitle = "ALLISON PESTOTNIK, UX DESIGNER";

  return (
    <>
      <NavBar />
      <PageTitle title={pageTitle} />
      <Artwork />
      <Preview
        projectName={projectsArr[0].name}
        style={projectsArr[0].style}
        pic={projectsArr[0].picture}
        link={projectsArr[0].link}
      />
      <Preview
        projectName={projectsArr[1].name}
        style={projectsArr[1].style}
        pic={projectsArr[1].picture}
        link={projectsArr[1].link}
      />
      <Preview
        projectName={projectsArr[2].name}
        style={projectsArr[2].style}
        pic={projectsArr[2].picture}
        link={projectsArr[2].link}
      />
      <Footer />
      <GoToTop />
    </>
  );
}

export default Home;
