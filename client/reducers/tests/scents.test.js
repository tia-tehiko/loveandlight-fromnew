import secntsReducer from '../scents'
import { fetchScents } from '../../actions'
import scentsReducer from '../scents'

test('initial state is an empty array', () => {
  let state = scentsReducer(undefined, {})
  expect(state.length).toBe(0)
})

test('FETCH_SCENTS receives scent data', () => {
  let scents = [{ name: 'Vanilla' }, { name: 'Caramel' }]
  let action = fetchScents(scents)
  let newState = scentsReducer([], action)
  expect(newState).toEqual(scents)
})
