export const NAVIGATE_TO = 'NAVIGATE_TO'

export const navigateTo = (label) => ({
  type: NAVIGATE_TO,
  payload: { label }
})
