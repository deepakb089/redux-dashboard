import {createStore} from 'redux'
import rootReducer from '../reducers/index'


const store = createStore(rootReducer)
store.subscribe(() => {

    //localStorage.setItem("root", JSON.stringify(store))

})


export default store