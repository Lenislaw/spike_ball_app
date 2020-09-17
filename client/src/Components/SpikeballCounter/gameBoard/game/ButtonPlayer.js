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
      <button
        className={`btn-player ${dataTeam} `}
        onClick={onClick}
        data-player={dataPlayer}
        data-team={dataTeam}
      >
        {playerName}
        {server && ballPossesion && (
          <i
            data-team={dataTeam}
            data-player={dataPlayer}
            className="btn-player-icon fas fa-volleyball-ball neon yellow"
          ></i>
        )}
      </button>
    </Fragment>
  );
};

export default ButtonPlayer;
