import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Nav extends React.Component {
  render() {
    return (
      <div className='navcontainer'>
        <Link to='/'><img src='./images/logo.jpg' className='navlogo'></img></Link>
        <Link to='/'><h4 className='navtitle'>HOME</h4></Link>
        <Link to='/candles'><h4 className='navtitle'>CANDLES</h4></Link>
        <Link to='/diffusers'><h4 className='navtitle'>DIFFUSERS</h4></Link>
        <Link to='/scents'><h4 className='navtitle'>SCENTS</h4></Link>
        <Link to='/cart'><h4 className='navtitle'>CART ({this.props.itemsInCart})</h4></Link>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    itemsInCart: state.cartItems.length
  }
}

export default connect(mapStateToProps)(Nav)
