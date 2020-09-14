import { combineReducers } from "redux";
import gameSettings from "./gameSettings";
import game from "./game";
import alert from "./alert";

export default combineReducers({
  gameSettings,
  game,
  alert,
});
