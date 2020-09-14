import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../actions'

import ScentDropbox from './ScentDropbox'
import formatCurrency from '../util'

class CandleDetails extends React.Component {
  handleClick = (id) => {
    this.props.addToCart(this.props.id)
  }

  render() {
    const { id, name, img, price, details } = this.props.candles
    return (
      <div className='singleContainer'>
        <div className='imgContainer'>
          <img src={img} className='singleImg'></img>
        </div>
        <div className='infoContainer'>
          <h2 className='singleHeader'> {name}</h2>
          <h5 className='singlePrice'>{formatCurrency(price)}</h5>
          <p className='singleInfo'> {details} </p>
          <ScentDropbox />
          <button className='productButton' onClick={() => this.handleClick(id)}>Add to Cart</button>
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
    candles: state.candles[0]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => { dispatch(addToCart(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CandleDetails)
