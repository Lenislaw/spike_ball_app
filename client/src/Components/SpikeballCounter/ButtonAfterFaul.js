import React, { Fragment } from "react";

const ButtonAfterFaul = ({ onClick, dataTeam }) => {

  return (
    <Fragment>
      <button onClick={onClick} data-team={dataTeam}>
        After Faul
      </button>
    </Fragment>
  );
};

export default ButtonAfterFaul;
