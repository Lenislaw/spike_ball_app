import React from "react";
import IconPoint from "./IconPoint";
import IconFail from "./IconFail";

const GetPoint = ({ round, index }) => {
  return round.getPoint.teamOne.point ? (
    <div className="point">
      <div className="action">{index}</div>
      <div className="point-get red yellow neon">
        <IconPoint key={`${index}-teamone-succes`} />
      </div>
      <div className="point-lose blue white">
        {round.getPoint.teamOne.afterMiss && (
          <IconFail key={`${index}-teamtwo-fail`} />
        )}
      </div>
    </div>
  ) : (
    <div className="point">
      <div className="action">{index}</div>
      <div className="point-lose red white">
        {round.getPoint.teamTwo.afterMiss && (
          <IconFail key={`${index}-teamone-fail`} />
        )}
      </div>
      <div className="point-get blue yellow neon">
        <IconPoint key={`${index}-teamtwo-succes`} />
      </div>
    </div>
  );
};

export default GetPoint;
