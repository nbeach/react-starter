import {loadNameSaga} from "./rootSaga"
import {call, put} from "redux-saga/effects"
import {retrieveName} from "../../repository/NameRepository"
import {nameLoaded} from "../../model/action/NameLoadedAction"
import {expect} from "chai"

describe("rootSaga", () => {
    it("loadNameSaga", () => {
        const saga = loadNameSaga()

        const name = "Jim"

        expect(saga.next().value).to.eql(call(retrieveName))
        expect(saga.next(name).value).to.eql(put(nameLoaded({ name })))
        expect(saga.next().done).to.eql(true)
    })
})
