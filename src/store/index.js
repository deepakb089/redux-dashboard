import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {saveState, loadState} from "../util";
import reducer from '../reducers'

import saga from '../sagas';

const sagaMiddleware = createSagaMiddleware()
const preloadedState = loadState()
const store = createStore(reducer, preloadedState, applyMiddleware(sagaMiddleware))

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