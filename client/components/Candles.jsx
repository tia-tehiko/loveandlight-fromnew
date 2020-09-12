import React from 'react'
import { connect } from 'react-redux'
import { getCandles } from "../api";
import { fetchCandles } from "../actions";

class Candles extends React.Component {
    componentDidMount() {
        getCandles()
        .then(candles => {
          this.props.dispatch(fetchCandles(candles))
        })
        .catch(err => {
            this.renderError(err)
        })
      }

    render() {
        return (
            <div>
                <h1>Vegan Soy Candles</h1>
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

export default connect(mapStateToProps)(Candles)