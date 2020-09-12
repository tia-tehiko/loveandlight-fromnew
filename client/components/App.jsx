import React from 'react'
import Candles from './Candles'
import { connect } from 'react-redux'
import { getCandles } from "../api";
import { fetchCandles } from "../actions";



export class App extends React.Component {

  componentDidMount() {
    getCandles()
    .then(candles => {
      this.props.dispatch(fetchCandles(candles))
    })
    .catch(err => {
      console.log(err)
    })
  }
  
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
