import React from 'react'
import { connect } from 'react-redux'

import formatCurrency from '../util'

class Cart extends React.Component {
    state = {
        cartItems: {
            id: 1,
            name: 'Carousel Mini',
            price: 8,
            img: './images/1.jpg'
        }
    }

    render() {
        return (
            <div>
                <h1>This is the Cart</h1>
                <div className="cartItem">
                    <h4>{this.state.cartItems.name}</h4>
                    <h4>{formatCurrency(this.state.cartItems.price)}</h4>
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

