import React from "react";
import NavBar from "../../components/nav-bar/navbar";
import PageTitle from "../../components/page-title/PageTitle";
import Artwork from "../../components/artwork/artwork";
import Preview from "../../components/preview/preview";
import Footer from "../../components/footer/footer";

function Home() {
  const projectsArr = [
    { name: "Project 1 Name", style: "right" },
    { name: "Project 2 Name", style: "left" },
  ];

  let pageTitle = "ALLISON PESTOTNIK, UX DESIGNER";

  return (
    <>
      <NavBar />
      <PageTitle title={pageTitle} />
      <Artwork />
      <Preview projectName={projectsArr[0].name} style={projectsArr[0].style} />
      <Preview projectName={projectsArr[1].name} style={projectsArr[1].style} />
      <Footer />
    </>
  );
}

export default Home;
