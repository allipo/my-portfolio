import React from "react";
import Navigation from "../../components/navigation/navigation";
import Hero from "../../components/hero/hero";
import Preview from "../../components/preview/preview";

function Home() {
  const projectsArr = [
    { name: "Project 1 Name", style: "right" },
    { name: "Project 2 Name", style: "left" },
  ];
  return (
    <>
      <Hero />
      <Navigation />
      <Preview projectName={projectsArr[0].name} style={projectsArr[0].style} />
      <Preview projectName={projectsArr[1].name} style={projectsArr[1].style} />
    </>
  );
}

export default Home;
