import React from 'react'
import { connect } from 'react-redux'
class Navigation extends React.Component {
  state = {
    processes: ['Information', 'Billing and shipping', 'Payment', 'Order complete']
  }

  render() {
    const { navigation } = this.props
    return (
      <nav id="checkout-navigation">
        <ul>
          {this.state.processes.map((process) => (
            <li key={process} className={`${process === navigation.label && 'active'}`}>
              <span>{process}</span>
            </li>
          ))}            
        </ul>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    navigation: state.navigation
  }
}

export default connect(mapStateToProps)(Navigation)
