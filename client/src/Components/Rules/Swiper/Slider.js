import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

import StepOne from "../../../img/step1.png";
import StepTwo from "../../../img/step2.png";
import StepThree from "../../../img/step3.png";
import StepFour from "../../../img/step4.png";

// Import Swiper styles
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);
const Slider = () => {
  return (
    <Swiper
      slidesPerView={1}
      navigation
      pagination
    >
      <SwiperSlide>
        <div className="step step-one">
          <div className="step-box">
            <img className="photo" src={StepOne} alt="Step One" />
          </div>
          <div className="text">
            <h5 className="title">2v2</h5>
            <p>
              Team <span className="red">Red</span> starts a point by hitting
              the ball down onto the net so it ricochets up towards Team{" "}
              <span className="blue">Blue</span>
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="step step-two">
          <div className="photo">
            <img src={StepTwo} alt="Step Two" />
          </div>
          <div className="text">
            <h5 className="title">3 Touches</h5>
            <p>
              Teams have up to three alternating touches (think bump, set,
              spike) to return the ball to the net.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="step step-three">
          <div className="step-box">
            <img className="photo" src={StepThree} alt="Step Three" />
          </div>
          <div className="text">
            <h5 className="title">360 Play</h5>
            <p>After the serve, players can move or hit in any direction.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="step step-four">
          <div className="photo">
            <img src={StepFour} alt="Step Four" />
          </div>
          <div className="text">
            <h5 className="title">Scoring</h5>
            <p>
              If a team can't return the ball onto the net with their 3 touches,
              their oponent scores 1 point. A shot that hits the ground, rim or
              bounces more then once on the net is no good. First team to 21
              wins!
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
