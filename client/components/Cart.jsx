import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createCheckoutSession } from '../api'

import CartListItem from './CartListItem'

const stripe = Stripe('pk_test_51HiAx2ANwjB3rM4a9n7xcra9xWq1650jvlDQ2yD7nVlpP09A2BCoCbyHFj0ESM5ShqB8XvVMBy2l2Rlv8oMGT3P100MW23gU1H')

class Cart extends React.Component {
    state = {
        disabled: false
    }

    componentDidUpdate() {
        const { cartItems } = this.props
        if (!cartItems.length && !this.state.disabled) {
            this.setState({ disabled: true })
        }
    }

    handleClick = (event) => {
        event.preventDefault()
        const { state } = this

        if (state.disabled) return
        
        this.setState({ disabled: true })
        createCheckoutSession()
            .then((session) => {
                stripe.redirectToCheckout({ sessionId: session.id })
                this.setState({ disabled: false })
            })
            .catch(() => {
                this.setState({ disabled: false })
            })
    }

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
                        {this.props.cartItems.map((item) => <CartListItem key={`${item.id}-${item.scent}`} item={item} />)}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total</td>
                        </tr>
                    </tfoot>
                </table>

                <p className="actions">
                    <Link to='/candles'><button>Continue shopping</button></Link>
                    <button disabled={this.state.disabled} onClick={this.handleClick} role="link">Checkout</button>
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
