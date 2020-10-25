export const FETCH_SESSION_BEGIN  = 'FETCH_SESSION_BEGIN'
export const FETCH_SESSION_SUCCESS = 'FETCH_SESSION_SUCCESS'
export const FETCH_SESSION_FAILURE = 'FETCH_SESSION_FAILURE'

export const fetchSessionBegin = () => ({
  type: FETCH_SESSION_BEGIN
})

export const fetchSessionSuccess = (session) => ({
  type: FETCH_SESSION_SUCCESS,
  payload: { session }
})

export const fetchSessionFailure = (error) => ({
  type: FETCH_SESSION_FAILURE,
  payload: { error }
})
