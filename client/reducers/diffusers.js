import { FETCH_DIFFUSERS, DISPLAY_DIFFUSER_DETAILS } from "../actions"

export default function diffusersReducer(state = [], action) {
    switch (action.type) {
        case FETCH_DIFFUSERS:
            return action.diffusers

        case DISPLAY_DIFFUSER_DETAILS:
            return state.filter(item => item.id !== action.id)

        default:
            return state
    }
} 