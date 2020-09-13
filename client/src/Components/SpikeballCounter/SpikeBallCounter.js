import React, { useEffect } from "react";
import { connect } from "react-redux";
import Options from "./options/Options";
import GameBoard from "./gameBoard/GameBoard";

const SpikeBallCounter = ({ gameBegun }) => {
  useEffect(() => {}, [gameBegun]);
  return (
    <div className="spikeball-counter">
      SpikeBallCounter
      {gameBegun ? <GameBoard /> : <Options />}
    </div>
  );
};
const mapStateToProps = (state) => ({
  gameBegun: state.gameSettings.gameBegun,
});

export default connect(mapStateToProps, {})(SpikeBallCounter);
