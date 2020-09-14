import React, { Fragment } from "react";
import IconPoint from "./IconPoint";
import IconFail from "./IconFail";

const Rounds = ({ gameRounds, team }) => {
  return team === "red" ? (
    <div className="rounds-team">
      {gameRounds.map((round, index) =>
        index === 0 ? (
          <Fragment key={`fragment-${index}`}></Fragment>
        ) : round.getPoint.teamOne ? (
          <IconPoint key={`${index}-teamone-succes`} />
        ) : (
          <IconFail key={`${index}-teamone-fail`} />
        )
      )}
    </div>
  ) : (
    <div className="rounds-team">
      {gameRounds.map((round, index) =>
        index === 0 ? (
          <Fragment key={`fragment-${index}`}></Fragment>
        ) : round.getPoint.teamTwo ? (
          <IconPoint key={`${index}-teamtwo-succes`} />
        ) : (
          <IconFail key={`${index}-teamtwo-fail`} />
        )
      )}
    </div>
  );
};

export default Rounds;
