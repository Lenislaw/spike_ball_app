import React, { Fragment } from "react";
import { connect } from "react-redux";
import Action from "./Action";
import SetPointsTotal from "./SetPointsTotal";
import { newGame } from "../../actions/gameSettings";

const Results = ({ results, newGame }) => {
  const setOne = results[0];
  const setTwo = results[1];
  const setThree = results[2];
  const setFour = results[3];
  const setFive = results[4];
  const setSix = results[5];
  const setSeven = results[6];

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
          </div>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  results: state.game.gameSaveSets,
});

export default connect(mapStateToProps, { newGame })(Results);
