import React, { useEffect } from "react";
import { connect } from "react-redux";
import Game from "./Game";
import Results from "./Results";

const GameBoard = ({ matchOver }) => {
  useEffect(() => {}, [matchOver]);
  return <div className="gameboard">{!matchOver ? <Game /> : <Results />}</div>;
};
const mapStateToProps = (state) => ({
  matchOver: state.game.matchOver,
});

export default connect(mapStateToProps, {})(GameBoard);
