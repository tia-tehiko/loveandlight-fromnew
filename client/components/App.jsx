import React from 'react'
import { connect } from 'react-redux'

import Candles from './Candles'
import Diffusers from './Diffusers'

export class App extends React.Component {
  
  render() {
    return (
      <div>
        <h1>This is the App Page</h1>
        <Candles />
        <Diffusers />
      </div>
    )
  }
}


export default App
