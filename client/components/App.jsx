import React from 'react'
import { connect } from 'react-redux'

import Candles from './Candles'
import Diffusers from './Diffusers'

export class App extends React.Component {
  
  render() {
    return (
      <div>
        <h1>App Page</h1>
        <Candles />
        <Diffusers />
      </div>
    )
  }
}


export default App
