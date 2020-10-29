import React from 'react'
import { connect } from 'react-redux'
import { billingAndShippingFailure, billingAndShippingSuccess, startBillingAndShippingProcess } from '../../../actions/billing-shipping.action'
import { navigateTo } from '../../../actions/navigate.action'
import { billingShipping } from '../../../api'

class BillingAndShipping extends React.Component {
  state = {
    billing_first_name: '',
    billing_last_name: '',
    billing_email: '',
    billing_address: '',
    billing_city: '',
    billing_zip: '',
    billing_phone: '',
    shipping_first_name: '',
    shipping_last_name: '',
    shipping_email: '',
    shipping_address: '',
    shipping_city: '',
    shipping_zip: '',
    shipping_phone: '',
    sameAs: false
  }

  handleChange = ({ target }) => {
    const checks = ['true', 'false']
    this.setState({
      [target.name]: checks.includes(target.value) ? !(JSON.parse(target.value.toLowerCase())) : target.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const email = this.props.user.email

    if (prevProps.user !== this.props.user) {
      this.setState({
        billing_email: email,
        shipping_email: email
      })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { dispatch } = this.props
    dispatch(startBillingAndShippingProcess())
    billingShipping(this.state)
      .then((billingAndShippingDetails) => {
        dispatch(billingAndShippingSuccess(billingAndShippingDetails))
        dispatch(navigateTo('Payment'))
      })
      .catch((errors) => dispatch(billingAndShippingFailure(errors)))
  }

  render() {
    const {
      billing_first_name,
      billing_last_name,
      billing_email,
      billing_address,
      billing_city,
      billing_zip,
      billing_phone,
      shipping_first_name,
      shipping_last_name,
      shipping_email,
      shipping_address,
      shipping_city,
      shipping_zip,
      shipping_phone,
      sameAs
    } = this.state

    return (
      <section id="billing-shipping" className="m-top">
        <form onSubmit={this.handleSubmit} className="form" id="billing-shipping-form" noValidate>
          <div className="row">
            <div className="col-md-6">
              <h2>Billing information</h2>
              <div className="form-row">
                <input onChange={this.handleChange} type="text" name="billing_first_name" id="billing_first_name" placeholder="First name" value={billing_first_name} />
              </div>
              <div className="form-row">
                <input onChange={this.handleChange} type="text" name="billing_last_name" id="billing_last_name" placeholder="Last name" value={billing_last_name} />
              </div>
              <div className="form-row">
                <input onChange={this.handleChange} type="email" name="billing_email" id="billing_email" placeholder="E-mail" value={billing_email} />
              </div>
              <div className="form-row">
                <input onChange={this.handleChange} type="text" name="billing_address" id="billing_address" placeholder="Address" value={billing_address} />
              </div>
              <div className="form-row">
                <input onChange={this.handleChange} type="text" name="billing_city" id="billing_city" placeholder="City" value={billing_city} />
              </div>
              <div className="form-row">
                <input onChange={this.handleChange} type="text" name="billing_zip" id="billing_zip" placeholder="Postal code" value={billing_zip} />
              </div>
              <div className="form-row">
                <input onChange={this.handleChange} type="text" name="billing_phone" id="billing_phone" placeholder="Phone" value={billing_phone} />
              </div>
            </div>

            <div className="col-md-6">
              <h2>Shipping information</h2>
              <div className="form-row">
                <label htmlFor="same-as"><input onChange={this.handleChange} type="checkbox" name="sameAs" id="same-as" value={sameAs} checked={sameAs} />Same as billing</label>
              </div>
              {!sameAs && (
                <div id="shipping">
                  <div className="form-row">
                    <input onChange={this.handleChange} type="text" name="shipping_first_name" id="shipping_first_name" placeholder="First name" value={shipping_first_name} />
                  </div>
                  <div className="form-row">
                    <input onChange={this.handleChange} type="text" name="shipping_last_name" id="shipping_last_name" placeholder="Last name" value={shipping_last_name} />
                  </div>
                  <div className="form-row">
                    <input onChange={this.handleChange} type="email" name="shipping_email" id="shipping_email" placeholder="E-mail" value={shipping_email} />
                  </div>
                  <div className="form-row">
                    <input onChange={this.handleChange} type="text" name="shipping_address" id="shipping_address" placeholder="Address" value={shipping_address} />
                  </div>
                  <div className="form-row">
                    <input onChange={this.handleChange} type="text" name="shipping_city" id="shipping_city" placeholder="City" value={shipping_city} />
                  </div>
                  <div className="form-row">
                    <input onChange={this.handleChange} type="text" name="shipping_zip" id="shipping_zip" placeholder="Postal code" value={shipping_zip} />
                  </div>
                  <div className="form-row">
                    <input onChange={this.handleChange} type="text" name="shipping_phone" id="shipping_phone" placeholder="Phone" value={shipping_phone} />
                  </div>
                </div>
              )}
            </div>

          </div>
          <p>
            <input onChange={this.handleChange} type="submit" className="btn" value="Save" />
          </p>
        </form>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.session.authenticated,
    user: state.session.user
  }
}

export default connect(mapStateToProps)(BillingAndShipping)
