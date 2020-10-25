import nock from 'nock'
import { getCandles, getDiffusers, getScents, postToCart } from './api'

test('getCandles fetches candles from server', () => {
  nock(/localhost/)
    .get('/api/v1/candles')
    .reply(201, [{ name: 'Vintage Clear', price: 30 }])

  return getCandles()
    .then(candles => {
      expect.assertions(3)
      expect(candles[0].name).toBe('Vintage Clear')
      expect(candles[0].price).toBe(30)
      expect(candles).toHaveLength(1)
    })
})

test('getDiffusers fetched diffusers from server', () => {
  nock(/localhost/)
    .get('/api/v1/diffusers')
    .reply(201, [{ name: 'Reed Diffuser', price: 25 }, { name: 'Car Diffuser', price: 10 }])

  return getDiffusers()
    .then(diffusers => {
      expect.assertions(3)
      expect(diffusers[0].name).toBe('Reed Diffuser')
      expect(diffusers[1].price).toBe(10)
      expect(diffusers.length).toBe(2)
    })
})

test('getScents fetches scents from the server  ', () => {
  nock(/localhost/)
    .get('/api/v1/scents')
    .reply(201, [{ name: 'Sex On The Beach' }, { name: 'Watermelon Lemonade' }])

  return getScents()
    .then(scents => {
      expect.assertions(3)
      expect(scents[0].name).toBe('Sex On The Beach')
      expect(scents[1].name).toBe('Watermelon Lemonade')
      expect(scents.length).toBe(2)
    })
})

test('postToCart posts item to server', () => {
  const scope = nock(/localhost/)
    .post('/api/v1/cart')
    .reply(200)

  return postToCart(1)
    .then(() => {
      expect(scope.isDone()).toBe(true)
    })
})