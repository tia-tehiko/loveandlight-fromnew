import cartReducer from '../cart'
import {
  addToCart,
  removeFromCart,
} from '../../actions'

describe('cart reducer tests', () => {
  test('test that initial state is an empty array', () => {
    let state = cartReducer(undefined, {})
    expect(state.length).toBe(0)
  })

  test('ADD_TO_CART adds item to cart', () => {
    expect.assertions(1)
    const item = { name: 'Carousel Mini', price: 25 }
    const scent = 'Coconut Lime'
    const quantity = 1
    const initialState = []

    const expectedState = [...initialState, { ...item, scent, quantity }]
    const action = addToCart(item, scent)
    const actualState = cartReducer(initialState, action)
    expect(actualState).toEqual(expectedState)
  })

  test('REMOVE_FROM_CART removes item from cart', () => {
    expect.assertions(1)
    const item = [{ id: 1, name: 'Teardrop', price: 45, scent: 'Japanese Honeysuckle' }]

    const action = removeFromCart(1)
    const newState = cartReducer(item, action)
    expect(newState).toEqual([])
  })
})