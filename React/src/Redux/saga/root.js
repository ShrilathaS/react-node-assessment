import {takeEvery} from 'redux-saga/effects'
import { GET_EMPLOYEES, GET_SOFTLOCK_REQUESTS } from '../Actions/action'
import { loginHandler, managerHandler, wfmManagerHandler} from './handlers'


export function* rootSaga(){
    yield takeEvery("LOGIN_ACTION",loginHandler)
    yield takeEvery(GET_EMPLOYEES, managerHandler)
    yield takeEvery(GET_SOFTLOCK_REQUESTS, wfmManagerHandler)
}
