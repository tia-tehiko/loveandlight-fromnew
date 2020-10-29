import { ADD_TO_CART, REMOVE_FROM_CART, FETCH_CART_ITEMS_SUCCESS } from '../actions/cart.action'

const initialState = []

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CART_ITEMS_SUCCESS:
      return action.payload.cartItems

    case ADD_TO_CART:
      return [...state, { ...action.payload.item }]

    case REMOVE_FROM_CART:
      return state.filter((item) => (item.id === action.payload.item.id && item.scent !== action.payload.item.scent) || item.id !== action.payload.item.id)

    default:
      return state
  }
}
