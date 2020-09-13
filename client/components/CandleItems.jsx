import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { displayProductDetails } from '../actions'

class CandleItems extends React.Component {
  handleClick = (id) => {
    this.props.dispatch(displayProductDetails(id))
  }
  render() {
    const { id, name, img, price } = this.props.candle
    return (
      <div className='product'>
        <Link
          key={id}
          to={`candles/${name}`}
          onClick={() => this.handleClick(id)}
        >
          <img src={img} className='productImage'></img>
          <h4 className='productHeader'> {name}</h4>
          <h5 className='productPrice'> ${price}</h5>
        </Link>
      </div>
    )
  }
}

export default connect()(CandleItems)
