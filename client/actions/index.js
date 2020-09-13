export const FETCH_CANDLES = 'FETCH_CANDLES'
export const FETCH_DIFFUSERS = 'FETCH_DIFFUSERS'
export const DISPLAY_CANDLE_DETAILS = 'DISPLAY_CANDLE_DETAILS'
export const DISPLAY_DIFFUSER_DETAILS = 'DISPLAY_DIFFUSER_DETAILS'

export function fetchCandles(candles) {
    return ({
        type: FETCH_CANDLES,
        candles
    })
}

export function fetchDiffusers(diffusers) {
    return ({
        type: FETCH_DIFFUSERS,
        diffusers
    })
}

export function displayCandleDetails(id) {
    return ({
        type: DISPLAY_CANDLE_DETAILS,
        id,
        name,
        img,
        price
    })
}

export function displayDiffuserDetails(id) {
    return ({
        type: DISPLAY_DIFFUSER_DETAILS,
        id,
        name,
        img,
        price
    })
}