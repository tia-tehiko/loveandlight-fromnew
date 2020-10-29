import React from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from '../actions/cart.action'
import { deleteCartItem } from '../api'

import formatCurrency from '../util'


class CartListItem extends React.Component {
    handleClick = () => {
        const { dispatch, item } = this.props
        deleteCartItem(item.id)
            .then(() => dispatch(removeFromCart(item.id)))
            .catch((err) => console.log(err))
    }
    
    render() {
        const { id, name, price, img, quantity, scent } = this.props.item
        return (
            <>
                <tr>
                    <td><img src={img} className='cartImage' /></td>
                    <td>{name}</td>
                    <td>{scent}</td>
                    <td>{quantity}</td>
                    <td><a onClick={this.handleClick}>X</a></td>
                    <td>{formatCurrency(price)}</td>
                </tr>
            </>
        )
    }
}

export default connect()(CartListItem)

