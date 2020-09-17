import React from "react";

const ChangeServers = ({
  onChangeTeamOne,
  TeamOnePlayerOne,
  TeamOnePlayerTwo,
  onChangeTeamTwo,
  TeamTwoPlayerOne,
  TeamTwoPlayerTwo,
  closeBox,
}) => {
  return (
    <div className="change-servers">
      <h3>Select first server in next set!</h3>
      <div className="team-one">
        <h3>Team One</h3>
        <div className="inputs">
          <div className="select-box">
            <select
              name="select-server-team-one"
              id="select-server-team-one"
              className="select-style"
              onChange={onChangeTeamOne}
            >
              <option id="server-teamOne-playerOne" value={TeamOnePlayerOne}>
                {TeamOnePlayerOne}
              </option>
              <option id="server-teamOne-playerTwo" value={TeamOnePlayerTwo}>
                {TeamOnePlayerTwo}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="team-two">
        <h3>Team Two</h3>
        <div className="inputs">
          <div className="select">
            <select
              name="select-server-team-two"
              id="select-server-team-two"
              className="select-style"
              onChange={onChangeTeamTwo}
            >
              <option id="server-teamTwo-playerOne" value={TeamTwoPlayerOne}>
                {TeamTwoPlayerOne}
              </option>
              <option id="server-teamTwo-playerTwo" value={TeamTwoPlayerTwo}>
                {TeamTwoPlayerTwo}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="button">
        <button className="button-btn" onClick={closeBox}>
          Start next set
        </button>
      </div>
    </div>
  );
};

export default ChangeServers;
