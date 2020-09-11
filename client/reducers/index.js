import { combineReducers } from "redux"

import candlesReducer from './candles'
import cartReducer from "./cart"

export default combineReducers({
    candles: candlesReducer,
    cartItems: cartReducer
})