import {LOGIN,LOGOUT} from "../actions/actionTypes";

const initialValue = {
    valueA: 'hello',
    valueB: 'world'
}

const authReducer = (state = initialValue, action) => {

    switch (action.type) {
        case LOGIN:
            return {
                ...state
            };
            break

        default:
            return state
    }


}

export default authReducer