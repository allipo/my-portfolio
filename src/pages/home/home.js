import React from "react";
import "./home.css";
import Navigation from "../../components/navigation/navigation";
import Artwork from "../../components/artwork/artwork";
import Preview from "../../components/preview/preview";

function Home() {
  const projectsArr = [
    { name: "Project 1 Name", style: "right" },
    { name: "Project 2 Name", style: "left" },
  ];
  return (
    <>
      <div id="name-div" className="title-flex">
        <h1 id="name">Allison Pestotnik</h1>
        <div className="title-flex">
          <h2 className="job">Development</h2>
          <h2 className="job">UI/UX Design</h2>
        </div>
      </div>
      <Navigation />
      <Artwork />
      <Preview projectName={projectsArr[0].name} style={projectsArr[0].style} />
      <Preview projectName={projectsArr[1].name} style={projectsArr[1].style} />
    </>
  );
}

export default Home;
