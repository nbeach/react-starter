import {viewReducer} from "./viewReducer"
import {expect} from "chai"
import {viewStateDefaults} from "../../util/test/model-defaults"
import {ViewState} from "../../model/View"
import {nameLoaded, resetName} from "../../model/Action"

describe("view reducer", () => {

    describe("when nameLoaded action", () => {

        it("updates the name", () => {
            const newState = viewReducer(viewStateDefaults, nameLoaded({ name: "Joe"}))

            expect(newState.name).to.equal("Joe")
        })

    })

    describe("when resetName action", () => {

        it("resets the name", () => {
            const priorState: ViewState = {
                ...viewStateDefaults,
                name: "John",
            }

            const newState = viewReducer(priorState, resetName({}))

            expect(newState.name).to.equal("")
        })
    })

})
