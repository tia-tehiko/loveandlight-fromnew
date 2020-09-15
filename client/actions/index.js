export const FETCH_CANDLES = 'FETCH_CANDLES'
export const FETCH_DIFFUSERS = 'FETCH_DIFFUSERS'
export const FETCH_SCENTS = 'FETCH_SCENTS'
export const DISPLAY_PRODUCT_DETAILS = 'DISPLAY_PRODUCT_DETAILS'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

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

export function addToCart(item, scent) {
  return {
    type: ADD_TO_CART,
    item,
    scent,
  }
}

export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    id
  }
}