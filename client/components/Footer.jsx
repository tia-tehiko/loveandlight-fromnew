import React from 'react'
import { Link } from 'react-router-dom'

import Subscribe from './Subscribe'
import Contact from './Contact'

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div>
          <h3>MENU</h3>
          <Link to='/shipping'><h4 className='navtitle'>Shipping + Returns</h4></Link>
          <Link to='/candlecare'><h4 className='navtitle'>Candle Care</h4></Link>
          <Link to='/scents'><h4 className='navtitle'>Scents</h4></Link>
        </div>
        <Contact />
        <Subscribe />
      </div>
    )
  }
}

export default Footer
