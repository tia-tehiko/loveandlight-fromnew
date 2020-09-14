import React from 'react'
import { connect } from 'react-redux'

class Cart extends React.Component {
    state = {
        cartItems: {
            id: 1,
            name: 'Carousel Mini',
            price: 8,
            img: './images/1.jpg'
        }
    }

    // state = {
    //     cartItems: this.props.cartItems,
    //     scent: this.props.scent
    // }
    render() {
        console.log(this.state.cartItems)
        return (
            <div>
                <h1>This is the Cart</h1>
                <div className="cartItem">
                    <h4>{this.state.cartItems.name}</h4>
                    <h4>${this.state.cartItems.price}.00</h4>
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

