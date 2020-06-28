import {viewReducer} from "./viewReducer"
import {viewStateDefaults} from "../../util/test/model-defaults"
import {action, NAME_LOADED, RESET_NAME} from "../../model/Action";

describe("view reducer", () => {

    describe("when nameLoaded action", () => {

        it("updates the name", () => {
            const newState = viewReducer(viewStateDefaults, action(NAME_LOADED,{ name: "Joe"}))

            expect(newState.name).toEqual("Joe")
        })

    })

    describe("when resetName action", () => {

        it("resets the name", () => {
            const priorState = {
                ...viewStateDefaults,
                name: "John",
            }

            const newState = viewReducer(priorState, action(RESET_NAME))

            expect(newState.name).toEqual("")
        })
    })

})
