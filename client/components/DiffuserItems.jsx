import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export class DiffuserItems extends React.Component {
    render() {
        const {id, name, img, price} = this.props.diffuser
        return (
            <div className='product'>
                <Link key={id} to={`candles/${name}`}>
                <img src={img} className='productImage'></img>
                <h4 className='productHeader'> {name}</h4>
                <h5 className='productPrice'> ${price}</h5>
                </Link>
            </div>
        )
    }
}

export default connect()(DiffuserItems)
