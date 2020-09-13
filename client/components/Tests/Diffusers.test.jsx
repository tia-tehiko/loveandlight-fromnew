import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'


import Diffusers from '../Diffusers'
import store from '../../store'

jest.spyOn(store, 'getState')
jest.spyOn(store, 'dispatch')

beforeEach(() => {
  store.getState.mockImplementation(() => ({
    diffusers: [
      { id: 1, name: 'Reed Diffuser', price: 25, img: './images/4.jpg', details: 'Coming Soon', inCart: false, count: 0, total: 0, },
      { id: 2, name: 'Round Car Diffuser', price: 8, img: './images/3.jpg', details: 'Coming Soon', inCart: false, count: 0, total: 0, },
      { id: 3, name: 'Circle Car Diffuser', price: 8, img: './images/6.jpg', details: 'Coming Soon', inCart: false, count: 0, total: 0, }
    ],
  }))
})

test('displays diffuser list item names', () => {
  render(<Provider store={store}><MemoryRouter><Diffusers /></MemoryRouter></Provider>)
  expect.assertions(1)
  let diffusers = screen.getAllByRole('img')
  expect(diffusers.length).toBe(3)
})

