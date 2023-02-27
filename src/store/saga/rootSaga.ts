import {all, call, put} from "redux-saga/effects"
import {retrieveToDoItems} from "../../service/toDoItemService"
import {toDoItemsLoaded} from "../../model/action"
import {ToDoItem} from "../../model/domain";


export function* rootSaga() {
    yield all([
        loadToDoItemsSaga(),
        // nameLoadedSaga()
    ])
}

export function* loadToDoItemsSaga() {
    const items: ReadonlyArray<ToDoItem> = yield call(retrieveToDoItems)
    yield put(toDoItemsLoaded({ items }))
}

//
// export function* nameLoadedSaga(): any {
//     const action: any = yield take(nameLoaded.type)
//
//     const name: string = yield call(async () => await Promise.resolve(action.name))
//     // eslint-disable-next-line no-console
//     console.log(name)
// }
//
//
