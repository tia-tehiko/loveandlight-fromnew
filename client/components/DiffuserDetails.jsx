import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../actions/cart.action'

import ScentDropbox from './ScentDropbox'
import formatCurrency from '../util'
import { postToCart } from '../api'

class DiffuserDetails extends React.Component {
  state = {
    scent: false
  }

  chosenScent = (scent) => {
    this.setState({ scent: scent })
  }

  handleClick = (item) => {
    const { scent } = this.state
    const { dispatch } = this.props

    postToCart({...item, scent, quantity: 1})
      .then((cartItem) => dispatch(addToCart(cartItem)))
      .catch(console.log)
  }

  render() {
    const { name, img, price, details, size, lifespan } = this.props.diffusers
    return (
      <div className='singleContainer'>
        <div className='imgContainer'>
          <img src={img} className='singleImg'></img>
        </div>
        <div className='infoContainer'>
          <h2 className='singleHeader'> {name}</h2>
          <h4 className='singlePrice'> {formatCurrency(price)}</h4>
          <h4>{lifespan}</h4>
          <h4>{size}</h4><br />
          <p className='singleInfo'> {details} </p>
          <ScentDropbox chosenScent={this.chosenScent} />
          <Link to='/cart'><button onClick={() => { this.handleClick(this.props.diffusers) }} disabled={this.state.scent === false} className='productButton'>Add to Cart</button></Link>
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
    diffusers: state.diffusers[0],
  }
}

export default connect(mapStateToProps)(DiffuserDetails)
