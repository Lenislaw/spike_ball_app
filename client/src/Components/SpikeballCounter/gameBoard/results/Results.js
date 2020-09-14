import React, { Fragment } from "react";
import { connect } from "react-redux";
import { newGame } from "../../../../actions/gameSettings";
import ResultSet from "./ResultSet";

const Results = ({
  newGame,
  setOne,
  setTwo,
  setThree,
  setFour,
  setFive,
  setSix,
  setSeven,
  gameStats,
  won,
}) => {
  const startNewGame = () => {
    newGame();
  };

  return (
    <div>
      <div className="button new-game">
        <button className="button new-game-btn" onClick={startNewGame}>
          New Game
        </button>
      </div>
      <div className="results-game">
        <div className="sets">
          <div className="sets-team-one">
            <div className="team">
              TeamOne:
              {won.teamOne
                ? gameStats.set.teamOneSet + 1
                : gameStats.set.teamOneSet}
            </div>
            <div className="playerOne">
              {gameStats.teamOne.playerOne.name} Points:{" "}
              {gameStats.teamOnePlayersPoints.playerOne}
            </div>
            <div className="playerTwo">
              {" "}
              {gameStats.teamOne.playerTwo.name} Points:{" "}
              {gameStats.teamOnePlayersPoints.playerTwo}
            </div>
            <div className="afterMistake">
              Points after faul:{" "}
              {gameStats.teamOnePlayersPoints.afterEnemyTeamFaul}
            </div>
          </div>
          <div className="sets-team-one">
            <div className="team">
              TeamTwo:
              {won.teamTwo
                ? gameStats.set.teamTwoSet + 1
                : gameStats.set.teamTwoSet}
            </div>
            <div className="playerOne">
              {gameStats.teamTwo.playerOne.name} Points:{" "}
              {gameStats.teamTwoPlayersPoints.playerOne}
            </div>
            <div className="playerTwo">
              {" "}
              {gameStats.teamTwo.playerTwo.name} Points:{" "}
              {gameStats.teamTwoPlayersPoints.playerTwo}
            </div>
            <div className="afterMistake">
              Points after faul:{" "}
              {gameStats.teamTwoPlayersPoints.afterEnemyTeamFaul}
            </div>
          </div>
        </div>
      </div>

      {setOne && <ResultSet name={"Set One"} set={setOne} />}
      {setTwo && <ResultSet name={"Set Two"} set={setTwo} />}
      {setThree && <ResultSet name={"Set Three"} set={setThree} />}
      {setFour && <ResultSet name={"Set Four"} set={setFour} />}
      {setFive && <ResultSet name={"Set Five"} set={setFive} />}
      {setSix && <ResultSet name={"Set Six"} set={setSix} />}
      {setSeven && <ResultSet name={"Set Seven"} set={setSeven} />}
    </div>
  );
};
const mapStateToProps = (state) => ({
  setOne: state.game.setOne,
  setTwo: state.game.setTwo,
  setThree: state.game.setThree,
  setFour: state.game.setFour,
  setFive: state.game.setFive,
  setSix: state.game.setSix,
  setSeven: state.game.setSeven,
  gameStats: state.game.gameStats,
  won: state.game.won,
});

export default connect(mapStateToProps, { newGame })(Results);
