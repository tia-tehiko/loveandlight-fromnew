import React from 'react'

import Login from './Login'
import Register from './Register'

class Form extends React.Component {
  render() {
    return (
      <section id="login-signup" className="m-top">
        <div className="row">
          <div className="col-md-6"> 
            <h2>Already a customer? Login</h2>
            <Login />
          </div>
          <div className="col-md-6"> 
            <h2>New customer? Register</h2>
            <Register />
          </div>
        </div>
      </section>
    )
  }
}

export default Form
