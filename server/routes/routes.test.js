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

  test(' check if candles are returned correctly', () => {
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
        expect(res.body[1].price).toBe(25)
      })
  })
})

describe('GET/ api/v1/diffusers', () => {
  test('check if status 200', () => {
    getDiffusers.mockImplementation(() => Promise.resolve())
    return request(server)
      .get('/api/v1/diffusers')
      .then((res) => {
        expect.assertions(1)
        expect(res.status).toBe(200)
      })
  })

  test('check if diffusers are returned correctly', () => {
    getDiffusers.mockImplementation(() => Promise.resolve([
      {
        id: 1,
        name: 'Reed Diffuser',
        price: 25,
      },
      {
        id: 2,
        name: 'Round Car Diffuser',
        price: 10,
      },
      {
        id: 3,
        name: 'Circle Car Diffuser',
        price: 10,
      }
    ]))
    return request(server)
      .get('/api/v1/diffusers')
      .then((res) => {
        expect.assertions(3)
        expect(res.body[0].name).toBe('Reed Diffuser')
        expect(res.body[1].price).toBe(10)
        expect(res.body[2].id).toBe(3)
      })

  })
})

