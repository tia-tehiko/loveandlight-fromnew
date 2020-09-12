import { FETCH_DIFFUSERS } from "../actions"

export default function diffusersReducer (state = [], action) {
    switch(action.type) {
        case FETCH_DIFFUSERS:
        return action.diffusers

        default: 
        return state
    }
} 