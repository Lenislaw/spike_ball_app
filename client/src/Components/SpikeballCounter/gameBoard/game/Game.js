import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  setGameRounds,
  gameSetOver,
  gameOver,
  saveSet,
  ballPossessionUpdate,
} from "../../../../actions/game";
import Modal from "./Modal";
import ButtonPlayer from "./ButtonPlayer";
import ButtonAfterFaul from "./ButtonAfterFaul";
import PointsBoard from "./Points";
import ChangeServers from "./ChangeServers";
import Rounds from "./Rounds";
import NewGame from "../results/NewGame";

const Game = ({
  teamOne,
  teamTwo,
  maxPoints,
  bestOf,
  ballPossessionFlip,
  gameRounds,
  setNr,
  setGameRounds,
  gameSetOver,
  saveSet,
  gameOver,
  coinFliped,
}) => {
  // ballPossession state
  const [ballPossession, setBallPossession] = useState({
    teamOne: ballPossessionFlip.teamOne,
    teamTwo: ballPossessionFlip.teamTwo,
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
    teamOne: { point: false, enemyMiss: false },

    teamTwo: { point: false, enemyMiss: false },
  });
  //set points total state
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
  // each player points counter state
  const [teamOnePlayersPointsPerSet, setTeamOnePlayersPointsPerSet] = useState({
    playerOne: 0,
    playerTwo: 0,
    afterEnemyTeamFaul: 0,
  });
  const [teamTwoPlayersPoints, setTeamTwoPlayersPoints] = useState({
    playerOne: 0,
    playerTwo: 0,
    afterEnemyTeamFaul: 0,
  });
  const [teamTwoPlayersPointsPerSet, setTeamTwoPlayersPointsPerSet] = useState({
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

  // set Change servers state
  const [changeBox, setChangeBox] = useState(false);

  const onClick = (e) => {
    if (ballPossession.teamOne) {
      if (e.target.getAttribute("data-team") === "teamone") {
        const whoGetPointId = parseInt(
          e.target.getAttribute("data-player"),
          10
        );

        whoGetPointId === 1 || whoGetPointId === 2
          ? setGetPoint({
              teamOne: { point: true, afterMiss: false },
              teamTwo: { point: false, afterMiss: false },
            })
          : setGetPoint({
              teamOne: { point: true, afterMiss: true },
              teamTwo: { point: false, afterMiss: false },
            });

        whoGetPoint(whoGetPointId, "one");

        setPoints({ ...points, teamOnePoints: ++points.teamOnePoints });
      } else {
        setBallPossession({
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

        whoGetPointId === 3 || whoGetPointId === 4
          ? setGetPoint({
              teamOne: { point: false, afterMiss: false },
              teamTwo: { point: true, afterMiss: false },
            })
          : setGetPoint({
              teamOne: { point: false, afterMiss: false },
              teamTwo: { point: true, afterMiss: true },
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

        whoGetPointId === 3 || whoGetPointId === 4
          ? setGetPoint({
              teamOne: { point: false, afterMiss: false },
              teamTwo: { point: true, afterMiss: false },
            })
          : setGetPoint({
              teamOne: { point: false, afterMiss: false },
              teamTwo: { point: true, afterMiss: true },
            });
      } else {
        setBallPossession({
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

        whoGetPointId === 1 || whoGetPointId === 2
          ? setGetPoint({
              teamOne: { point: true, afterMiss: false },
              teamTwo: { point: false, afterMiss: false },
            })
          : setGetPoint({
              teamOne: { point: true, afterMiss: true },
              teamTwo: { point: false, afterMiss: false },
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
        setTeamOnePlayersPointsPerSet({
          ...teamOnePlayersPointsPerSet,
          playerOne: teamOnePlayersPointsPerSet.playerOne + 1,
        });
      }
      if (whoGetPoint === 2) {
        setTeamOnePlayersPoints({
          ...teamOnePlayersPoints,
          playerTwo: teamOnePlayersPoints.playerTwo + 1,
        });
        setTeamOnePlayersPointsPerSet({
          ...teamOnePlayersPointsPerSet,
          playerTwo: teamOnePlayersPointsPerSet.playerTwo + 1,
        });
      }
      if (!whoGetPoint) {
        setTeamOnePlayersPoints({
          ...teamOnePlayersPoints,
          afterEnemyTeamFaul: teamOnePlayersPoints.afterEnemyTeamFaul + 1,
        });
        setTeamOnePlayersPointsPerSet({
          ...teamOnePlayersPointsPerSet,
          afterEnemyTeamFaul: teamOnePlayersPointsPerSet.afterEnemyTeamFaul + 1,
        });
      }
    } else {
      if (whoGetPoint === 3) {
        setTeamTwoPlayersPoints({
          ...teamTwoPlayersPoints,
          playerOne: teamTwoPlayersPoints.playerOne + 1,
        });
        setTeamTwoPlayersPointsPerSet({
          ...teamTwoPlayersPoints,
          playerOne: teamTwoPlayersPoints.playerOne + 1,
        });
      }
      if (whoGetPoint === 4) {
        setTeamTwoPlayersPoints({
          ...teamTwoPlayersPoints,
          playerTwo: teamTwoPlayersPoints.playerTwo + 1,
        });
        setTeamTwoPlayersPointsPerSet({
          ...teamTwoPlayersPoints,
          playerTwo: teamTwoPlayersPoints.playerTwo + 1,
        });
      }
      if (!whoGetPoint) {
        setTeamTwoPlayersPoints({
          ...teamTwoPlayersPoints,
          afterEnemyTeamFaul: teamTwoPlayersPoints.afterEnemyTeamFaul + 1,
        });
        setTeamTwoPlayersPointsPerSet({
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
      setTeamOnePlayersPointsPerSet({
        playerOne: 0,
        playerTwo: 0,
        afterEnemyTeamFaul: 0,
      });
      setTeamTwoPlayersPointsPerSet({
        playerOne: 0,
        playerTwo: 0,
        afterEnemyTeamFaul: 0,
      });
    }
    if (team === "two") {
      setSet({ ...set, teamTwoSet: set.teamTwoSet + 1 });
      setPoints({ teamOnePoints: 0, teamTwoPoints: 0 });
      setTeamOnePlayersPointsPerSet({
        playerOne: 0,
        playerTwo: 0,
        afterEnemyTeamFaul: 0,
      });
      setTeamTwoPlayersPointsPerSet({
        playerOne: 0,
        playerTwo: 0,
        afterEnemyTeamFaul: 0,
      });
    }

    saveSet(setNr);
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
      teamOnePlayersPointsPerSet,
      teamTwoPlayersPointsPerSet,
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
    parseInt(bestOf, 10) === set.teamOneSet && gameOver("one", set);
    parseInt(bestOf, 10) === set.teamTwoSet && gameOver("two", set);
    if (setNr > 1) {
      setSetCounter(++setCount);

      if (setNr % 2 === 0) {
        setBallPossession({
          teamOne: !ballPossessionFlip.teamOne,
          teamTwo: !ballPossessionFlip.teamTwo,
        });
      } else {
        setBallPossession({
          teamOne: ballPossessionFlip.teamOne,
          teamTwo: ballPossessionFlip.teamTwo,
        });
      }

      setChangeBox(true);
    }
  }, [set]);
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
    setNr > 1 && setGameRounds(round, true);
  }, [setNr]);

  // Change Server Box
  useEffect(() => {
    changeBox &&
      setServerTeamOne({
        playerOne: ballPossession.teamOne
          ? teamOne.playerOne.server
          : !teamOne.playerOne.server,
        playerTwo: ballPossession.teamOne
          ? teamOne.playerTwo.server
          : !teamOne.playerTwo.server,
      });
    changeBox &&
      setServerTeamTwo({
        playerOne: ballPossession.teamTwo
          ? teamTwo.playerOne.server
          : !teamTwo.playerOne.server,
        playerTwo: ballPossession.teamTwo
          ? teamTwo.playerTwo.server
          : !teamTwo.playerTwo.server,
      });
  }, [changeBox]);

  const teamOneServer = (e) => {
    const teamOnePlayerOneServ = document.getElementById(
      "server-teamOne-playerOne"
    ).selected;
    const teamOnePlayerTwoServ = document.getElementById(
      "server-teamOne-playerTwo"
    ).selected;
    setServerTeamOne({
      playerOne: ballPossession.teamOne
        ? teamOnePlayerOneServ
          ? true
          : false
        : !teamOnePlayerOneServ
        ? true
        : false,
      playerTwo: ballPossession.teamOne
        ? teamOnePlayerTwoServ
          ? true
          : false
        : !teamOnePlayerTwoServ
        ? true
        : false,
    });
  };

  const teamTwoServer = (e) => {
    const teamTwoPlayerOneServ = document.getElementById(
      "server-teamTwo-playerOne"
    ).selected;
    const teamTwoPlayerTwoServ = document.getElementById(
      "server-teamTwo-playerTwo"
    ).selected;
    setServerTeamTwo({
      playerOne: ballPossession.teamTwo
        ? teamTwoPlayerOneServ
          ? true
          : false
        : !teamTwoPlayerOneServ
        ? true
        : false,
      playerTwo: ballPossession.teamTwo
        ? teamTwoPlayerTwoServ
          ? true
          : false
        : !teamTwoPlayerTwoServ
        ? true
        : false,
    });
  };

  const [serverTeamOneCheckbox, setServerTeamOneCheckbox] = useState(true);
  const [serverTeamTwoCheckbox, setServerTeamTwoCheckbox] = useState(true);

  const onChangeTeamOne = (e) => {
    setServerTeamOneCheckbox(!serverTeamOneCheckbox);
    teamOneServer();
  };

  const onChangeTeamTwo = () => {
    setServerTeamTwoCheckbox(!serverTeamTwoCheckbox);
    teamTwoServer();
  };
  const closeBox = () => {
    setChangeBox(false);
  };

  return changeBox ? (
    <ChangeServers
      onChangeTeamOne={onChangeTeamOne}
      TeamOnePlayerOne={teamOne.playerOne.name}
      TeamOnePlayerTwo={teamOne.playerTwo.name}
      onChangeTeamTwo={onChangeTeamTwo}
      TeamTwoPlayerOne={teamTwo.playerOne.name}
      TeamTwoPlayerTwo={teamTwo.playerTwo.name}
      closeBox={closeBox}
    />
  ) : (
    <div className="spikeball-counter-game">
      {!coinFliped && <Modal />}
      <PointsBoard points={points} set={set} />
      <div className="controllers">
        <div className="controllers-team-one">
          <ButtonPlayer
            onClick={onClick}
            dataPlayer={teamOne.playerOne.id}
            dataTeam={"teamone"}
            playerName={teamOne.playerOne.name}
            server={serverTeamOne.playerOne}
            ballPossesion={ballPossession.teamOne}
          />
          <ButtonPlayer
            onClick={onClick}
            dataPlayer={teamOne.playerTwo.id}
            dataTeam={"teamone"}
            playerName={teamOne.playerTwo.name}
            server={serverTeamOne.playerTwo}
            ballPossesion={ballPossession.teamOne}
          />

          <ButtonAfterFaul onClick={onClick} dataTeam={"teamone"} />
        </div>

        <div className="controllers-team-two">
          <ButtonPlayer
            onClick={onClick}
            dataPlayer={teamTwo.playerOne.id}
            dataTeam={"teamtwo"}
            playerName={teamTwo.playerOne.name}
            server={serverTeamTwo.playerOne}
            ballPossesion={ballPossession.teamTwo}
          />
          <ButtonPlayer
            onClick={onClick}
            dataPlayer={teamTwo.playerTwo.id}
            dataTeam={"teamtwo"}
            playerName={teamTwo.playerTwo.name}
            server={serverTeamTwo.playerTwo}
            ballPossesion={ballPossession.teamTwo}
          />

          <ButtonAfterFaul onClick={onClick} dataTeam={"teamtwo"} />
        </div>
      </div>
      <div className="rounds">
        <Rounds gameRounds={gameRounds} />
      </div>
      <NewGame />
    </div>
  );
};
const mapStateToProps = (state) => ({
  teamOne: state.gameSettings.teamOne,
  teamTwo: state.gameSettings.teamTwo,
  maxPoints: state.gameSettings.maxPoints,
  bestOf: state.gameSettings.bestOf,
  ballPossessionFlip: state.gameSettings.ballPossessionFlip,
  ballPossessionNew: state.game.ballPossession,
  gameRounds: state.game.gameRounds,
  gameSetOver: state.game.gameSetOver,
  setNr: state.game.setNr,
  coinFliped: state.game.coinFliped,
});
export default connect(mapStateToProps, {
  setGameRounds,
  gameSetOver,
  saveSet,
  gameOver,
  ballPossessionUpdate,
})(Game);
