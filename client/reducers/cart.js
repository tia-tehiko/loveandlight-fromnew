import { ADD_TO_CART, REMOVE_FROM_CART, FETCH_CART_ITEMS_SUCCESS } from '../actions/cart.action'

const initialState = []

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CART_ITEMS_SUCCESS:
      return action.payload.cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        size: item.size,
        lifespan: item.lifespan,
        wick: item.wick,
        price: item.price,
        quantity: item.quantity,
        img: item.img,
        details: item.details,
        gift_boxed: item.gift_boxed,
        scent: item.scent
      }))

    case ADD_TO_CART:
      return state.map((item) => (item.id === action.payload.item.id && item.scent === action.payload.item.scent) ? { ...item, quantity: action.payload.item.quantity } : item)

    case REMOVE_FROM_CART:
      return state.filter((item) => (item.id === action.payload.item.id && item.scent !== action.payload.item.scent) || item.id !== action.payload.item.id)

    default:
      return state
  }
}
