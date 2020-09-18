import React, { useEffect } from "react";
import { connect } from "react-redux";
import Options from "./options/Options";
import GameBoard from "./gameBoard/GameBoard";

const SpikeBallCounter = ({ gameBegun, darkMode }) => {
  useEffect(() => {}, [gameBegun]);

  return (
    <div className="spikeball-counter container">
      <div className="spikeball-counter-logo"></div>
      {gameBegun ? <GameBoard /> : <Options />}
    </div>
  );
};
const mapStateToProps = (state) => ({
  gameBegun: state.gameSettings.gameBegun,
});

export default connect(mapStateToProps, {})(SpikeBallCounter);
