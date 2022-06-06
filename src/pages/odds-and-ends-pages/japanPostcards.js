import React, { useEffect } from "react";
import "../case-studies-pages/case-studies-pages.css";
import "./rabbitBicycle.css";
import NavBar from "../../components/nav-bar/navbar";
import Footer from "../../components/footer/footer";
import GoToTop from "../../components/go-to-top/goToTop";
import ProjectTitle from "./odds-and-ends-components/ProjectTitle";
import ArtworkDisplay from "../../components/artwork-display/artworkDisplay";
import catAndMan from "./japan-pics-assets/Cat_and_Man.jpg";
import donutShop from "./japan-pics-assets/Donut_Shop.jpg";
import festivalDancers from "./japan-pics-assets/Festival_Dancers.jpg";
import festivalFloat from "./japan-pics-assets/Festival_Float.jpg";
import festivalGame from "./japan-pics-assets/Festival_Game.jpg";
import fujiCoaster from "./japan-pics-assets/Fuji_Coaster.jpg";
import getaShop from "./japan-pics-assets/Geta_Shop.jpg";
import naritaFestivalGirls from "./japan-pics-assets/Narita_Festival_Girls.jpg";
import pachinkoParlor from "./japan-pics-assets/Pachinko_Parlor.jpg";
import paradePup from "./japan-pics-assets/Parade_Pup.jpg";
import sakuraCouple from "./japan-pics-assets/Sakura_Couple.jpg";
import shibuya from "./japan-pics-assets/Shibuya.jpg";
import snowDay from "./japan-pics-assets/Snow_Day.jpg";
import shinjukuGirl from "./japan-pics-assets/Shinjuku_Park_Girl.jpg";
import sumo from "./japan-pics-assets/Sumo.jpg";
import sushi from "./japan-pics-assets/Sushi.jpg";
import tokyoView from "./japan-pics-assets/Tokyo_View.jpg";
import trainStationStudents from "./japan-pics-assets/Train_Station_Students.jpg";
import tree from "./japan-pics-assets/Tree.jpg";

const postcardsArr = [
  { picture: catAndMan, caption: "Man and Cat" },
  { picture: donutShop, caption: "Donut Shop" },
  { picture: festivalDancers, caption: "Festival Dancers" },
  { picture: festivalFloat, caption: "Festival Float" },
  { picture: festivalGame, caption: "Festival Game" },
  { picture: fujiCoaster, caption: "Roller Coaster by Mount Fuji" },
  { picture: getaShop, caption: "Geta Shop" },
  { picture: naritaFestivalGirls, caption: "Girls at Narita Festival" },
  { picture: pachinkoParlor, caption: "Pachinko Parlor" },
  { picture: paradePup, caption: "Parade Pup" },
  { picture: sakuraCouple, caption: "Sakura by the Moat" },
  { picture: shibuya, caption: "Shibuya Crossing" },
  { picture: snowDay, caption: "Snow Day" },
  { picture: shinjukuGirl, caption: "Shinjuku Park" },
  { picture: sumo, caption: "Sumo Wrestlers" },
  { picture: sushi, caption: "Late Night Sushi" },
  { picture: tokyoView, caption: "Tokyo View" },
  { picture: trainStationStudents, caption: "Students at Train Station" },
  { picture: tree, caption: "Traditional Garden" },
];

function JapanPostcards() {
  useEffect(() => {
    postcardsArr.forEach((picture) => {
      const img = new Image();
      img.src = picture.picture;
    });
  });
  return (
    <>
      <NavBar />
      <ProjectTitle title="Postcards of Japan" />
      <ArtworkDisplay picArr={postcardsArr} />
      <Footer />
      <GoToTop />
    </>
  );
}

export default JapanPostcards;
