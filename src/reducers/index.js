import rootReducer from './rootReducer'
import authReducer from './authReducer'
import productsReducer from './productsReducer'
import {combineReducers} from 'redux'
import cartReducer from './cartReducer'

const reducer = combineReducers({
    root: rootReducer,
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer
})

export default reducer

