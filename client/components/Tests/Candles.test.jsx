import React from 'react'
import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { MemoryRouter } from 'react-router-dom'


import Candles from '../Candles'
import store from '../../store'

jest.spyOn(store, 'getState')
jest.spyOn(store, 'dispatch')

beforeEach(() => {
    store.getState.mockImplementation(() => ({
        candles: [
            { id: 1, name: 'Carousel Mini', price: 8, img: './images/1.jpg', details: 'Coming Soon...', inCart: false, count: 0, total: 0 },
            { id: 2, name: 'Carousel Large', price: 20, img: './images/2.jpg', details: 'Coming Soon...', inCart: false, count: 0, total: 0 },
            { id: 3, name: 'Vintage Clear', price: 25, img: './images/1.jpg', details: 'Coming Soon...', inCart: false, count: 0, total: 0 }
        ]
    }))
})

test('displays candles names', () => {
    render(<Provider store={store}><MemoryRouter><Candles /></MemoryRouter></Provider>)
    expect.assertions(1)
    let candles = screen.getAllByRole('img')
    expect(candles.length).toBe(3)
})


