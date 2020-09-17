import React from "react";

const SetPointsTotal = ({ set }) => {
  return (
    <div className="set-points-total">
      <div className="total">
        <div className="team red">
          <div className="team-total">
            {set[set.length - 1].points.teamOnePoints}(
            {set[set.length - 1].teamOnePlayersPointsPerSet.afterEnemyTeamFaul})
            <small className="team-total-small">Points</small>
          </div>
          <div className="player">
            {set[set.length - 1].teamOnePlayersPointsPerSet.playerOne}
            <small className="player-small">
              {set[set.length - 1].teamOne.playerOne.name}
            </small>
          </div>
          <div className="player">
            {set[set.length - 1].teamOnePlayersPointsPerSet.playerTwo}
            <small className="player-small">
              {set[set.length - 1].teamOne.playerTwo.name}
            </small>
          </div>
          <div className="afterMistake">
            {set[set.length - 1].teamOnePlayersPointsPerSet.afterEnemyTeamFaul}
            <small className="afterMistake-small">After hint</small>
          </div>
        </div>
        <div className="team blue">
          <div className="team-total">
            {set[set.length - 1].points.teamTwoPoints}(
            {set[set.length - 1].teamTwoPlayersPointsPerSet.afterEnemyTeamFaul})
            <small className="team-small">Points</small>
          </div>
          <div className="player">
            {set[set.length - 1].teamTwoPlayersPointsPerSet.playerOne}
            <small className="player-small">
              {set[set.length - 1].teamTwo.playerOne.name}
            </small>
          </div>
          <div className="player">
            {set[set.length - 1].teamTwoPlayersPointsPerSet.playerTwo}
            <small className="player-small">
              {set[set.length - 1].teamTwo.playerTwo.name}
            </small>
          </div>
          <div className="afterMistake">
            {set[set.length - 1].teamTwoPlayersPointsPerSet.afterEnemyTeamFaul}
            <small className="afterMistake-small">After hint</small>
          </div>
        </div>
      </div>
      <div className="game-duration">
        Duration of the set: {set.length - 1} actions!
      </div>
    </div>
  );
};

export default SetPointsTotal;
