import {
  FETCH_SESSION_SUCCESS,
  FETCH_SESSION_FAILURE
} from '../actions/session.action'

const initialState = {
  user: {},
  error: null,
  authenticated: false
}

export default function sessionReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_SESSION_SUCCESS:
      return {
        user: action.payload.session.user,
        error: null,
        authenticated: true
      }

    case FETCH_SESSION_FAILURE:
      return {
        ...state,
        authenticated: false,
        error: "Failed to authenticate user"
      }

    default:
      return state
  }
}
