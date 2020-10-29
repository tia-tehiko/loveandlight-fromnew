import React from 'react'
import { connect } from 'react-redux'
import { billingAndShippingFailure, billingAndShippingSuccess } from '../../actions/billing-shipping.action'
import { getBillingAndShippingDetails } from '../../api'
import formatCurrency from '../../util'

class Payment extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    getBillingAndShippingDetails()
      .then((billingAndShippingDetails) => dispatch(billingAndShippingSuccess(billingAndShippingDetails)))
      .catch((errors) => dispatch(billingAndShippingFailure(errors)))
  }
  
  render() {
    const { details, cartItems } = this.props
    return (
      <section id="payment" className="m-top">
        <div className="row">
          <div className="col-md-6">
            <h2>Billing information</h2>
            <address>
              {`${details.billing.firstname} ${details.billing.lastname}`}<br />
              {`${details.billing.email} ${details.billing.phone}`}<br />
              {`${details.billing.address} ${details.billing.zip} ${details.billing.city}`}
            </address>
          </div>
          <div className="col-md-6">
            <h2>Shipping information</h2>
            {details.shipping ? (
              <address>
                {`${details.shipping.firstname} ${details.shipping.lastname}`}<br />
                {`${details.shipping.email} ${details.shipping.phone}`}<br />
                {`${details.shipping.address} ${details.shipping.zip} ${details.shipping.city}`}
              </address>
            ) : (
                <address>
                  {`${details.billing.firstname} ${details.billing.lastname}`}<br />
                  {`${details.billing.email} ${details.billing.phone}`}<br />
                  {`${details.billing.address} ${details.billing.zip} ${details.billing.city}`}
                </address>
              )}
          </div>
        </div>
        <div className="row m-top">
          <div className="col-md-6">
            <h2>Your order</h2>
            <table className="order">
              <thead>
                <tr>
                  <th></th>
                  <th scope="col">Product</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td><img src={item.img} style={{width: 50, height: 50}}/></td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{formatCurrency(item.price)}</td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-6">
            <h2>Total</h2>
            <p id="total">$ 10.50</p>
          </div>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    details: state.details,
    cartItems: state.cartItems
  }
}

export default connect(mapStateToProps)(Payment)
