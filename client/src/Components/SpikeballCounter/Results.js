import React, { Fragment } from "react";
import { connect } from "react-redux";
import Action from "./Action";
import SetPointsTotal from "./SetPointsTotal";
import { newGame } from "../../actions/gameSettings";

const Results = ({
  results,
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
  console.log("SET ONE RESULTS", setOne);
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
              {gameStats.teamTwoPlayersPointsPerSet.playerOne}
            </div>
            <div className="playerTwo">
              {" "}
              {gameStats.teamTwo.playerTwo.name} Points:{" "}
              {gameStats.teamTwoPlayersPointsPerSet.playerTwo}
            </div>
            <div className="afterMistake">
              Points after faul:{" "}
              {gameStats.teamTwoPlayersPoints.afterEnemyTeamFaul}
            </div>
          </div>
        </div>
      </div>
      {setOne && (
        <div className="set">
          <h3>Set One</h3>
          <div className="set-points">
            {setOne.map((action, index) => (
              <Action
                key={`${index}-setOne`}
                action={action}
                index={index}
                length={setOne.length}
              />
            ))}
            <SetPointsTotal set={setOne} />
          </div>
        </div>
      )}
      {setTwo && (
        <div className="set">
          <h3>Set Two</h3>
          <div className="set-points">
            {setTwo.map((action, index) => (
              <Action
                key={`${index}-setTwo`}
                action={action}
                index={index}
                length={setTwo.length}
              />
            ))}
            <SetPointsTotal set={setTwo} />
          </div>
        </div>
      )}
      {setThree && (
        <div className="set">
          <h3>Set Three</h3>
          <div className="set-points">
            {setThree.map((action, index) => (
              <Action
                key={`${index}-setThree`}
                action={action}
                index={index}
                length={setThree.length}
              />
            ))}
            <SetPointsTotal set={setThree} />
          </div>
        </div>
      )}
      {setFour && (
        <div className="set">
          <h3>Set Four</h3>
          <div className="set-points">
            <div className="set-points-total">
              <div className="teamOne">
                Team One Points:{" "}
                {setFour[setFour.length - 1].points.teamOnePoints}
              </div>
              <div className="teamTwo">
                Team Two Points:{" "}
                {setFour[setFour.length - 1].points.teamTwoPoints}
              </div>
            </div>
            {setFour.map((action, index) => (
              <Action
                key={`${index}-setFour`}
                action={action}
                index={index}
                length={setFour.length}
              />
            ))}
            <SetPointsTotal set={setFour} />
          </div>
        </div>
      )}
      {setFive && (
        <div className="set">
          <h3>Set Five</h3>
          <div className="set-points">
            <div className="set-points-total">
              <div className="teamOne">
                Team One Points:{" "}
                {setFive[setFive.length - 1].points.teamOnePoints}
              </div>
              <div className="teamTwo">
                Team Two Points:{" "}
                {setFive[setFive.length - 1].points.teamTwoPoints}
              </div>
            </div>
            {setFive.map((action, index) => (
              <Action
                key={`${index}-setFive`}
                action={action}
                index={index}
                length={setFive.length}
              />
            ))}
            <SetPointsTotal set={setFive} />
          </div>
        </div>
      )}
      {setSix && (
        <div className="set">
          <h3>Set Six</h3>
          <div className="set-points">
            <div className="set-points-total">
              <div className="teamOne">
                Team One Points:{" "}
                {setSix[setSix.length - 1].points.teamOnePoints}
              </div>
              <div className="teamTwo">
                Team Two Points:{" "}
                {setSix[setSix.length - 1].points.teamTwoPoints}
              </div>
            </div>
            {setSix.map((action, index) => (
              <Action
                key={`${index}-setSix`}
                action={action}
                index={index}
                length={setSix.length}
              />
            ))}
            <SetPointsTotal set={setSix} />
          </div>
        </div>
      )}
      {setSeven && (
        <div className="set">
          <h3>Set Seven</h3>
          <div className="set-points">
            <div className="set-points-total">
              <div className="teamOne">
                Team One Points:{" "}
                {setSeven[setSeven.length - 1].points.teamOnePoints}
              </div>
              <div className="teamTwo">
                Team Two Points:{" "}
                {setSeven[setSeven.length - 1].points.teamTwoPoints}
              </div>
            </div>
            {setSeven.map((action, index) => (
              <Action
                key={`${index}-setSeven`}
                action={action}
                index={index}
                length={setSeven.length}
              />
            ))}
            <SetPointsTotal set={setSeven} />
          </div>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  results: state.game.gameSaveSets,
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
