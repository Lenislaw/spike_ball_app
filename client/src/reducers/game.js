import {
  SET_GAME_ROUNDS,
  CLEAR_GAME_SET_OVER,
  GAME_SET_OVER,
  CHANGE_GAME_SETTINGS,
  GAME_OVER,
  NEW_GAME,
  GAME_SAVE_SET_ONE,
  GAME_SAVE_SET_TWO,
  GAME_SAVE_SET_THREE,
  GAME_SAVE_SET_FIVE,
  GAME_SAVE_SET_FOUR,
  GAME_SAVE_SET_SIX,
  GAME_SAVE_SET_SEVEN,
  SET_BALL_POSSESSION,
  FLIP_TRUE,
} from "../actions/types";

const initialState = {
  ballPossession: { teamOne: true, teamTwo: false },
  gameRounds: [],
  gameSetOver: false,
  setNr: 1,
  setOne: null,
  setTwo: null,
  setThree: null,
  setFour: null,
  setFive: null,
  setSix: null,
  setSeven: null,
  gameStats: null,
  matchOver: false,
  coinFliped: false,
  won: {
    teamOne: false,
    teamTwo: false,
  },
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_GAME_ROUNDS:
      return {
        ...state,
        gameRounds: [...state.gameRounds, payload],
      };
    case CHANGE_GAME_SETTINGS:
      return {
        ...state,
        gameRounds: [payload],
      };
    case FLIP_TRUE:
      return {
        ...state,
        coinFliped: true,
      };
    case SET_BALL_POSSESSION:
      return {
        ...state,
        ballPossession: payload,
      };
    case GAME_SAVE_SET_ONE:
      const roundsSetOne = state.gameRounds;
      return {
        ...state,
        setOne: roundsSetOne,
        gameStats: roundsSetOne[roundsSetOne.length - 1],
      };
    case GAME_SAVE_SET_TWO:
      const roundsSetTwo = state.gameRounds;
      return {
        ...state,
        setTwo: roundsSetTwo,
        gameStats: roundsSetTwo[roundsSetTwo.length - 1],
      };
    case GAME_SAVE_SET_THREE:
      const roundsSetThree = state.gameRounds;
      return {
        ...state,
        setThree: roundsSetThree,
        gameStats: roundsSetThree[roundsSetThree.length - 1],
      };
    case GAME_SAVE_SET_FOUR:
      const roundsSetFour = state.gameRounds;
      return {
        ...state,
        setFour: roundsSetFour,
        gameStats: roundsSetFour[roundsSetFour.length - 1],
      };
    case GAME_SAVE_SET_FIVE:
      const roundsSetFive = state.gameRounds;
      return {
        ...state,
        setFive: roundsSetFive,
        gameStats: roundsSetFive[roundsSetFive.length - 1],
      };
    case GAME_SAVE_SET_SIX:
      const roundsSetSix = state.gameRounds;
      return {
        ...state,
        setSix: roundsSetSix,
        gameStats: roundsSetSix[roundsSetSix.length - 1],
      };
    case GAME_SAVE_SET_SEVEN:
      const roundsSetSeven = state.gameRounds;
      return {
        ...state,
        setSeven: roundsSetSeven,
        gameStats: roundsSetSeven[roundsSetSeven.length - 1],
      };
    case GAME_SET_OVER:
      return {
        ...state,
        gameRounds: [],
        gameSetOver: true,
        setNr: ++state.setNr,
      };
    case CLEAR_GAME_SET_OVER:
      return {
        ...state,
        gameSetOver: false,
      };
    case GAME_OVER:
      let winner = {};
      if (payload === "one") {
        winner = { teamOne: true, teamTwo: false };
      } else if (payload === "two") {
        winner = { teamOne: false, teamTwo: true };
      }

      return {
        ...state,
        gameRounds: [],
        matchOver: true,
        won: winner,
      };
    case NEW_GAME:
      return {
        gameRounds: [],
        gameSetOver: false,
        gameSaveSets: [],
        matchOver: false,
        setNr: 1,
        coinFliped: false,
        won: {
          teamOne: false,
          teamTwo: false,
        },
      };
    default:
      return state;
  }
}
