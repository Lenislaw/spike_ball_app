import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import { setGameRounds, gameSetOver, gameOver } from "../../actions/game";

const Game = ({
  teamOne,
  teamTwo,
  maxPoints,
  bestOf,
  gameRounds,
  setGameRounds,
  gameSetOver,
  gameOver,
}) => {
  // ballPossession state
  const [ballPossession, setBallPossesion] = useState({
    teamOne: true,
    teamTwo: false,
  });

  // who serv in team one state
  const [serverTeamOne, setServerTeamOne] = useState({
    playerOne: ballPossession.teamOne
      ? teamOne.playerOne.server
      : !teamOne.playerOne.server,
    playerTwo: ballPossession.teamOne
      ? teamOne.playerTwo.server
      : !teamOne.playerTwo.server,
  });
  // who serv in team two state
  const [serverTeamTwo, setServerTeamTwo] = useState({
    playerOne: ballPossession.teamTwo
      ? teamTwo.playerOne.server
      : !teamTwo.playerOne.server,
    playerTwo: ballPossession.teamTwo
      ? teamTwo.playerTwo.server
      : !teamTwo.playerTwo.server,
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
  // each player points counter state
  const [teamOnePlayersPoints, setTeamOnePlayersPoints] = useState({
    playerOne: 0,
    playerTwo: 0,
    afterEnemyTeamFaul: 0,
  });
  const [teamTwoPlayersPoints, setTeamTwoPlayersPoints] = useState({
    playerOne: 0,
    playerTwo: 0,
    afterEnemyTeamFaul: 0,
  });

  // set counter state
  let [setCount, setSetCounter] = useState(1);

  // set state
  const [set, setSet] = useState({
    teamOneSet: 0,
    teamTwoSet: 0,
  });

  const onClick = (e) => {
    if (ballPossession.teamOne) {
      if (e.target.getAttribute("data-team") === "teamone") {
        const whoGetPointId = parseInt(
          e.target.getAttribute("data-player"),
          10
        );
        setGetPoint({
          teamOne: true,
          teamTwo: false,
        });

        whoGetPoint(whoGetPointId, "one");

        setPoints({ ...points, teamOnePoints: ++points.teamOnePoints });
      } else {
        setBallPossesion({
          teamOne: false,
          teamTwo: true,
        });
        setServerTeamTwo({
          playerOne: !serverTeamTwo.playerOne,
          playerTwo: !serverTeamTwo.playerTwo,
        });
        const whoGetPointId = parseInt(
          e.target.getAttribute("data-player"),
          10
        );

        whoGetPoint(whoGetPointId, "two");
        setPoints({ ...points, teamTwoPoints: ++points.teamTwoPoints });
        setGetPoint({
          teamOne: false,
          teamTwo: true,
        });
      }
    } else if (ballPossession.teamTwo) {
      if (e.target.getAttribute("data-team") === "teamtwo") {
        const whoGetPointId = parseInt(
          e.target.getAttribute("data-player"),
          10
        );

        whoGetPoint(whoGetPointId, "two");
        setPoints({ ...points, teamTwoPoints: ++points.teamTwoPoints });
        setGetPoint({
          teamOne: false,
          teamTwo: true,
        });
      } else {
        setBallPossesion({
          teamOne: true,
          teamTwo: false,
        });
        setServerTeamOne({
          playerOne: !serverTeamOne.playerOne,
          playerTwo: !serverTeamOne.playerTwo,
        });
        const whoGetPointId = parseInt(
          e.target.getAttribute("data-player"),
          10
        );

        whoGetPoint(whoGetPointId, "one");
        setPoints({ ...points, teamOnePoints: ++points.teamOnePoints });
        setGetPoint({
          teamOne: true,
          teamTwo: false,
        });
      }
    }
  };
  const whoGetPoint = (whoGetPoint, team) => {
    if (team === "one") {
      if (whoGetPoint === 1) {
        setTeamOnePlayersPoints({
          ...teamOnePlayersPoints,
          playerOne: teamOnePlayersPoints.playerOne + 1,
        });
      }
      if (whoGetPoint === 2) {
        setTeamOnePlayersPoints({
          ...teamOnePlayersPoints,
          playerTwo: teamOnePlayersPoints.playerTwo + 1,
        });
      }
      if (!whoGetPoint) {
        setTeamOnePlayersPoints({
          ...teamOnePlayersPoints,
          afterEnemyTeamFaul: teamOnePlayersPoints.afterEnemyTeamFaul + 1,
        });
      }
    } else {
      if (whoGetPoint === 3) {
        setTeamTwoPlayersPoints({
          ...teamTwoPlayersPoints,
          playerOne: teamTwoPlayersPoints.playerOne + 1,
        });
      }
      if (whoGetPoint === 4) {
        setTeamTwoPlayersPoints({
          ...teamTwoPlayersPoints,
          playerTwo: teamTwoPlayersPoints.playerTwo + 1,
        });
      }
      if (!whoGetPoint) {
        setTeamTwoPlayersPoints({
          ...teamTwoPlayersPoints,
          afterEnemyTeamFaul: teamTwoPlayersPoints.afterEnemyTeamFaul + 1,
        });
      }
    }
  };

  const setOver = (team) => {
    if (team === "one") {
      setSet({ ...set, teamOneSet: set.teamOneSet + 1 });
      setPoints({ teamOnePoints: 0, teamTwoPoints: 0 });
    }
    if (team === "two") {
      setSet({ ...set, teamTwoSet: set.teamTwoSet + 1 });
      setPoints({ teamOnePoints: 0, teamTwoPoints: 0 });
    }
    setSetCounter(++setCount);

    gameSetOver();
  };

  useEffect(() => {
    const round = {
      teamOne,
      teamTwo,
      ballPossession,
      serverTeamOne,
      serverTeamTwo,
      points,
      set,
      getPoint,
      teamOnePlayersPoints,
      teamTwoPlayersPoints,
      setCount,
    };
    setGameRounds(round);

    points.teamOnePoints >= maxPoints &&
      points.teamOnePoints - 2 >= points.teamTwoPoints &&
      setOver("one");

    points.teamTwoPoints >= maxPoints &&
      points.teamTwoPoints - 2 >= points.teamOnePoints &&
      setOver("two");
  }, [points]);

  useEffect(() => {
    console.log("SET", typeof set.teamOneSet);
    console.log(typeof bestOf);
    parseInt(bestOf, 10) === set.teamOneSet && gameOver("one", set);
    parseInt(bestOf, 10) === set.teamTwoSet && gameOver("two", set);
  }, [set]);

  return (
    <div className="game">
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
      <div className="controllers">
        <button
          onClick={onClick}
          data-player={teamOne.playerOne.id}
          data-team="teamone"
        >
          {teamOne.playerOne.name}
          {serverTeamOne.playerOne && ballPossession.teamOne && (
            <i data-team="teamone" className="fas fa-volleyball-ball"></i>
          )}
        </button>
        <button
          onClick={onClick}
          data-player={teamOne.playerTwo.id}
          data-team="teamone"
        >
          {teamOne.playerTwo.name}{" "}
          {serverTeamOne.playerTwo && ballPossession.teamOne && (
            <i data-team="teamone" className="fas fa-volleyball-ball"></i>
          )}
        </button>
        <button onClick={onClick} data-team="teamone">
          After Faul
        </button>
        <button
          onClick={onClick}
          data-player={teamTwo.playerOne.id}
          data-team="teamtwo"
        >
          {teamTwo.playerOne.name}{" "}
          {serverTeamTwo.playerOne && ballPossession.teamTwo && (
            <i data-team="teamtwo" className="fas fa-volleyball-ball"></i>
          )}
        </button>
        <button
          onClick={onClick}
          data-player={teamTwo.playerTwo.id}
          data-team="teamtwo"
        >
          {teamTwo.playerTwo.name}{" "}
          {serverTeamTwo.playerTwo && ballPossession.teamTwo && (
            <i data-team="teamtwo" className="fas fa-volleyball-ball"></i>
          )}
        </button>
        <button onClick={onClick} data-team="teamtwo">
          After Faul
        </button>
      </div>
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
export default connect(mapStateToProps, {
  setGameRounds,
  gameSetOver,

  gameOver,
})(Game);
