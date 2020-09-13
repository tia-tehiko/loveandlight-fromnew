import React from 'react'
import { connect } from 'react-redux'
import { getDiffusers } from '../api'
import { fetchDiffusers } from '../actions'

import DiffuserItems from './DiffuserItems'

class Diffusers extends React.Component {
  componentDidMount() {
    getDiffusers()
      .then((diffusers) => {
        this.props.dispatch(fetchDiffusers(diffusers))
      })
      .catch(err => {
        res.status(500).send('Somethings gone wrong')
      })
  }

  render() {
    return (
      <div>
        <h1 className='pageHeader'>Diffusers</h1>
        <div className='productContainer'>
          {this.props.diffusers.map((diffuser) => (
            <DiffuserItems key={diffuser.id} diffuser={diffuser} />
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    diffusers: state.diffusers,
  }
}

export default connect(mapStateToProps)(Diffusers)
