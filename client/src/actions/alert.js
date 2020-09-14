import { SET_ALERT, CLEAR_ALERT } from "./types";

export const setAlert = (msg, time = 5000) => (dispatch) => {
  dispatch({ type: SET_ALERT, payload: msg });
  setTimeout(() => {
    dispatch({ type: CLEAR_ALERT });
  }, time);
};
