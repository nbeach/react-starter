import {all, call, put, take} from "redux-saga/effects"
import {retrieveName} from "../../repository/NameRepository"
import {nameLoaded} from "../../model/Action"


export function* rootSaga() {
    yield all([
        loadNameSaga(),
        nameLoadedSaga()
    ])
}

export function* loadNameSaga() {
    const name: string = yield call(retrieveName)
    yield put(nameLoaded({ name }))
}


export function* nameLoadedSaga(): any {
    const action: any = yield take(nameLoaded.type)

    const name: string = yield call(async () => await Promise.resolve(action.name))
    // eslint-disable-next-line no-console
    console.log(name)
}


