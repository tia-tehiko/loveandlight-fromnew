import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../actions'

import ScentDropbox from './ScentDropbox'
import formatCurrency from '../util'

class CandleDetails extends React.Component {
  handleClick = (id) => {
    this.props.addToCart(this.props.id, this.state.scentId)
  }

  chosenScent = (scentId) => {
    this.setState({ scentId: scentId })
  }

  state = {
    scentId: false
  }

  render() {
    const { id, name, img, price, details, size, wick, gift_boxed } = this.props.candles
    return (
      <div className='singleContainer'>
        <div className='imgContainer'>
          <img src={img} className='singleImg'></img>
        </div>
        <div className='infoContainer'>
          <h2 className='singleHeader'> {name}</h2>
          <h4 className='singlePrice'>{formatCurrency(price)}</h4>
          <h4>{size}</h4>
          <h4>{wick}</h4><br />
          <p className='singleInfo'> {details} </p>
          <p>{gift_boxed}</p>
          <ScentDropbox chosenScent={this.chosenScent} />
          <button className='productButton' disabled={this.state.scentId === false} onClick={() => this.handleClick(id)}>Add to Cart</button>
          <br />
          <Link to='/candles'>
            <button className='productButton'>Back to Products</button>
          </Link>
        </div>
      </div >
    )
  }
}

function mapStateToProps(state) {
  return {
    candles: state.candles[0],
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, scentId) => { dispatch(addToCart(id, scentId)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CandleDetails)
