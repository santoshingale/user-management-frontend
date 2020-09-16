import { ADD_USER, REMOVE_USER } from './UserActionTypes'

const initialState = {
    user: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER: return {
            ...state,
            user: [...state.user, action.paylod]
        }
        case REMOVE_USER: return {
            ...state,
            user: state.user.filter(item => item.id !== action.paylod)
        }
        default: return state 
    }
}

export default cartReducer
