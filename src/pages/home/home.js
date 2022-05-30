import React from "react";
import NavBar from "../../components/nav-bar/navbar";
import PageTitle from "../../components/page-title/PageTitle";
import Artwork from "../../components/artwork/artwork";
// import Preview from "../../components/preview/preview";
import Footer from "../../components/footer/footer";
import GoToTop from "../../components/go-to-top/goToTop";
import project1Pic from "../case-studies/florishAppPreview.png";
import project2Pic from "../case-studies/ecopupPreview.png";
import project3Pic from "../case-studies/floristPreview.png";

function Home() {
  const projectsArr = [
    { name: "Florish App and Website", style: "left", picture: project1Pic },
    { name: "EcoPup Responsive Website", style: "right", picture: project2Pic },
    {
      name: "Inventory Management App for Florists",
      style: "left",
      picture: project3Pic,
    },
  ];

  let pageTitle = "ALLISON PESTOTNIK, UX DESIGNER";

  return (
    <>
      <NavBar />
      <PageTitle title={pageTitle} />
      <Artwork />
      {/* <Preview
        projectName={projectsArr[0].name}
        style={projectsArr[0].style}
        pic={projectsArr[0].picture}
      />
      <Preview
        projectName={projectsArr[1].name}
        style={projectsArr[1].style}
        pic={projectsArr[1].picture}
      />
      <Preview
        projectName={projectsArr[2].name}
        style={projectsArr[2].style}
        pic={projectsArr[2].picture}
      /> */}
      <Footer />
      <GoToTop />
    </>
  );
}

export default Home;
