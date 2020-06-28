import {loadNameSaga} from "./rootSaga"
import {call, put} from "redux-saga/effects"
import {retrieveName} from "../../repository/NameRepository"
import {action, NAME_LOADED} from "../../model/Action";

describe("rootSaga", () => {
    it("loadNameSaga", () => {
        const saga = loadNameSaga()

        const name = "Jim"

        expect(saga.next().value).toEqual(call(retrieveName))
        expect(saga.next(name).value).toEqual(put(action(NAME_LOADED, ({ name }))))
        expect(saga.next().done).toEqual(true)
    })
})
