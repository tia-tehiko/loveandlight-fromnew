export const FETCH_CANDLES = 'FETCH_CANDLES'
export const FETCH_DIFFUSERS = 'FETCH_DIFFUSERS'

export function fetchCandles (candles) {
    return ({
        type: FETCH_CANDLES,
        candles
    })
}

export function fetchDiffusers (diffusers) {
    return ({
        type: FETCH_DIFFUSERS,
        diffusers
    })
}