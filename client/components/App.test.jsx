import React from 'react'
import App from './App'
import { render, screen } from "@testing-library/react"

test('displays candles names', () => {
    expect.assertions(2)
    render(<App />)
    let candles = screen.getAllByRole('listitem')
    expect(candles.length).toBe(9)
    expect(candles[0].innerHTML).toMatch(/Carousel/)
})
