import React, { useEffect } from "react";
import { connect } from "react-redux";
import Options from "./options/Options";
import GameBoard from "./gameBoard/GameBoard";

const SpikeBallCounter = ({ gameBegun, darkMode }) => {
  useEffect(() => {}, [gameBegun]);

  return (
    <div className="spikeball-counter container">
      <div className="spikeball-counter-logo">
        <img
          className="spikeball-counter-logo-image"
          src={
            darkMode
              ? "./imgs/sb_logo_counter_darkmode.png"
              : "./imgs/sb_logo_counter_lightmode.png"
          }
          alt="Counter Logo"
        />
      </div>
      {gameBegun ? <GameBoard /> : <Options />}
    </div>
  );
};
const mapStateToProps = (state) => ({
  gameBegun: state.gameSettings.gameBegun,
});

export default connect(mapStateToProps, {})(SpikeBallCounter);
