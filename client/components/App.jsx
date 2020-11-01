import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Nav from './Nav'
import Footer from './Footer'
import LandingPage from './LandingPage'
import Candles from './Candles'
import CandleDetails from './CandleDetails'
import Diffusers from './Diffusers'
import DiffuserDetails from './DiffuserDetails'
import Scents from './Scents'
import Shipping from './Shipping'
import CandleCare from './CandleCare'
import Cart from './Cart'
import Checkout from './checkout/Checkout'
import { fetchSessionBegin, fetchSessionFailure, fetchSessionSuccess } from '../actions/session.action'
import { fetchSession, getCartItems } from '../api'
import { fetchCartItemsBegin, fetchCartItemsFailure, fetchCartItemsSuccess } from '../actions/cart.action'
import Success from './Success'

export class App extends React.Component {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(fetchSessionBegin())
    fetchSession()
      .then((responseJson) => dispatch(fetchSessionSuccess(responseJson)))
      .catch((error) => dispatch(fetchSessionFailure(error)))
    
    dispatch(fetchCartItemsBegin())
    getCartItems()
      .then((cartItems) => dispatch(fetchCartItemsSuccess(cartItems)))
      .catch((error) => dispatch(fetchCartItemsFailure(error)))
  }

  render() {
    return (
      <div className='container'>
        <Route path='/' component={Nav} />
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/success' component={Success} />
        <Route exact path='/candles' component={Candles} />
        <Route exact path='/candles/:name' component={CandleDetails} />
        <Route exact path='/diffusers' component={Diffusers} />
        <Route exact path='/diffusers/:name' component={DiffuserDetails} />
        <Route exact path='/scents' component={Scents} />
        <Route exact path='/shipping' component={Shipping} />
        <Route exact path='/candlecare' component={CandleCare} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/checkout' component={Checkout} />
        <Route path='/' component={Footer} />
      </div>
    )
  }
}

export default connect()(App)
