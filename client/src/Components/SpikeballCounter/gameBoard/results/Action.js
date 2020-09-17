import React, { Fragment } from "react";
import IconFail from "../../../SpikeballCounter/gameBoard/game/IconFail";
import IconPoint from "../../../SpikeballCounter/gameBoard/game/IconPoint";

const Action = ({ action, index, length }) => {
  return index === 0 ? (
    <Fragment></Fragment>
  ) : action.getPoint.teamOne.point ? (
    <div className="point">
      <div className="action">{index}</div>
      <div className="point-get red yellow neon">
        <IconPoint key={`${index}-teamone-succes`} />
      </div>
      <div className="point-lose blue white">
        {action.getPoint.teamOne.afterMiss && (
          <IconFail key={`${index}-teamtwo-fail`} />
        )}
      </div>
    </div>
  ) : (
    <div className="point">
      <div className="action">{index}</div>
      <div className="point-lose red white">
        {action.getPoint.teamTwo.afterMiss && (
          <IconFail key={`${index}-teamone-fail`} />
        )}
      </div>
      <div className="point-get blue yellow neon">
        <IconPoint key={`${index}-teamtwo-succes`} />
      </div>
    </div>
  );
};

export default Action;
