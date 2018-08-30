import {LOGIN, LOGOUT} from "../actions/actionTypes";

const initial = {
    login: false,
    user: null
}

const rootReducer = (state = initial, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                login: true,
                user: action.user
            }

        case LOGOUT:
            return {
                ...state,
                login: false,
                user: null
            }


        default:
            return state;


    }
}

export default rootReducer