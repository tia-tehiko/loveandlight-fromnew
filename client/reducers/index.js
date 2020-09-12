import { combineReducers } from "redux"

import candlesReducer from './candles'
import diffusersReducer from './diffusers'
import cartReducer from "./cart"

const reducers = combineReducers({
    candles: candlesReducer,
    diffusers: diffusersReducer,
    cartItems: cartReducer
})

export default reducers