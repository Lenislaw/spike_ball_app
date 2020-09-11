import {
  SET_GAME_ROUNDS,
  GAME_SET_OVER,
  CLEAR_GAME_SET_OVER,
  GAME_SAVE_SETS,
  GAME_OVER,
} from "./types";

export const setGameRounds = (round) => (dispatch) => {
  console.log("ROUNDS", round);

  dispatch({
    type: SET_GAME_ROUNDS,
    payload: round,
  });
};
export const gameSetOver = () => (dispatch) => {
  dispatch({ type: GAME_SAVE_SETS });
  dispatch({ type: GAME_SET_OVER });
  dispatch({ type: CLEAR_GAME_SET_OVER });
};
export const gameOver = (team) => (dispatch) => {
    console.log("GAMEOVER")
  dispatch({ type: GAME_OVER, payload: team });
};
