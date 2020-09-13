import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { gameStart } from "../../actions/gameSettings";

const Options = ({ gameStart }) => {
  const [maxPoints, setMaxPoints] = useState("11");
  const [bestOf, setBestOf] = useState(1);
  const [teamOne, setTeamOne] = useState({
    playerOne: "",
    playerTwo: "",
    teamReady: false,
  });
  const [teamTwo, setTeamTwo] = useState({
    playerOne: "",
    playerTwo: "",
    teamReady: false,
  });

  const onChangeMaxPoints = (e) => {
    setMaxPoints(e.target.value);
  };
  const onChangeBestOf = (e) => {
    setBestOf(e.target.value);
  };
  const onChangeTeamOne = (e) => {
    setTeamOne({ ...teamOne, [e.target.name]: e.target.value });
  };
  const onChangeTeamTwo = (e) => {
    setTeamTwo({ ...teamTwo, [e.target.name]: e.target.value });
  };

  const [serverTeamOne, setServerTeamOne] = useState(true);

  const teamOneServer = (e) => {
    setServerTeamOne(!serverTeamOne);
  };
  const [serverTeamTwo, setServerTeamTwo] = useState(true);

  const teamTwoServer = (e) => {
    setServerTeamTwo(!serverTeamTwo);
  };
  const setSettings = (e) => {
    e.preventDefault();
    const teamOnePlayerOneServer = document.getElementById(
      "server-teamOne-playerOne"
    ).checked;
    const teamOnePlayerTwoServer = document.getElementById(
      "server-teamOne-playerTwo"
    ).checked;
    const teamTwoPlayerOneServer = document.getElementById(
      "server-teamTwo-playerOne"
    ).checked;
    const teamTwoPlayerTwoServer = document.getElementById(
      "server-teamTwo-playerTwo"
    ).checked;

    const ballServers = {
      teamOnePlayerOne: teamOnePlayerOneServer,
      teamOnePlayerTwo: teamOnePlayerTwoServer,
      teamTwoPlayerOne: teamTwoPlayerOneServer,
      teamTwoPlayerTwo: teamTwoPlayerTwoServer,
    };

    if (
      teamOne.playerOne === teamOne.playerTwo ||
      teamTwo.playerOne === teamTwo.playerTwo
    ) {
      console.log("Nicknames can't duplicate in this same Team!");
    } else {
      const ballPossessionFlip = Math.floor(Math.random() * 2) + 1;
      gameStart(
        teamOne,
        teamTwo,
        maxPoints,
        ballServers,
        bestOf,
        ballPossessionFlip
      );
    }
  };

  return (
    <div className="options">
      <div className="options-select">
        <div className="options-select-max-points">
          <label htmlFor="max-points">Choose a max points per set:</label>
          <select
            name="max-points"
            id="max-points"
            onChange={onChangeMaxPoints}
          >
            <option value="11">11</option>
            <option value="15">15</option>
            <option value="21">21</option>
          </select>
        </div>
        <div className="options-select-bo">
          <label htmlFor="bo">Choose a BestOf:</label>
          <select name="bo" id="bo" onChange={onChangeBestOf}>
            <option value="1">1</option>
            <option value="2">3</option>
            <option value="3">5</option>
            <option value="4">7</option>
          </select>
        </div>
      </div>
      <div className="option-players">
        <form className="form">
          <h3>Select in checkbox who will serv first in each team!</h3>
          <div className="form-teams">
            <div className="form-group">
              <h3>Team Red</h3>
              <input
                type="text"
                placeholder="Player One"
                name="playerOne"
                onChange={onChangeTeamOne}
              />
              <input
                type="checkbox"
                id="server-teamOne-playerOne"
                checked={serverTeamOne}
                onChange={teamOneServer}
              />
              <input
                type="text"
                placeholder="Player Two"
                name="playerTwo"
                onChange={onChangeTeamOne}
              />
              <input
                type="checkbox"
                id="server-teamOne-playerTwo"
                checked={!serverTeamOne}
                onChange={teamOneServer}
              />
            </div>
            <div className="form-group">
              <h3>Team Blue</h3>
              <input
                type="text"
                placeholder="Player One"
                name="playerOne"
                onChange={onChangeTeamTwo}
              />
              <input
                type="checkbox"
                id="server-teamTwo-playerOne"
                checked={serverTeamTwo}
                onChange={teamTwoServer}
              />
              <input
                type="text"
                placeholder="Player Two"
                name="playerTwo"
                onChange={onChangeTeamTwo}
              />
              <input
                type="checkbox"
                id="server-teamTwo-playerTwo"
                checked={!serverTeamTwo}
                onChange={teamTwoServer}
              />
            </div>
          </div>
          <div className="form-start">
            <button type="submit" onClick={setSettings}>
              START GAME
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { gameStart })(Options);
