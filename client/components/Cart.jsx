import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CartListItem from './CartListItem'

import formatCurrency from '../util'

class Cart extends React.Component {
    //render the cart item hers
    render() {
        return (
            <div className="cart">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Scent</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cartItems.map((item) => <CartListItem key={item.id} item={item} />)}
                    </tbody>
                </table>

                <p className="actions">
                    <Link to='/'>Continue shopping</Link>
                    <button>Update</button>
                    <button className="button-primary">Checkout</button>
                </p>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cartItems: state.cartItems
    }
}

export default connect(mapStateToProps)(Cart)
