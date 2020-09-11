const initialState = []

  export default function cartReducer (state = initialState, action) {
    switch (action.type) {
      case 'ADD_TO_CART' :
        state.map(item => console.log(item))
      case 'REMOVE_FROM_CART' :
        return state.filter(item => item.id !== action.id)
      case 'UPDATE_CART' :
        return action.cart
      default:
        return state
    }
  }