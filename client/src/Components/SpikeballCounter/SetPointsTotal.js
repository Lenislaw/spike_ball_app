import React from "react";

const SetPointsTotal = ({ set }) => {
  return (
    <div className="set-points-total">
      <div className="teamOne">
        <div className="total">
          Team One Points: {set[set.length - 1].points.teamOnePoints}(
          {set[set.length - 1].teamOnePlayersPoints.afterEnemyTeamFaul})
        </div>
        <div className="playerOne">
          {set[set.length - 1].teamOne.playerOne.name} Points:{" "}
          {set[set.length - 1].teamOnePlayersPoints.playerOne}
        </div>
        <div className="playerTwo">
          {" "}
          {set[set.length - 1].teamOne.playerTwo.name} Points:{" "}
          {set[set.length - 1].teamOnePlayersPoints.playerTwo}
        </div>
      </div>
      <div className="teamTwo">
        <div className="total">
          Team Two Points: {set[set.length - 1].points.teamTwoPoints}(
          {set[set.length - 1].teamTwoPlayersPoints.afterEnemyTeamFaul})
        </div>
        <div className="playerOne">
          {set[set.length - 1].teamTwo.playerOne.name} Points:{" "}
          {set[set.length - 1].teamTwoPlayersPoints.playerOne}
        </div>
        <div className="playerTwo">
          {" "}
          {set[set.length - 1].teamTwo.playerTwo.name} Points:{" "}
          {set[set.length - 1].teamTwoPlayersPoints.playerTwo}
        </div>
      </div>
      <div className="game-duration">
        Duration of the set: {set.length - 1} actions!
      </div>
    </div>
  );
};

export default SetPointsTotal;
