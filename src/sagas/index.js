import {
    takeLatest,
    call,
    put
} from 'redux-saga/effects'

import {depositApi, registerApi} from "../api";
import * as actions from '../actions/actions'
import {
    DEPOSIT_ATTEMPT,
    REGISTER_ATTEMPT
} from "../actions/actionTypes";


function* registerUser(action) {
    try {
        const result = yield call(registerApi, action.payload)
        console.log(result)
        if (result.status == 'success') {
            yield put(actions.registerSuccess(result))
        } else {
            yield put(actions.registerFailed(result))
        }
    } catch (e) {
        yield put(actions.registerFailed({}))
    }
}

function* deposit(action) {
    try {
        const result = yield call(depositApi, action.payload)
        console.log(result)
        if (result.status == 'success') {
            yield put(actions.depositSuccess(result))
        } else {
            yield put(actions.depositFailed(result))
        }
    } catch (e) {
        yield put(actions.depositFailed({}))
    }
}

function* root() {
    yield takeLatest(REGISTER_ATTEMPT, registerUser)
    yield takeLatest(DEPOSIT_ATTEMPT, deposit)
}

export default root