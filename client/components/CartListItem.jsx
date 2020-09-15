import React from 'react'
import { connect } from 'react-redux'

import formatCurrency from '../util'


class CartListItem extends React.Component {
    render() {
        const { id, name, price, img, quantity, scent } = this.props.item
        return (
            <>
                <tr>
                    <td>Img Placeholder</td>
                    <td>{name}</td>
                    <td>{scent}</td>
                    <td>{quantity}</td>
                    <td><a>X</a></td>
                    <td>{formatCurrency(price)}</td>
                </tr>
            </>
        )
    }
}

export default connect()(CartListItem)

