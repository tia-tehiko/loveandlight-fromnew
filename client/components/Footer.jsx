import React from 'react'
import { Link } from 'react-router-dom'

import Subscribe from './Subscribe'
import Contact from './Contact'
import Shipping from './Shipping'

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <Link to='/shipping'>
          <h4 className='navtitle'>Shipping + Returns</h4>
        </Link>
        <Subscribe />
        <Contact />
      </div>
    )
  }
}

export default Footer
