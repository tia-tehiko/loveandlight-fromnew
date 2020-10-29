export const START_BILLING_SHIPPING_PROCESS  = 'START_BILLING_SHIPPING_PROCESS'
export const BILLING_SHIPPING_SUCCESS = 'BILLING_SHIPPING_SUCCESS'
export const BILLING_SHIPPING_FAILURE = 'BILLING_SHIPPING_FAILURE'

export const startBillingAndShippingProcess = () => ({
  type: START_BILLING_SHIPPING_PROCESS
})

export const billingAndShippingSuccess = (details) => ({
  type: BILLING_SHIPPING_SUCCESS,
  payload: { details }
})

export const billingAndShippingFailure = (errors) => ({
  type: BILLING_SHIPPING_FAILURE,
  payload: { errors }
})
