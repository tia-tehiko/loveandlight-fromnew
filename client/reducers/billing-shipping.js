import {
  BILLING_SHIPPING_SUCCESS,
  BILLING_SHIPPING_FAILURE
} from '../actions/billing-shipping.action'

const initialState = {
  billing: {},
  shipping: {},
  errors: null,
}

export default function sessionReducer(state = initialState, action) {
  switch(action.type) {
    case BILLING_SHIPPING_SUCCESS:
      return {
        billing: action.payload.details.billing,
        shipping: action.payload.details.shipping,
        errors: null,
      }

    case BILLING_SHIPPING_FAILURE:
      return {
        ...state,
        errors: action.payload.errors.response.body.errors,
      }

    default:
      return state
  }
}
