import { SET_GAME_SETTINGS } from "../actions/types";

const initialState = {
  teamOne: {
    playerOne: { name: "Rudy", role: "server" },
    playerTwo: { name: "Rudy2", role: "player" },
  },
  teamTwo: {
    playerOne: { name: "Łysy", role: "player" },
    playerTwo: { name: "Łysy2", role: "player" },
  },
  maxPoints: 11,
  bestOf: 2,
  gameBegun: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_GAME_SETTINGS:
      const { teamOne, teamTwo, maxPoints } = payload;
      return {
        ...state,
        teamOne: teamOne,
        teamTwo: teamTwo,
        maxPoints: maxPoints,
        gameBegun: true,
      };

    default:
      return state;
  }
}
