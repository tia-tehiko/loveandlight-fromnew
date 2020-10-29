import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'

class Checkout extends React.Component {

  render() {
    const { navigation } = this.props

    return (
      <React.Fragment>
        <Header />
        {navigation.page}
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    navigation: state.navigation
  }
}

export default connect(mapStateToProps)(Checkout)
