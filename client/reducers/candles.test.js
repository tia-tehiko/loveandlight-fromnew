import candlesReducer from './candles'

test('initial state has 9 tasks', () => {
    let state = candlesReducer(undefined, {})
    expect(state.length).toBe(9)
})

