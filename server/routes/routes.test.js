import request from 'supertest'
import { getCandles, getDiffusers, getScents } from '../db/db'

import server from '../server'

jest.mock('../db/db', () => ({
  getCandles: jest.fn(),
  getDiffusers: jest.fn()
}))

describe('GET/  api/v1/candles', () => {
  test('check if status 200', () => {
    getCandles.mockImplementation(() => Promise.resolve())
    return request(server)
      .get('/api/v1/candles')
      .then((res) => {
        expect.assertions(1)
        expect(res.status).toBe(200)
      })
  })

  test('candles are returned correctly', () => {
    getCandles.mockImplementation(() => Promise.resolve([
      {
        id: 1,
        name: 'Carousel Mini',
        size: '65g Natural Soy Wax',
        price: 10,
      },
      {
        id: 2,
        name: 'Carousel Large',
        size: '175g Natural Soy Wax',
        price: 25,
      }
    ]))
    return request(server)
      .get('/api/v1/candles')
      .then((res) => {
        expect.assertions(2)
        expect(res.body[0].name).toBe('Carousel Mini')
        expect(res.body[1].name).toBe('Carousel Large')
      })
  })
})


