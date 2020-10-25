import {
  FETCH_SESSION_BEGIN,
  FETCH_SESSION_SUCCESS,
  FETCH_SESSION_FAILURE
} from '../actions/session.action'

export default function(state=false, action) {
  switch(action.type) {
    case FETCH_SESSION_BEGIN:
      return true

    case FETCH_SESSION_SUCCESS:
    case FETCH_SESSION_FAILURE:
      return false

    default:
      return state
  }
}
