import { FETCH_CANDLES, DISPLAY_CANDLE_DETAILS } from "../actions";

export default function candlesReducer(state = [], action) {
  switch (action.type) {
    case FETCH_CANDLES:
      return action.candles

    case DISPLAY_CANDLE_DETAILS:
      return state.filter(item => item.id !== action.id)

    default:
      return state
  }
}



