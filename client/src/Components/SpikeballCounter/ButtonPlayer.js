import React, { Fragment } from "react";

const ButtonPlayer = ({
  onClick,
  dataPlayer,
  dataTeam,
  playerName,
  server,
  ballPossesion,
}) => {
  return (
    <Fragment>
      <button onClick={onClick} data-player={dataPlayer} data-team={dataTeam}>
        {playerName}
        {server && ballPossesion && (
          <i data-team={dataTeam} data-player={dataPlayer} className="fas fa-volleyball-ball"></i>
        )}
      </button>
    </Fragment>
  );
};

export default ButtonPlayer;
