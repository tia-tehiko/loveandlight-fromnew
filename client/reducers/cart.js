import { ADD_TO_CART } from '../actions'

const initialState = []

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, {
        id: action.id,
      }]
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.id)
    case 'UPDATE_CART':
      return action.cart
    default:
      return state
  }
}

