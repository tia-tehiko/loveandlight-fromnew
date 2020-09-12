import diffusersReducer from './diffusers'
import { fetchDiffusers } from '../actions'

test('test that initial state is an empty array', () => {
    let state = diffusersReducer(undefined, {})
    expect(state.length).toBe(0)
})

test('FETCH_DIFFUSERS receives data', () => {
    let diffusers = {name: 'SZA'}
    let action = fetchDiffusers(diffusers)
    let newState = diffusersReducer([], action)
    expect(newState).toEqual(diffusers)
})
