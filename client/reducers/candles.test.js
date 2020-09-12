import candlesReducer from './candles'
import { fetchCandles } from "../actions";

test('initial state is an empty array', () => {
    let state = candlesReducer(undefined, {})
    expect(state.length).toBe(0)
})

test('FETCH_CANDLES receives the candle data', () => {
   let candles = [{name: 'Pop Smoke'}] 
   let action = fetchCandles(candles)
   let newState = candlesReducer([], action)
   expect(newState).toEqual(candles)
})
