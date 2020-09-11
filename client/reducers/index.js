import { combineReducers } from "redux"

import candlesReducer from './candles'
import cartReducer from "./cart"

const reducers = combineReducers({
    candles: candlesReducer,
    cartItems: cartReducer
})

export default reducers