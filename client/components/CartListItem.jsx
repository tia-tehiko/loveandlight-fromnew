
import React from 'react'
import { connect } from 'react-redux'


class CartListItem extends React.Component {
    render() {
        const { id, name, price, img } = this.props.item
        return (
            <>
                <h2>{name}</h2>
                <h2>{price}</h2>
                <img src={img}></img>
            </>
        )
    }
}

export default connect()(CartListItem)