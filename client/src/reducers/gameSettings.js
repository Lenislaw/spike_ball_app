import { SET_GAME_SETTINGS, NEW_GAME, CHANGE_SETTINGS } from "../actions/types";

const initialState = {
  teamOne: {
    playerOne: { name: "1", server: true, id: 1 },
    playerTwo: { name: "2", server: false, id: 2 },
  },
  teamTwo: {
    playerOne: { name: "3", server: true, id: 3 },
    playerTwo: { name: "4", server: false, id: 4 },
  },
  maxPoints: 3,
  bestOf: 2,
  ballPossessionFlip: { teamOne: true, teamTwo: false },
  gameBegun: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_GAME_SETTINGS:
      const {
        teamOne,
        teamTwo,
        maxPoints,
        ballServers,
        bestOf,
        ballPossessionFlip,
      } = payload;
      let ballFor = {};
      console.log(ballPossessionFlip);
      if (ballPossessionFlip === 1) {
        ballFor = { teamOne: true, teamTwo: false };
      } else {
        ballFor = { teamOne: false, teamTwo: true };
      }
      console.log(ballFor);
      return {
        ...state,
        teamOne: {
          playerOne: {
            name: teamOne.playerOne,
            server: ballServers.teamOnePlayerOne,
            id: 1,
          },
          playerTwo: {
            name: teamOne.playerTwo,
            server: ballServers.teamOnePlayerTwo,
            id: 2,
          },
        },
        teamTwo: {
          playerOne: {
            name: teamTwo.playerOne,
            server: ballServers.teamTwoPlayerOne,
            id: 3,
          },
          playerTwo: {
            name: teamTwo.playerTwo,
            server: ballServers.teamTwoPlayerTwo,
            id: 4,
          },
        },
        bestOf: bestOf,
        maxPoints: maxPoints,
        ballPossessionFlip: ballFor,
        gameBegun: true,
      };

    case NEW_GAME:
      return {
        ...state,
        gameBegun: false,
        maxPoints: null,
        bestOf: null,
        teamOne: {
          playerOne: { name: "", server: false, id: 1 },
          playerTwo: { name: "", server: false, id: 2 },
        },
        teamTwo: {
          playerOne: { name: "", server: false, id: 3 },
          playerTwo: { name: "", server: false, id: 4 },
        },
      };
    default:
      return state;
  }
}
