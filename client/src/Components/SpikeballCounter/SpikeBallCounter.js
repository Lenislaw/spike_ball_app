import React, { useEffect } from "react";
import { connect } from "react-redux";
import Options from "./Options";
import GameBoard from "./GameBoard";

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
