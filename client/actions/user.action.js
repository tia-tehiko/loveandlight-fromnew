export const START_USER_AUTHENTICATION  = 'START_USER_AUTHENTICATION'
export const USER_AUTHENTICATION_SUCCESS = 'USER_AUTHENTICATION_SUCCESS'
export const USER_AUTHENTICATION_FAILURE = 'USER_AUTHENTICATION_FAILURE'

export const startUserAuthentication = () => ({
  type: START_USER_AUTHENTICATION
})

export const userAuthenticationSuccess = (session) => ({
  type: USER_AUTHENTICATION_SUCCESS,
  payload: { session }
})

export const userAuthenticationFailure = (error) => ({
  type: USER_AUTHENTICATION_FAILURE,
  payload: { error }
})
