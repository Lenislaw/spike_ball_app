import {
  SET_GAME_ROUNDS,
  GAME_SET_OVER,
  CLEAR_GAME_SET_OVER,
  GAME_SAVE_SET_ONE,
  GAME_SAVE_SET_TWO,
  GAME_SAVE_SET_THREE,
  GAME_SAVE_SET_FOUR,
  GAME_SAVE_SET_FIVE,
  GAME_SAVE_SET_SIX,
  GAME_SAVE_SET_SEVEN,
  GAME_OVER,
  CHANGE_GAME_SETTINGS,
  SET_BALL_POSSESSION,
  FLIP_TRUE,
} from "./types";
export const setFlippedTrue = () => (dispatch) => {
  dispatch({ type: FLIP_TRUE });
};
export const setGameRounds = (round, msg = false) => (dispatch) => {
  console.log(round);

  let newRound = round;
  if (msg) {
    const ballPossessionChange = {
      teamOne: !round.ballPossession.teamOne,
      teamTwo: !round.ballPossession.teamTwo,
    };
    newRound = {
      ...round,
      ballPossession: ballPossessionChange,
    };

    dispatch({
      type: CHANGE_GAME_SETTINGS,
      payload: newRound,
    });
  } else {
    dispatch({
      type: SET_GAME_ROUNDS,
      payload: newRound,
    });
  }
};
export const ballPossessionUpdate = (ballPossession) => (dispatch) => {
  dispatch({ type: SET_BALL_POSSESSION, payload: ballPossession });
};
export const saveSet = (setNr) => (dispatch) => {
  const options = new Map([
    [1, GAME_SAVE_SET_ONE],
    [2, GAME_SAVE_SET_TWO],
    [3, GAME_SAVE_SET_THREE],
    [4, GAME_SAVE_SET_FOUR],
    [5, GAME_SAVE_SET_FIVE],
    [6, GAME_SAVE_SET_SIX],
    [7, GAME_SAVE_SET_SEVEN],
  ]);
  const type = options.get(setNr);
  dispatch({ type: type });
};

export const gameSetOver = () => (dispatch) => {
  dispatch({ type: GAME_SET_OVER });
  dispatch({ type: CLEAR_GAME_SET_OVER });
};
export const gameOver = (team) => (dispatch) => {
  dispatch({ type: GAME_OVER, payload: team });
};
