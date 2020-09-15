import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import CartListItem from './CartListItem'
import formatCurrency from '../util'

class Cart extends React.Component {
    render() {
        return (
            <div className="cart">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Scent</th>
                            <th>Quantity</th>
                            <th>Remove</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cartItems.map((item) => <CartListItem key={item.id} item={item} />)}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total</td>
                        </tr>
                    </tfoot>
                </table>

                <p className="actions">
                    <Link to='/candles'><button>Continue shopping</button></Link>
                    <button>Checkout</button>
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
