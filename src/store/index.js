import {createStore,applyMiddleware,combineReducers} from 'redux'
import rootReducer from '../reducers/index'
import authReducer from '../reducers/authReducer'


import createSagaMiddleware from 'redux-saga'
import {saveState, loadState} from "../util";


import saga from '../sagas';

const sagaMiddleware = createSagaMiddleware()
const preloadedState = loadState()

const finalReducer = combineReducers({
    default: rootReducer,
    auth: authReducer
})


const store = createStore(finalReducer, preloadedState, applyMiddleware(sagaMiddleware))
store.subscribe(() => {

    const state = store.getState()
    // saveState({
    //     user: state.user,
    //     login: state.login,
    //     phone: state.phone,
    //     balance: state.balance
    // })

    saveState(state)

})

sagaMiddleware.run(saga)



export default store