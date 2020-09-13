import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ScentDropbox from './ScentDropbox'

class CandleDetails extends React.Component {
  render() {
    const { id, name, img, price, details } = this.props.candles
    return (
      <div className='singleContainer'>
        <div className='imgContainer'>
          <img src={img} className='singleImg'></img>
        </div>
        <div className='infoContainer'>
          <h2 className='singleHeader'> {name}</h2>
          <h5 className='singlePrice'> ${price}</h5>
          <p className='singleInfo'> {details} </p>
          <ScentDropbox />
          <button className='productButton'>Add to Cart</button>
          <br />
          <Link to='/candles'>
            <button className='productButton'>Back to Products</button>
          </Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    candles: state.candles[0],
  }
}

export default connect(mapStateToProps)(CandleDetails)
