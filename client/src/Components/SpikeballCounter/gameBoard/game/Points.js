import React from "react";


const Points = ({ points, set}) => {
  return (
    <div className="points">
      <div className="points-teams">
        <div className="team">
          <div className="sets red">
            {set.teamOneSet}
            <small className="set">set points</small>
          </div>
          <div className="points">{points.teamOnePoints}</div>
        </div>
        <div className="dots">:</div>
        <div className="team reverse">
          <div className="sets blue">
            {set.teamTwoSet}
            <small className="set">set points</small>
          </div>
          <div className="points">{points.teamTwoPoints}</div>
        </div>
      </div>
      
    </div>
  );
};

export default Points;
