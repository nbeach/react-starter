import {all, call, put} from "redux-saga/effects"
import {nameLoaded} from "../../model/action/NameLoadedAction"
import {retrieveName} from "../../repository/NameRepository"


export default function* rootSaga() {
    yield all([
        loadNameSaga(),
    ])
}

export function* loadNameSaga() {
    const name = yield call(retrieveName)
    yield put(nameLoaded({ name }))
}
