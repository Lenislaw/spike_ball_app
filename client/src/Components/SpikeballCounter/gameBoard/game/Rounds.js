import React, { Fragment } from "react";
import GetPoint from "./GetPoint";

const Rounds = ({ gameRounds }) => {
  return (
    <div className="round">
      {gameRounds.map((round, index) =>
        index === 0 ? (
          <Fragment key={`fragment-${index}`}></Fragment>
        ) : (
          <GetPoint round={round} index={index} key={`point-${index}`} />
        )
      )}
    </div>
  );
};

export default Rounds;
