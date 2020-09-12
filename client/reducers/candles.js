import { FETCH_CANDLES } from "../actions";

export default function candlesReducer (state = [], action) {
  switch(action.type) {
    case FETCH_CANDLES:
    return action.candles

    default:
      return state
  }
}

