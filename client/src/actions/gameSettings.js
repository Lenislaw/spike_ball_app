import { SET_GAME_SETTINGS, NEW_GAME } from "./types";

export const gameStart = (teamOne, teamTwo, maxPoints, ballServers,bestOf) => (
  dispatch
) => {
  dispatch({
    type: SET_GAME_SETTINGS,
    payload: { teamOne, teamTwo, maxPoints, ballServers ,bestOf},
  });
};
export const newGame = () => (dispatch) => {
  dispatch({ type: NEW_GAME });
};
