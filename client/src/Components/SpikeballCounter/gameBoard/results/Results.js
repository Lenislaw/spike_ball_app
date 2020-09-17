import React from "react";
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
    <div className="spikeball-counter-results">
      <div className="results-game">
        <h3>Whole Game statistics!</h3>
        <div className="sets">
          <div className="sets-team red">
            <div className="team">
              {won.teamOne
                ? gameStats.set.teamOneSet + 1
                : gameStats.set.teamOneSet}
              <small className="team-small">Sets points</small>
            </div>
            <div className="player">
              {gameStats.teamOnePlayersPoints.playerOne}
              <small className="player-small">
                {gameStats.teamOne.playerOne.name}
              </small>
            </div>
            <div className="player">
              {gameStats.teamOnePlayersPoints.playerTwo}
              <small className="player-small">
                {gameStats.teamOne.playerTwo.name}
              </small>
            </div>
            <div className="afterMistake">
              {gameStats.teamOnePlayersPoints.afterEnemyTeamFaul}
              <small className="afterMistake-small">After hint</small>
            </div>
          </div>
          <div className="sets-team blue reverse">
            <div className="team">
              {won.teamTwo
                ? gameStats.set.teamTwoSet + 1
                : gameStats.set.teamTwoSet}
              <small className="team-small">Set points</small>
            </div>
            <div className="player">
              {gameStats.teamTwoPlayersPoints.playerOne}
              <small className="player-small">
                {gameStats.teamTwo.playerOne.name}
              </small>
            </div>
            <div className="player">
              {gameStats.teamTwoPlayersPoints.playerTwo}
              <small className="player-small">
                {gameStats.teamTwo.playerTwo.name}{" "}
              </small>
            </div>
            <div className="afterMistake">
              {gameStats.teamTwoPlayersPoints.afterEnemyTeamFaul}
              <small className="afterMistake-small">After hint</small>
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

      <div className="button new-game">
        <button
          className="button new-game-btn yellow-bg"
          onClick={startNewGame}
        >
          New Game
        </button>
      </div>
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
