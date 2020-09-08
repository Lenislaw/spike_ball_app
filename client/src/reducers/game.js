import {
  SET_GAME_ROUNDS,
  CLEAR_GAME_SET_OVER,
  GAME_SET_OVER,
} from "../actions/types";

const initialState = {
  gameRounds: [],
  gameSetOver: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_GAME_ROUNDS:
      return {
        ...state,
        gameRounds: [...state.gameRounds, payload],
      };
    case GAME_SET_OVER:
      return {
        gameRounds: [],
        gameSetOver: true,
      };
    case CLEAR_GAME_SET_OVER:
      return {
        ...state,
        gameSetOver: false,
      };

    default:
      return state;
  }
}
