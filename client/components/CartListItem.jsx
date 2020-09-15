
import React from 'react'
import { connect } from 'react-redux'

import formatCurrency from '../util'


class CartListItem extends React.Component {
    render() {
        const { id, name, price, img, quantity } = this.props.item
        return (
            <>
                <tr>
                    <td>{name}</td>
                    <td>Scent Placeholder</td>
                    <td>{formatCurrency(price)}</td>
                    <td>{quantity}</td>
                    <td><a>X</a></td>
                </tr>
            </>
        )
    }
}

export default connect()(CartListItem)

