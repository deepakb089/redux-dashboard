import {
    DEPOSIT_ATTEMPT, DEPOSIT_FAILED, DEPOSIT_SUCCESS,
    LOGIN,
    LOGOUT,
    REGISTER_ATTEMPT,
    REGISTER_FAILED,
    REGISTER_SUCCESS
} from "../actions/actionTypes";

const initial = {
    login: false,
    user: null,
    registerFormProcessing: false,
    registerFormSuccess: false,
    registerError: '',
    phone: null,
    registerFormCompleted: false,
    balance: 0,
    depositForm: {
        completed: false,
        processing: false,
        success: false,
        errors: []
    }
}

const rootReducer = (state = initial, action) => {

    switch (action.type) {

        case LOGIN:
            return {
                ...state,
                login: true,
                user: action.user
            }
            break;

        case LOGOUT:
            return {
                ...state,
                login: false,
                user: null
            }
            break

        case REGISTER_ATTEMPT:
            return {
                ...state,
                registerFormProcessing: true
            }

        case REGISTER_SUCCESS:
            //  console.log(action)
            return {
                ...state,
                registerFormProcessing: false,
                registerFormSuccess: true,
                registerFormCompleted: true,
                user: action.payload.name,
                phone: action.payload.phone,
                login: true
            }

        case REGISTER_FAILED:
            return {
                ...state,
                registerFormProcessing: false,
                registerError: action.payload.message,
                registerFormSuccess: false,
                registerFormCompleted: true
            }

        case DEPOSIT_ATTEMPT:
            return {
                ...state,
                depositForm: {
                    processing: true
                }
            };

        case DEPOSIT_SUCCESS:
            return {
                ...state,
                depositForm: {
                    processing: false,
                    completed: true,
                    success: true,
                    errors: []
                },
                balance: action.payload.amount
            }

        case DEPOSIT_FAILED:
            return {
                ...state,
                depositForm: {
                    processing: false,
                    completed: true,
                    success: false,
                    errors: action.payload.message
                }

            }


        default:
            return state;


    }
}

export default rootReducer