import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import Coin from "./Coin";

const Modal = ({ ballPossessionFlip, setNr }) => {
  const [showCloseBtn, setShowCloseBtn] = useState(false);
  const [modal, setModal] = useState(true);
  const [whoStart, SetWhoStart] = useState("");

  useEffect(() => {
    const timerOne = setTimeout(() => {
      SetWhoStart(ballPossessionFlip.teamOne ? "Team Red" : "Team Blue");
    }, 2500);
    const timerTwo = setTimeout(() => {
      setShowCloseBtn(true);
      window.addEventListener("click", (e) => {
        clickOutSide(e);
      });
    }, 3500);
    return () => {
      clearTimeout(timerOne);
      clearTimeout(timerTwo);
    };
  }, []);

  const clickOutSide = (e) => {
    const modalById = document.getElementById("modal");

    if (e.target === modalById) {
      setModal(false);
    }
  };
  return modal && setNr === 1 ? (
    <div id="modal" className="modal">
      <div className="modal-content">
        {showCloseBtn ? (
          <span className="closeBtn" onClick={() => setModal(false)}>
            {" "}
            &times;
          </span>
        ) : (
          <Fragment></Fragment>
        )}

        <div className="who-starts">
          <p className="who-starts-ask">Who will begun?</p>
          <p
            className={
              ballPossessionFlip.teamOne
                ? "who-starts-answer red"
                : "who-starts-answer blue"
            }
          >
            {whoStart}
          </p>
        </div>
        <Coin ballPossessionFlip={ballPossessionFlip} />
      </div>
    </div>
  ) : (
    <Fragment></Fragment>
  );
};
const MapStateToProps = (state) => ({
  ballPossessionFlip: state.gameSettings.ballPossessionFlip,
  setNr: state.game.setNr,
});

export default connect(MapStateToProps, {})(Modal);
