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
} from "./types";

export const setGameRounds = (round, msg = false) => (dispatch) => {
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
  console.log(ballPossession);
  dispatch({ type: SET_BALL_POSSESSION, payload: ballPossession });
};
export const saveSet = (setNr) => (dispatch) => {
  if (setNr === 1) {
    dispatch({ type: GAME_SAVE_SET_ONE });
  }
  if (setNr === 2) {
    dispatch({ type: GAME_SAVE_SET_TWO });
  }
  if (setNr === 3) {
    dispatch({ type: GAME_SAVE_SET_THREE });
  }
  if (setNr === 4) {
    dispatch({ type: GAME_SAVE_SET_FOUR });
  }
  if (setNr === 5) {
    dispatch({ type: GAME_SAVE_SET_FIVE });
  }
  if (setNr === 6) {
    dispatch({ type: GAME_SAVE_SET_SIX });
  }
  if (setNr === 7) {
    dispatch({ type: GAME_SAVE_SET_SEVEN });
  }
};
export const gameSetOver = () => (dispatch) => {
  dispatch({ type: GAME_SET_OVER });
  dispatch({ type: CLEAR_GAME_SET_OVER });
};
export const gameOver = (team) => (dispatch) => {
  dispatch({ type: GAME_OVER, payload: team });
};
