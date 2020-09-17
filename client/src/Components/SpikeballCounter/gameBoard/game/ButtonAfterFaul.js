import React, { Fragment } from "react";


const ButtonAfterFaul = ({ onClick, dataTeam }) => {
  return (
    <Fragment>
      <button
        className={`after-faul ${dataTeam}`}
        onClick={onClick}
        data-team={dataTeam}
      >
        After Faul
      </button>
    </Fragment>
  );
};

export default ButtonAfterFaul;
