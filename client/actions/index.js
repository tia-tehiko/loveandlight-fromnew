export const FETCH_CANDLES = 'FETCH_CANDLES'

export function fetchCandles (candles) {
    return ({
        type: FETCH_CANDLES,
        candles
    })
}