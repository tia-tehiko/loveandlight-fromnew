import { FETCH_SCENTS, SELECT_SCENT } from '../actions'

export default function scentsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_SCENTS:
      return action.scents

    case SELECT_SCENT:
      return state.filter((scent) => scent.id === action.id)

    default:
      return state
  }
}
