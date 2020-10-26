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
import { fetchSession } from '../api'

export class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchSessionBegin())
    fetchSession()
      .then((responseJson) => this.props.dispatch(fetchSessionSuccess(responseJson)))
      .catch((error) => this.props.dispatch(fetchSessionFailure(error)))
  }

  render() {
    return (
      <div className='container'>
        <Route path='/' component={Nav} />
        <Route exact path='/' component={LandingPage} />
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
