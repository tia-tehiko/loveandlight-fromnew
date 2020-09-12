import React from 'react'
import Candles from './Candles'
import { connect } from 'react-redux'

export class App extends React.Component {
  
  render() {
    return (
      <div>
        <h1>App Page</h1>
        <Candles />
      </div>
    )
  }
}


export default App
