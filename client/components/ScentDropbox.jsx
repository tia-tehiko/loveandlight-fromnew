import React from 'react'
import { connect } from 'react-redux'
import { getScents } from '../api'
import { fetchScents, selectScent } from '../actions'

export class ScentDropbox extends React.Component {
  componentDidMount() {
    getScents()
      .then((scents) => {
        this.props.dispatch(fetchScents(scents))
      })
      .catch((err) => {
        res.status(500).send('Its the Error Message for me!')
      })
  }

  state = {
    scents: 'Select Scent'
  }

  handleChange = (id) => {
    this.props.dispatch(selectScent(id))
  }


  render() {
    return (
      <div className="dropdown">
        <button className="dropbtn">{this.state.scents}</button>
        <div className="dropdown-content">
          {this.props.scents.map((scent) =>
            <li onMouseDownCapture={this.handleChange} key={scent.id}>{scent.name}</li>
          )}
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    scents: state.scents,
  }
}

export default connect(mapStateToProps)(ScentDropbox)
