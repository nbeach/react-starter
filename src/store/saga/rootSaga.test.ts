import {loadToDoItemsSaga} from "./rootSaga"
import {call, put} from "redux-saga/effects"
import {retrieveToDoItems} from "../../service/toDoItemService"
import {expect} from "chai"
import {toDoItemsLoaded} from "../../model/action"

describe("rootSaga", () => {
    it("loadToDoItemsSaga", () => {
        const saga = loadToDoItemsSaga()

        const items = [
            { id: "123", text: "Get groceries", highPriority: true }
        ]

        expect(saga.next().value).to.eql(call(retrieveToDoItems))
        expect(saga.next(items).value).to.eql(put(toDoItemsLoaded({ items })))
        expect(saga.next().done).to.eql(true)
    })
})
