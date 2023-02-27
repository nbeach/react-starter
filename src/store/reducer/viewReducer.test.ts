import {viewReducer} from "./viewReducer"
import {expect} from "chai"
import {viewStateDefaults} from "../../util/test/model-defaults"
import {toDoItemsLoaded, toggleToDoItemImportantRequested} from "../../model/Action"
import {describe} from "mocha";
import {ViewState} from "../../model/View";

describe("view reducer", () => {

    describe("when todoItemsLoaded action", () => {

        it("sets the todo items", () => {
            const items = [
                { id: "123", text: "Get groceries", highPriority: true }
            ]
            const newState = viewReducer(viewStateDefaults, toDoItemsLoaded({ items }))

            expect(newState.toDoItems).to.eql([
                { id: 123, description: "Get groceries", important: true}
            ])
        })

    })

    describe("when toggleToDoItemImportantRequested action", () => {

        describe("toggles the important state for the item", () => {
            let state: ViewState

            beforeEach(() => {
                 state = {
                    ...viewStateDefaults,
                    toDoItems: [
                        { id: 1, description: "First", important: false },
                        { id: 2, description: "Second", important: true },
                        { id: 3, description: "Third", important: true }
                    ]
                }
            })

            it("from true to false", () => {
                const newState = viewReducer(state, toggleToDoItemImportantRequested({ id: 2 }))

                expect(newState.toDoItems).to.eql( [
                    { id: 1, description: "First", important: false },
                    { id: 2, description: "Second", important: false },
                    { id: 3, description: "Third", important: true }
                ])
            })

            it("from false to true", () => {
                const newState = viewReducer(state, toggleToDoItemImportantRequested({ id: 1 }))

                expect(newState.toDoItems).to.eql( [
                    { id: 1, description: "First", important: true },
                    { id: 2, description: "Second", important: true },
                    { id: 3, description: "Third", important: true }
                ])
            })

        })

    })

})
