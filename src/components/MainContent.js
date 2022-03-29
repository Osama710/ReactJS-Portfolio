import React from "react";
// import Slider from "./Slider";
import slider1 from "../images/slider1.jpg";
import InfoCard from "./InfoCard";
import DisplayData from "./DisplayData";

function MainContent() {
  return (
    <div id="home">
      {/* <Slider />; */}
      <img className="slider-image" src={slider1} />
      <div className="cardinfo">
        <InfoCard />
      </div>
      <div className="otherdata">
        <DisplayData />
      </div>
    </div>
  );
}

export default MainContent;
