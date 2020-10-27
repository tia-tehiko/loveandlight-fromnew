import React from 'react'
import {
  NAVIGATE_TO
} from '../actions/navigate.action'
import BillingAndShippingForm from '../components/checkout/BillingAndShipping/Form'
import Information from '../components/checkout/Information'
import Payment from '../components/checkout/Payment'

const pages = {
  'Information': <Information />,
  'Billing and shipping': <BillingAndShippingForm />,
  'Payment': <Payment />
}

const initialState = sessionStorage['label'] ? {
  page: pages[sessionStorage['label']],
  label: sessionStorage['label']
} : {
  page: pages['Information'],
  label: 'Information'
}

export default function navigateReducer(state = initialState, action) {
  switch(action.type) {
    case NAVIGATE_TO:
      const label = action.payload.label
      return {
        page: pages[label],
        label: updateSessionStorage(label)
      }

    default:
      return state
  }
}

function updateSessionStorage (item) {
  return sessionStorage['label'] = item
}
