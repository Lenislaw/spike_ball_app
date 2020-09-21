import React from "react";
import { connect } from "react-redux";
import { newGame } from "../../../../actions/gameSettings";

const NewGame = ({ newGame }) => {
  const startNewGame = () => {
    newGame();
  };
  return (
    <div className="button new-game">
      <button className="button new-game-btn yellow-bg" onClick={startNewGame}>
        New Game
      </button>
    </div>
  );
};

export default connect(null, { newGame })(NewGame);
