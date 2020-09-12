import React from 'react'
import { connect } from 'react-redux'
import { getDiffusers } from '../api'
import { fetchDiffusers } from "../actions";

class Diffusers extends React.Component {
    componentDidMount() {
        getDiffusers()
        .then(diffusers => {
            this.props.dispatch(fetchDiffusers(diffusers))
        })
        .catch(err => {
            this.renderError(err)
        })
    }
    
    render() {
        return (
            <div>
                <h1>Diffusers</h1>
                <ul>
                    {this.props.diffusers.map(diffuser => 
                        <li key={diffuser.id}>{diffuser.name}</li>)}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        diffusers: state.diffusers
    }
}

export default connect(mapStateToProps)(Diffusers)