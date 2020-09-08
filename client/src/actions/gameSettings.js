import { SET_GAME_SETTINGS } from "./types";

export const gameStart = (teamOne, teamTwo, maxPoints) => (dispatch) => {
  dispatch({
    type: SET_GAME_SETTINGS,
    payload: { teamOne, teamTwo, maxPoints },
  });
};
