import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { gameStart } from "../../actions/gameSettings";

const Options = ({ gameStart }) => {
  const [maxPoints, setMaxPoints] = useState("11");

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
  const onChangeTeamOne = (e) => {
    setTeamOne({ ...teamOne, [e.target.name]: e.target.value });
  };
  const onChangeTeamTwo = (e) => {
    setTeamTwo({ ...teamTwo, [e.target.name]: e.target.value });
  };

  const setSettings = (e) => {
    e.preventDefault();
    if (
      teamOne.playerOne === teamOne.playerTwo ||
      teamTwo.playerOne === teamTwo.playerTwo
    ) {
      console.log("Nicknames can't duplicate in this same Team!");
    } else {
      gameStart(teamOne, teamTwo, maxPoints);
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
        <select name="bo" id="bo" onChange={onChangeMaxPoints}>
          <option value="1">1</option>
          <option value="2">3</option>
          <option value="3">5</option>
          <option value="4">7</option>
        </select>
        </div>
      </div>
      <div className="option-players">
        <form className="form">
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
                type="text"
                placeholder="Player Two"
                name="playerTwo"
                onChange={onChangeTeamOne}
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
                type="text"
                placeholder="Player Two"
                name="playerTwo"
                onChange={onChangeTeamTwo}
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
