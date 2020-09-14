import { SET_ALERT, CLEAR_ALERT } from "../actions/types";

const initialState = {
  alert: { msg: "" },
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return {
        alert: { msg: payload },
      };
    case CLEAR_ALERT:
      return {
        alert: { msg: "" },
      };
    default:
      return state;
  }
}
