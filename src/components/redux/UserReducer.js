import { ADD_USER, REMOVE_USER } from './UserActionTypes'

const initialState = {
    // user: {address: "",
    // country: "",
    // dateOfBirth: "",
    // email: "",
    // firstname: "",
    // gender: "",
    // id: 0,
    // lastLogin: [],
    // lastUpdate: null,
    // lastname: "",
    // middlename: "",
    // phone: 0,
    // phoneext: 0,
    // profilePic: "default_image.png",
    // registrationDate: "",
    // role: "",
    // status: "",
    // userPermission: {},
    // username: "",
    // worongLoginAttempt: 0}
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER: return {
            user: action.paylod
        }
        case REMOVE_USER: return {
            user: []
        }
        default: return state
    }
}

export default cartReducer
