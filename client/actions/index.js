export const FETCH_CANDLES = 'FETCH_CANDLES'
export const FETCH_DIFFUSERS = 'FETCH_DIFFUSERS'
export const FETCH_SCENTS = 'FETCH_SCENTS'
export const SELECT_SCENT = 'SELECT_SCENT'
export const DISPLAY_PRODUCT_DETAILS = 'DISPLAY_PRODUCT_DETAILS'
export const ADD_TO_CART = 'ADD_TO_CART'

export function fetchCandles(candles) {
  return {
    type: FETCH_CANDLES,
    candles,
  }
}

export function fetchDiffusers(diffusers) {
  return {
    type: FETCH_DIFFUSERS,
    diffusers,
  }
}

export function fetchScents(scents) {
  return {
    type: FETCH_SCENTS,
    scents,
  }
}

export function displayProductDetails(id) {
  return {
    type: DISPLAY_PRODUCT_DETAILS,
    id,
  }
}

export function selectScent(id) {
  return {
    type: SELECT_SCENT,
    id,
  }
}

export function addToCart(id) {
  return {
    type: ADD_TO_CART,
    id,
  }
}
