import {
  FETCH_SESSION_SUCCESS,
  FETCH_SESSION_FAILURE
} from '../actions/session.action'

import {
  USER_AUTHENTICATION_SUCCESS,
  USER_AUTHENTICATION_FAILURE
} from '../actions/user.action'

const initialState = {
  user: {},
  error: null,
  authenticated: false
}

export default function sessionReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_SESSION_SUCCESS:
    case USER_AUTHENTICATION_SUCCESS:
      return {
        user: action.payload.session.user,
        error: null,
        authenticated: true
      }

    case FETCH_SESSION_FAILURE:
    case USER_AUTHENTICATION_FAILURE:
      return {
        ...state,
        authenticated: false,
        error: action.payload.error.message
      }

    default:
      return state
  }
}
