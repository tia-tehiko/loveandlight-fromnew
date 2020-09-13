import { combineReducers } from 'redux'

import candlesReducer from './candles'
import diffusersReducer from './diffusers'
import scentsReducer from './scents'
import cartReducer from './cart'

const reducers = combineReducers({
  candles: candlesReducer,
  diffusers: diffusersReducer,
  scents: scentsReducer,
  cartItems: cartReducer,
})

export default reducers
