import React, { useState } from "react";
import { connect } from "react-redux";
import { gameStart } from "../../../actions/gameSettings";
import { setAlert } from "../../../actions/alert";
import Alert from "../../layout/Alert/Alert";

const Options = ({ gameStart, setAlert }) => {
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
    if (e.target.value.length > 7) {
      console.log(teamOne.playerOne.length);
      setAlert("Player name is to long! Max 7 characters!");
    } else {
      setTeamOne({ ...teamOne, [e.target.name]: e.target.value });
    }
  };
  const onChangeTeamTwo = (e) => {
    if (e.target.value.length > 7) {
      setAlert("Player name is to long! Max 7 characters!");
    } else {
      setTeamTwo({ ...teamTwo, [e.target.name]: e.target.value });
    }
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
      teamOne.playerOne === "" ||
      teamOne.playerTwo === "" ||
      teamTwo.playerOne === "" ||
      teamTwo.playerTwo === ""
    ) {
      setAlert("Each Player has to be named!");
    } else if (
      teamOne.playerOne === teamOne.playerTwo ||
      teamTwo.playerOne === teamTwo.playerTwo
    ) {
      setAlert("Players in each team must have unique names!");
    } else if (
      teamOne.playerOne.length >= 7 ||
      teamOne.playerTwo.length >= 7 ||
      teamTwo.playerOne.length >= 7 ||
      teamTwo.playerTwo.length >= 7
    ) {
      setAlert("Player name is to long! Max 7 characters!");
      
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
    <div className="spikeball-counter-options">
      <form className="form">
        <div className="options-select">
          <div className="options-select-max-points">
            <label htmlFor="max-points-lebel">
              Choose a max points per set:
            </label>
            <select
              className="max-points-select"
              name="max-points"
              id="max-points"
              onChange={onChangeMaxPoints}
            >
              <option className="option" value="11">
                11
              </option>
              <option className="option" value="15">
                15
              </option>
              <option className="option" value="21">
                21
              </option>
            </select>
          </div>
          <div className="options-select-bo">
            <label htmlFor="bo">Choose a BestOf:</label>
            <select
              className="bo-select"
              name="bo"
              id="bo"
              onChange={onChangeBestOf}
            >
              <option value="1">1</option>
              <option value="2">3</option>
              <option value="3">5</option>
              <option value="4">7</option>
            </select>
          </div>
        </div>
        <div className="option-players">
          <h3 className="info">Select who will serv first in each team!</h3>
          <div className="teams">
            <div className="form-group red">
              <h1 className="team-name red">Team Red</h1>
              <div className="player">
                <input
                  className="input-text "
                  type="text"
                  placeholder="Player One"
                  name="playerOne"
                  onChange={onChangeTeamOne}
                  required
                />
                <input
                  className="input-checkbox"
                  type="checkbox"
                  id="server-teamOne-playerOne"
                  checked={serverTeamOne}
                  onChange={teamOneServer}
                />
                <label htmlFor="server-teamOne-playerOne"></label>
              </div>
              <div className="player">
                <input
                  className="input-text"
                  type="text"
                  placeholder="Player Two"
                  name="playerTwo"
                  onChange={onChangeTeamOne}
                  required
                />
                <input
                  className="input-checkbox"
                  type="checkbox"
                  id="server-teamOne-playerTwo"
                  checked={!serverTeamOne}
                  onChange={teamOneServer}
                />
                <label htmlFor="server-teamOne-playerTwo"></label>
              </div>
            </div>
            <div className="form-group blue">
              <h1 className="team-name blue">Team Blue</h1>
              <div className="player">
                <input
                  className="input-text "
                  type="text"
                  placeholder="Player One"
                  name="playerOne"
                  onChange={onChangeTeamTwo}
                  required
                />
                <input
                  className="input-checkbox"
                  type="checkbox"
                  id="server-teamTwo-playerOne"
                  checked={serverTeamTwo}
                  onChange={teamTwoServer}
                />
                <label htmlFor="server-teamTwo-playerOne"></label>
              </div>
              <div className="player">
                <input
                  className="input-text "
                  type="text"
                  placeholder="Player Two"
                  name="playerTwo"
                  onChange={onChangeTeamTwo}
                  required
                />
                <input
                  className="input-checkbox"
                  type="checkbox"
                  id="server-teamTwo-playerTwo"
                  checked={!serverTeamTwo}
                  onChange={teamTwoServer}
                />
                <label htmlFor="server-teamTwo-playerTwo"></label>
              </div>
            </div>
          </div>
          <div className="start">
            <Alert />
            <button
              className="start-btn"
              type="submit"
              onClick={(e) => setSettings(e)}
            >
              START GAME
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { gameStart, setAlert })(Options);
