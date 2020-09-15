import { ADD_TO_CART } from '../actions'

const initialState = []

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, {
        ...action.item,
        scent: state.scentId,
        quantity: 1,
      }]
    default:
      return state
  }
}