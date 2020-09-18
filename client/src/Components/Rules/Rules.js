import React from "react";
import Slider from "./Swiper/Slider";
import Accordions from "./Accordions";

const Rules = () => {
  return (
    <div className="container">
      <div className="rules">
        <h1>Rules in 4 Steps</h1>
        <Slider />
        <h2>More details</h2>
        <div className="rules-accordions">
          <Accordions />
        </div>
      </div>
    </div>
  );
};

export default Rules;
