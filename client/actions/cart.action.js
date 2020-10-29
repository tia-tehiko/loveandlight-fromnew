export const FETCH_CART_ITEMS_BEGIN  = 'FETCH_CART_ITEMS_BEGIN'
export const FETCH_CART_ITEMS_SUCCESS = 'FETCH_CART_ITEMS_SUCCESS'
export const FETCH_CART_ITEMS_FAILURE = 'FETCH_CART_ITEMS_FAILURE'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const fetchCartItemsBegin = () => ({
  type: FETCH_CART_ITEMS_BEGIN
})

export const fetchCartItemsSuccess = (cartItems) => ({
  type: FETCH_CART_ITEMS_SUCCESS,
  payload: { cartItems }
})

export const fetchCartItemsFailure = (error) => ({
  type: FETCH_CART_ITEMS_FAILURE,
  payload: { error }
})

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    payload: { item }
  }
}

export function removeFromCart(item) {
  return {
    type: REMOVE_FROM_CART,
    payload: { item }
  }
}
