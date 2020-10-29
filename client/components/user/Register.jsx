import React from 'react'
import { connect } from 'react-redux'
import { navigateTo } from '../../actions/navigate.action'
import { startUserAuthentication, userAuthenticationFailure, userAuthenticationSuccess } from '../../actions/user.action'
import { register } from '../../api'

class Register extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { state, props } = this
    const { name, email, password } = state
    const { dispatch } = props

    dispatch(startUserAuthentication())
    register({ name, email, password })
      .then((responseObject) => {
        dispatch(userAuthenticationSuccess(responseObject))
        dispatch(navigateTo('Billing and shipping'))
      })
      .catch((error) => dispatch(userAuthenticationFailure(error)))
  }

  handleChange = ({ target }) => {
    const { name, value } = target
    this.setState({
      [name]: value
    })
  }

  render() {
    const { name, email, password } = this.state
    const { loading } = this.props
    return (
      <form onSubmit={this.handleSubmit} className="form" id="register-form" noValidate>
        <div className="form-row">
          <input onChange={this.handleChange} type="text" name="name" id="name" placeholder="Name" value={name} />
        </div>
        <div className="form-row">
          <input onChange={this.handleChange} type="email" name="email" id="email-register" placeholder="E-mail" value={email} />
        </div>
        <div className="form-row">
          <input onChange={this.handleChange} type="password" name="password" id="password-register" placeholder="Password" value={password} />
        </div>
        <p>
          <input type="submit" className="btn" value="Register" disabled={loading} />
        </p>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps)(Register)
