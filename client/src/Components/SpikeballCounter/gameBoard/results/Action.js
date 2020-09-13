import React, { Fragment } from "react";

const Action = ({ action, index, length }) => {
  const lastAction = length - 1;
  return (
    <div className="point">
      {index === 0 && action.setCount === 1 ? (
        action.points.teamOnePoints === 1 ? (
          <Fragment>
            <div className="point-team-one">
              <i className="fas fa-volleyball-ball success-score"></i>
            </div>
            <div className="point-team-two">
              <i className="fas fa-times fa-1x fail-score"></i>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="point-team-one">
              <i className="fas fa-times fa-1x fail-score"></i>
            </div>
            <div className="point-team-two">
              <i className="fas fa-volleyball-ball success-score"></i>
            </div>
          </Fragment>
        )
      ) : index === lastAction ? (
        <div></div>
      ) : action.getPoint.teamOne === true ? (
        <Fragment>
          <div className="point-team-one">
            <i className="fas fa-volleyball-ball success-score"></i>
          </div>
          <div className="point-team-two">
            <i className="fas fa-times fa-1x fail-score"></i>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className="point-team-one">
            <i className="fas fa-times fa-1x fail-score"></i>
          </div>
          <div className="point-team-two">
            <i className="fas fa-volleyball-ball success-score"></i>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Action;
