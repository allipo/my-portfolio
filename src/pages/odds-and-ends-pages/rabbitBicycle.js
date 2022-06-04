import React from "react";
import "../case-studies-pages/case-studies-pages.css";
import "./rabbitBicycle.css";
import NavBar from "../../components/nav-bar/navbar";
import Footer from "../../components/footer/footer";
import GoToTop from "../../components/go-to-top/goToTop";
import ProjectTitle from "./odds-and-ends-components/ProjectTitle";

function Rabbit() {
  return (
    <>
      <NavBar />
      <ProjectTitle title="CSS Art: Rabbit on Bicycle" />
      <div id="rabbit-holder">
        <div id="bicycle-container">
          <div class="parts" id="bar"></div>
          <div class="parts wheel" id="left-wheel">
            <div class="parts spoke" id="spoke-1"></div>
            <div class="parts spoke" id="spoke-2"></div>
            <div class="parts spoke" id="spoke-3"></div>
            <div class="parts spoke" id="spoke-4"></div>
          </div>
          <div class="parts wheel" id="right-wheel">
            <div class="parts spoke" id="spoke-5"></div>
            <div class="parts spoke" id="spoke-6"></div>
            <div class="parts spoke" id="spoke-7"></div>
            <div class="parts spoke" id="spoke-8"></div>
          </div>
          <div class="parts" id="seat-bar"></div>
          <div class="parts" id="handlebar-bar">
            {" "}
          </div>
          <div class="parts" id="handlebar-bar-horizontal"></div>
          <div class="parts" id="seat"></div>

          <div class="parts rabbit" id="rabbit-body"></div>
          <div class="parts ear rabbit" id="left-ear"></div>
          <div class="parts ear rabbit" id="right-ear"></div>
          <div class="parts rabbit" id="rabbit-head"></div>
          <div class="parts eye" id="left-eye"></div>
          <div class="parts eye" id="right-eye"></div>
        </div>
      </div>
      <Footer />
      <GoToTop />
    </>
  );
}

export default Rabbit;
