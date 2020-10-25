import {
  fetchCandles,
  fetchDiffusers,
  fetchScents,
  displayProductDetails,
  addToCart,
  removeFromCart
} from './index'

test('fetchCandles returns candles', () => {
  const action = fetchCandles({ name: 'Teardrop', price: 25 })
  expect(action.candles).toEqual({ name: 'Teardrop', price: 25 })
})

test('fetchDiffusers returns diffusers', () => {
  const action = fetchDiffusers({ name: 'Reed Diffuser', price: 10 })
  expect(action.diffusers).toEqual({ name: 'Reed Diffuser', price: 10 })
})

test('fetchScents returns scents', () => {
  const action = fetchScents({ name: 'Vanilla' })
  expect(action.scents).toEqual({ name: 'Vanilla' })
})

test('displayProductDetails displays products based off id', () => {
  const action = displayProductDetails(1)
  expect(action.type).toBe('DISPLAY_PRODUCT_DETAILS')
})

test('addToCart adds item and scent to cart', () => {
  const action = addToCart(1, 'Vanilla')
  expect(action.type).toBe('ADD_TO_CART')
})

test('removeFromCart removes item by id ', () => {
  const action = removeFromCart(2)
  expect(action.type).toBe('REMOVE_FROM_CART')
})