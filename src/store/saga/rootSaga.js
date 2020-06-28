import {all, call, put} from "redux-saga/effects"
import {retrieveName} from "../../repository/NameRepository"
import {action, NAME_LOADED} from "../../model/Action";


export function* rootSaga() {
    yield all([
        loadNameSaga(),
    ])
}

export function* loadNameSaga() {
    const name = yield call(retrieveName)
    yield put(action(NAME_LOADED, { name }))
}
