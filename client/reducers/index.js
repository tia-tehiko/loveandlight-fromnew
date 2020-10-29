import { combineReducers } from 'redux'

import candlesReducer from './candles'
import diffusersReducer from './diffusers'
import scentsReducer from './scents'
import cartReducer from './cart'
import session from './session.reducer'
import loading from './loading.reducer'
import navigation from './navigate.reducer'

const reducers = combineReducers({
  candles: candlesReducer,
  diffusers: diffusersReducer,
  scents: scentsReducer,
  cartItems: cartReducer,
  session: session,
  loading: loading,
  navigation: navigation
})

export default reducers
