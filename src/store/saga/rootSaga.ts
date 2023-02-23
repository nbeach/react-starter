import {all, call, put} from "redux-saga/effects"
import {retrieveName} from "../../repository/NameRepository"
import {nameLoaded} from "../../model/Action"


export function* rootSaga() {
    yield all([
        loadNameSaga(),
    ])
}

export function* loadNameSaga() {
    const name: string = yield call(retrieveName)
    yield put(nameLoaded({ name }))
}



