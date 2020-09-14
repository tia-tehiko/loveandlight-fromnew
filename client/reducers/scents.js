import { FETCH_SCENTS } from '../actions'

export default function scentsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_SCENTS:
      return action.scents
    default:
      return state
  }
}
