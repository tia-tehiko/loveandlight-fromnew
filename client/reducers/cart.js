import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions'

const initialState = JSON.parse(localStorage['items'])

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const cartItems = [...state, {
        ...action.item,
        scent: action.scent,
        quantity: 1,
      }]
      return JSON.parse(updateLocalStorageCartItems(cartItems))

    case REMOVE_FROM_CART:
      const filteredCartItems = state.filter((item) => item.id !== action.id)
      return JSON.parse(updateLocalStorageCartItems(filteredCartItems))

    default:
      return state
  }
}

function updateLocalStorageCartItems (items) {
  return localStorage['items'] = JSON.stringify(items)
}
