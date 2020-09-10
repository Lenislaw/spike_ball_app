import {
  SET_GAME_ROUNDS,
  CLEAR_GAME_SET_OVER,
  GAME_SET_OVER,
  GAME_SAVE_SETS,
  MATCH_OVER,
} from "../actions/types";

const initialState = {
  gameRounds: [],
  gameSetOver: false,
  gameSaveSets: [],
  matchOver: false,
  won: {
    teamOne: false,
    teamTwo: false,
  },
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_GAME_ROUNDS:
      return {
        ...state,
        gameRounds: [...state.gameRounds, payload],
      };
    case GAME_SAVE_SETS:
      const gameRounds = state.gameRounds;
      return {
        ...state,
        gameSaveSets: [...state.gameSaveSets, gameRounds],
      };
    case GAME_SET_OVER:
      return {
        ...state,
        gameRounds: [],
        gameSetOver: true,
      };
    case CLEAR_GAME_SET_OVER:
      return {
        ...state,
        gameSetOver: false,
      };
    case MATCH_OVER:
      let winner = {};
      if (payload === "one") {
        winner = { teamOne: true, teamTwo: false };
      } else if (payload === "two") {
        winner = { teamOne: false, teamTwo: true };
      }

      return {
        ...state,
        gameRounds: [],
        matchOver: true,
        won: winner,
      };

    default:
      return state;
  }
}
