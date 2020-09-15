import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../actions'

import ScentDropbox from './ScentDropbox'
import formatCurrency from '../util'

class DiffuserDetails extends React.Component {
  state = {
    scentId: false
  }

  chosenScent = (scentId) => {
    this.setState({ scentId: scentId })
  }

  handleClick = (item, scentId) => {
    this.props.dispatch(addToCart(item, this.state.scentId))
  }

  render() {
    const { name, img, price, details } = this.props.diffusers
    return (
      <div className='singleContainer'>
        <div className='imgContainer'>
          <img src={img} className='singleImg'></img>
        </div>
        <div className='infoContainer'>
          <h2 className='singleHeader'> {name}</h2>
          <h4 className='singlePrice'> {formatCurrency(price)}</h4>
          <p className='singleInfo'> {details} </p>
          <ScentDropbox chosenScent={this.chosenScent} />
          <button onClick={() => { this.handleClick(this.props.diffusers) }} disable={this.state.scentId === false} className='productButton'>Add to Cart</button>
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
    diffusers: state.diffusers[0],
  }
}

export default connect(mapStateToProps)(DiffuserDetails)
