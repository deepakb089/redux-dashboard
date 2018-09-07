import {
    DEPOSIT_ATTEMPT, DEPOSIT_FAILED,
    DEPOSIT_SUCCESS,
    LOGIN,
    LOGOUT,
    REGISTER_ATTEMPT,
    REGISTER_FAILED,
    REGISTER_SUCCESS,
    CART_ADD
} from './actionTypes'

export const login = (user) => ({
    type: LOGIN,
    user: user
})

export const logout = () => ({
    type: LOGOUT,
})

export const registerAttempt = (registerDetails) => ({
    type: REGISTER_ATTEMPT,
    payload: registerDetails
})

export const registerFailed = (result) => ({
    type: REGISTER_FAILED,
    payload: result
})

export const registerSuccess = (result) => ({
    type: REGISTER_SUCCESS,
    payload: result
})

export const depositAttempt = (depositDetails) => ({
    type: DEPOSIT_ATTEMPT,
    payload: depositDetails
})

export const depositSuccess = (result) => ({
    type: DEPOSIT_SUCCESS,
    payload: result
})

export const depositFailed = (result) => ({
    type: DEPOSIT_FAILED,
    payload: result
})

export const cartAdd = (product) => ({
    type: CART_ADD,
    payload: {
        product: product
    }
})