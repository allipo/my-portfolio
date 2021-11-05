import React from "react";
import "./artwork.css";
import Shards from "./shards";

function Artwork() {
  return (
    <div id="artwork-container">
      <img src="Asset4.png" alt="" id="hidden-glass" />
      <Shards id="main-artwork" />
    </div>
  );
}

export default Artwork;
