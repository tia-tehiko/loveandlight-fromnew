import React from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from '../actions/cart.action'

import formatCurrency from '../util'


class CartListItem extends React.Component {
    render() {
        const { id, name, price, img, quantity, scent } = this.props.item
        return (
            <>
                <tr>
                    <td><img src={img} className='cartImage' /></td>
                    <td>{name}</td>
                    <td>{scent}</td>
                    <td>{quantity}</td>
                    <td><a onClick={() => this.props.dispatch(removeFromCart(this.props.item.id))}>X</a></td>
                    <td>{formatCurrency(price)}</td>
                </tr>
            </>
        )
    }
}

export default connect()(CartListItem)

