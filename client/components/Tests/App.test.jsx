import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import App from '../App'
import store from '../../store'

test('shows HOME nav title as first heading on page', () => {
    render(<Provider store={store}><MemoryRouter><App /></MemoryRouter></Provider>)
    return screen.findAllByRole('heading')
    .then(headings => {
        expect(headings[0].innerHTML).toContain('HOME')
    })
})
