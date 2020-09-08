import { combineReducers } from "redux";
import gameSettings from "./gameSettings";
import game from "./game";

export default combineReducers({
  gameSettings,
  game,
});
