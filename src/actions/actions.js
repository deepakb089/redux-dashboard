import {LOGIN, LOGOUT} from './actionTypes'

export const login = (user) => ({
    type: LOGIN,
    user: user
})

export const logout = () => ({
    type: LOGOUT,
})


