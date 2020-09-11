import React from 'react'
import Candles from './Candles'
import { connect } from "react-redux";


export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App Page</h1>
        <ul>{this.props.candles.map(candle => 
          <li key={candle.id}>{candle.name}</li>)}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    candles: state.candles
  }
}

export default connect(mapStateToProps)(App)
