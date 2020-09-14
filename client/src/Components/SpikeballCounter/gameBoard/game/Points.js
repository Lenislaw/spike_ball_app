import React from "react";
import Rounds from "./Rounds";

const Points = ({ points, set, gameRounds }) => {
  return (
    <div className="points">
      <div className="teamOne">
        TeamOne Points:{points.teamOnePoints} Sets:{set.teamOneSet}
      </div>
      <div className="teamTwo">
        TeamTwo Points:{points.teamTwoPoints} Sets:{set.teamTwoSet}
      </div>
      <div className="rounds">
        <Rounds gameRounds={gameRounds} team={"red"} />
        <Rounds gameRounds={gameRounds} team={"blue"} />
      </div>
    </div>
  );
};

export default Points;
