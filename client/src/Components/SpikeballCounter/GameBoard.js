import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import { setGameRounds, gameSetOver } from "../../actions/game";

const GameBoard = ({
  teamOne,
  teamTwo,
  maxPoints,
  bestOf,
  gameRounds,
  setGameRounds,
  gameSetOver,
}) => {
  // ballPossession state
  const [ballPossession, setBallPossesion] = useState({
    teamOne: true,
    teamTwo: false,
  });
  // who serv in team one state
  const [serverTeamOne, setServerTeamOne] = useState({
    playerOne: true,
    playerTwo: false,
  });
  // who serv in team two state
  const [serverTeamTwo, setServerTeamTwo] = useState({
    playerOne: false,
    playerTwo: true,
  });
  // who get point
  const [getPoint, setGetPoint] = useState({
    teamOne: false,
    teamTwo: false,
  });
  //set points state
  const [points, setPoints] = useState({
    teamOnePoints: 0,
    teamTwoPoints: 0,
  });
  // set counter state
  const [setCount, setSetCounter] = useState(0);

  // set state
  const [set, setSet] = useState({
    teamOneSet: 0,
    teamTwoSet: 0,
  });

  const onClick = (e) => {
    setGetPoint({
      teamOne: false,
      teamTwo: false,
    });
    if (ballPossession.teamOne) {
      if (
        e.target.value === teamOne.playerOne.name ||
        e.target.value === teamOne.playerTwo.name
      ) {
        setPoints({ ...points, teamOnePoints: points.teamOnePoints + 1 });
        setGetPoint({
          teamOne: true,
          teamTwo: false,
        });
        if (
          points.teamOnePoints >= maxPoints - 1 &&
          points.teamOnePoints - 1 >= points.teamTwoPoints
        ) {
          setSet({ ...set, teamOneSet: set.teamOneSet + 1 });
          setPoints({ teamOnePoints: 0, teamTwoPoints: 0 });
          gameSetOver();
          if (set.teamOneSet === bestOf) {
            console.log("WINNER IS TEAM ONE");
          }
        }
      } else {
        setBallPossesion({
          teamOne: false,
          teamTwo: true,
        });
        setServerTeamTwo({
          playerOne: !serverTeamTwo.playerOne,
          playerTwo: !serverTeamTwo.playerTwo,
        });

        setPoints({ ...points, teamTwoPoints: points.teamTwoPoints + 1 });
        setGetPoint({
          teamOne: false,
          teamTwo: true,
        });
        if (
          points.teamTwoPoints >= maxPoints &&
          points.teamTwoPoints - 1 >= points.teamOnePoints
        ) {
          setSet({ ...set, teamTwoSet: set.teamTwoSet + 1 });
          setPoints({ teamOnePoints: 0, teamTwoPoints: 0 });
        }
      }
    } else if (ballPossession.teamTwo) {
      if (
        e.target.value === teamTwo.playerOne.name ||
        e.target.value === teamTwo.playerTwo.name
      ) {
        setPoints({ ...points, teamTwoPoints: points.teamTwoPoints + 1 });
        setGetPoint({
          teamOne: false,
          teamTwo: true,
        });
        if (
          points.teamTwoPoints >= maxPoints &&
          points.teamTwoPoints - 1 >= points.teamOnePoints
        ) {
          setSet({ ...set, teamTwoSet: set.teamTwoSet + 1 });
          setPoints({ teamOnePoints: 0, teamTwoPoints: 0 });
        }
      } else {
        setBallPossesion({
          teamOne: true,
          teamTwo: false,
        });
        setServerTeamOne({
          playerOne: !serverTeamOne.playerOne,
          playerTwo: !serverTeamOne.playerTwo,
        });

        setPoints({ ...points, teamOnePoints: points.teamOnePoints + 1 });
        setGetPoint({
          teamOne: true,
          teamTwo: false,
        });
        if (
          points.teamOnePoints >= maxPoints &&
          points.teamOnePoints - 1 >= points.teamTwoPoints
        ) {
          setSet({ ...set, teamOneSet: set.teamOneSet + 1 });
          setPoints({ teamOnePoints: 0, teamTwoPoints: 0 });
        }
      }
    }
  };

  useEffect(() => {
    const round = {
      ballPossession,
      serverTeamOne,
      serverTeamTwo,
      points,
      set,
      getPoint,
    };
    setGameRounds(round);
    // serverTeamOne.playerOne &&
    //   ballPossession.teamOne &&
    //   console.log("SERWUJE", teamOne.playerOne);
    // serverTeamOne.playerTwo &&
    //   ballPossession.teamOne &&
    //   console.log("SERWUJE", teamOne.playerTwo);
    // serverTeamTwo.playerOne &&
    //   ballPossession.teamTwo &&
    //   console.log("SERWUJE", teamTwo.playerOne);
    // serverTeamTwo.playerTwo &&
    //   ballPossession.teamTwo &&
    //   console.log("SERWUJE", teamTwo.playerTwo);
    // console.log(points);
  }, [points]);

  return (
    <div className="gameboard">
      <div className="points">
        <div className="teamOne">
          TeamOne Points:{points.teamOnePoints} Sets:{set.teamOneSet}
        </div>
        <div className="teamTwo">
          TeamTwo Points:{points.teamTwoPoints} Sets:{set.teamTwoSet}
        </div>
        <div className="rounds">
          <div className="rounds-teamone">
            {gameRounds.map((round, index) =>
              index === 0 ? (
                <Fragment key={`fragment-${index}`}></Fragment>
              ) : round.getPoint.teamOne ? (
                <i
                  className="fas fa-volleyball-ball success-score"
                  key={`${index}-teamone-succes`}
                ></i>
              ) : (
                <i
                  className="fas fa-times fail-score"
                  key={`${index}-teamone-fail`}
                ></i>
              )
            )}
          </div>
          <div className="rounds-teamtwo">
            {gameRounds.map((round, index) =>
              index === 0 ? (
                <Fragment key={`fragment-${index}`}></Fragment>
              ) : round.getPoint.teamTwo ? (
                <i
                  className="fas fa-volleyball-ball success-score"
                  key={`${index}-teamtwo-succes`}
                ></i>
              ) : (
                <i
                  className="fas fa-times fa-1x fail-score"
                  key={`${index}-teamtwo-fail`}
                ></i>
              )
            )}
          </div>
        </div>
      </div>
      <button onClick={onClick} value={teamOne.playerOne.name}>
        {teamOne.playerOne.name}
      </button>
      <button onClick={onClick} value={teamOne.playerTwo.name}>
        {teamOne.playerTwo.name}
      </button>
      <button onClick={onClick} value={teamTwo.playerOne.name}>
        {teamTwo.playerOne.name}
      </button>
      <button onClick={onClick} value={teamTwo.playerTwo.name}>
        {teamTwo.playerTwo.name}
      </button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  teamOne: state.gameSettings.teamOne,
  teamTwo: state.gameSettings.teamTwo,
  maxPoints: state.gameSettings.maxPoints,
  bestOf: state.gameSettings.bestOf,
  gameRounds: state.game.gameRounds,
  gameSetOver: state.game.gameSetOver,
});
export default connect(mapStateToProps, { setGameRounds, gameSetOver })(
  GameBoard
);
