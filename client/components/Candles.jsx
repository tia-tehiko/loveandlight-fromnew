import React from 'react'
import { connect } from 'react-redux'
import { getCandles } from '../api'
import { fetchCandles } from '../actions'

import CandleItems from './CandleItems'

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
                <h1 className="pageHeader">Vegan Soy Candles</h1>
                <div className='productContainer'>
                {this.props.candles.map(candle => 
                  <CandleItems key={candle.id} candle={candle} />)}
              </div>
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


