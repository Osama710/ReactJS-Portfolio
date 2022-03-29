import React from "react";
import ContentCard from "./ContentCard";
import MyStory from "./MyStory";
import MyServices from "./MyServices";
import MySkills from "./MySkills";
import MyContact from "./MyContact";
import Footer from "./Footer";

function DisplayData() {
  return (
    <div>
      <ContentCard />
      <MyStory />
      <MyServices />
      <MySkills />
      <MyContact />
      <hr className="hhh"></hr>
      <Footer />
    </div>
  );
}

export default DisplayData;
