import {viewReducer} from "./viewReducer"
import {createViewState} from "../../util/test/factory/createAppState"
import {resetName} from "../../model/action/ResetNameAction"
import {nameLoaded} from "../../model/action/NameLoadedAction"

describe("view reducer", () => {

    describe("when nameLoaded action", () => {

        it("updates the name", () => {
            const newState = viewReducer(createViewState(), nameLoaded({ name: "Joe"}))

            expect(newState.name).toEqual("Joe")
        })

    })

    describe("when resetName action", () => {

        it("resets the name", () => {
            const priorState = createViewState( {
                    name: "John",
            })

            const newState = viewReducer(priorState, resetName({}))

            expect(newState.name).toEqual("")
        })
    })

})
