import {
  FETCH_SESSION_BEGIN,
  FETCH_SESSION_SUCCESS,
  FETCH_SESSION_FAILURE
} from '../actions/session.action'

import {
  START_USER_AUTHENTICATION,
  USER_AUTHENTICATION_SUCCESS,
  USER_AUTHENTICATION_FAILURE
} from '../actions/user.action'

export default function(state=false, action) {
  switch(action.type) {
    case FETCH_SESSION_BEGIN:
    case START_USER_AUTHENTICATION:
      return true

    case FETCH_SESSION_SUCCESS:
    case FETCH_SESSION_FAILURE:
    case USER_AUTHENTICATION_SUCCESS:
    case USER_AUTHENTICATION_FAILURE:
      return false

    default:
      return state
  }
}
