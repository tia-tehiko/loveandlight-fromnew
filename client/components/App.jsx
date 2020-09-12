import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Nav from './Nav'
import LandingPage from './LandingPage'
import Candles from './Candles'
import Diffusers from './Diffusers'

export class App extends React.Component {
  
  render() {
    return (
        <div className='container'>
        <Route path='/' component={ Nav } />
        <Route exact path='/' component={ LandingPage } />
        <Route exact path='/candles' component={ Candles } />
        <Route exact path='/diffusers' component={ Diffusers } />
      </div>
    )
  }
}


export default App
