import { ADD_USER, REMOVE_USER } from './UserActionTypes'

export const addUser = (prop) => {
    return {
        type: ADD_USER,
        paylod: prop
    }
}

export const removeUser = (id) => {
    return {
        type: REMOVE_USER,
        paylod: id
    }
}