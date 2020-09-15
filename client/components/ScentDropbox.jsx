import React from 'react'
import { connect } from 'react-redux'
import { getScents } from '../api'
import { fetchScents } from '../actions'

class ScentDropbox extends React.Component {
  componentDidMount() {
    getScents()
      .then((scents) => {
        this.props.dispatch(fetchScents(scents))
      })
  }

  handleChange = (event) => {
    this.props.chosenScent(event.target.value)
  }

  render() {
    return (
      <div>
        <select value={this.props.value} onChange={this.handleChange}>
          <option className='selectOption'>SELECT SCENT</option>
          {this.props.scents.map((scent) => (
            <option value={scent.name} key={scent.id}>{scent.name}</option>
          ))}
        </select>
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
