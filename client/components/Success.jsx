import React from 'react'

export default class Success extends React.Component {
  componentDidMount() {
    fetch(`/api/v1/checkout${this.props.location.search}`)
      .then((response) => response.json())
      .then(console.log)
  }

  render() {
    return (
      <div>
        <h1>Payment Successful. Your order has been placed!</h1>
      </div>
    )
  }
}
