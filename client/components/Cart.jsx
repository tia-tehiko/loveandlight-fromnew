import React from 'react'
import { connect } from 'react-redux'
import CartListItem from './CartListItem'

import formatCurrency from '../util'

class Cart extends React.Component {
    //render the cart item hers
    render() {
        return (
            <div>
                <h1>This is the Cart</h1>
                <div className="cartItem">
                    {this.props.cartItems.map((item) => {
                        return <CartListItem key={item.id} item={item} />
                    })}
                </div>
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

