import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions'

const initialState = []

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, {
        ...action.item,
        scent: action.scent,
        quantity: 1,
      }]

    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.id)

    default:
      return state
  }
}

